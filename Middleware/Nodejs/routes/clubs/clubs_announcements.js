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

// Endpoint to create an announcement for a club
router.post('/:club_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { club_id } = req.params;
  const { message, event_id = null } = req.body; // event_id is optional
  const session_id = req.session_id;

  if (!message) {
    return res.status(400).json({ success: false, message: 'Message is required for an announcement' });
  }

  try {
    // Retrieve user ID and role using session ID
    const user = await db('Users')
      .select('user_id', 'role')
      .where({ session_id })
      .first();

    if (!user) {
      return res.status(404).json({ success: false, message: 'Session ID not found' });
    }

    const { user_id, role } = user;

    // Check if the user is a club leader
    const clubMember = await db('ClubMembers')
      .where({ club_id, user_id, role_in_club: 'leader' })
      .first();

    if (!clubMember) {
      return res.status(403).json({ success: false, message: 'Only club leaders can post announcements' });
    }

    // Insert the announcement into the Announcements table
    await db('Announcements').insert({
      club_id,
      event_id,
      message,
      created_by: user_id,
      created_at: new Date(),
      updated_at: new Date()
    });

    console.log(`Announcement created by user_id: ${user_id} for club_id: ${club_id}`);

    res.status(201).json({
      success: true,
      message: 'Announcement posted successfully',
    });
  } catch (err) {
    console.error('Error creating announcement:', err);
    return res.status(500).json({
      success: false,
      message: 'Error creating announcement',
    });
  }
});

module.exports = {
  path: '/clubs/announcements',
  router,
};