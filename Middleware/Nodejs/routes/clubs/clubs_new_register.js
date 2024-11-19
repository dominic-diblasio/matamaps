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

    // Check if session ID exists in Redis
    const sessionExists = await redisClient.get(session_id);
    if (!sessionExists) {
      return res.status(401).json({ success: false, message: 'Session expired or invalid' });
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

// Endpoint to request the creation of a new club
router.post('/', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;
  const { club_name, description } = req.body;

  if (!club_name || !description) {
    return res.status(400).json({ success: false, message: 'Club name and description are required' });
  }

  try {
    // Retrieve user ID using session ID
    const user = await db('Users')
      .select('user_id')
      .where({ session_id })
      .first();

    if (!user) {
      return res.status(404).json({ success: false, message: 'Session ID not found' });
    }

    const { user_id } = user;

    // Insert a new club request with status 'pending'
    await db('ClubApprovalRequests').insert({
      requested_by: user_id,
      club_name,
      description,
      status: 'pending',
    });

    console.log(`New club request submitted by user_id: ${user_id} for club: ${club_name}`);

    res.status(201).json({
      success: true,
      message: 'Club request submitted successfully and is pending approval',
    });
  } catch (err) {
    console.error('Error submitting club request:', err);
    return res.status(500).json({
      success: false,
      message: 'Error submitting club request',
    });
  }
});

module.exports = {
  path: '/clubs/request',
  router,
};