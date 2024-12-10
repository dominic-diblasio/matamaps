const express = require('express');
const axios = require('axios');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies.jwt_token || req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;

    if (!session_id) {
      return res.status(401).json({ success: false, message: 'Invalid token payload' });
    }


    // Attach session ID to the request object
    req.session_id = session_id;

    next();
  } catch (err) {
    console.error('Authentication error:', err);

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Session expired, please login again',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Error during authentication',
    });
  }
};

// Endpoint to update notification preferences
router.put('/', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;
  const { notification_status } = req.body; // Expected values: 'on' or 'off'

  if (!notification_status || !['on', 'off'].includes(notification_status)) {
    return res.status(400).json({ success: false, message: 'Invalid notification status' });
  }

  try {
    // Retrieve user ID using session ID
    const user = await db('users')
      .select('user_id')
      .where({ session_id })
      .first();

    if (!user) {
      return res.status(404).json({ success: false, message: 'Session ID not found' });
    }

    const { user_id } = user;

    // Update the notification setting in the Preferences table
    await db('Preferences')
      .where({ user_id })
      .update({ notification_settings: notification_status });

    console.log(`Notification settings updated for user_id: ${user_id} to ${notification_status}`);

    res.status(200).json({
      success: true,
      message: `Notification settings updated to ${notification_status}`,
    });
  } catch (err) {
    console.error('Error updating preferences:', err);
    return res.status(500).json({
      success: false,
      message: 'Error updating preferences',
    });
  }
});

module.exports = {
  path: '/users/preferences',
  router,
};