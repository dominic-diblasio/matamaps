const express = require('express');
const axios = require('axios');
const router = express.Router();

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const authResponse = await axios.get('http://localhost:3500/auth/authenticateToken', {
      headers: {
        Cookie: req.headers.cookie // Forward the cookies
      }
    });

    if (!authResponse.data.success) {
      return res.status(401).json({ success: false, message: 'Authentication failed' });
    }

    req.session_id = authResponse.data.session_id;
    next();
  } catch (err) {
    console.error('Authentication error:', err);
    if (err.response && err.response.status === 403) {
      return res.status(403).json({ success: false, message: 'Token expired', redirect: '/login' });
    }
    return res.status(500).json({
      success: false,
      message: 'Error during authentication',
    });
  }
};

// Endpoint to update notification preferences
router.put('/:session_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req.params;
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