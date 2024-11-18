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

// Endpoint to retrieve all members of a specified club
router.get('/:club_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { club_id } = req.params;

  try {
    // Fetch all members associated with the specified club_id
    const members = await db('ClubMembers')
      .select('membership_id', 'user_id', 'role_in_club', 'status')
      .where({ club_id });

    if (members.length === 0) {
      return res.status(404).json({ success: false, message: 'No members found for this club' });
    }

    console.log(`Fetched ${members.length} members for club_id: ${club_id}`);

    res.status(200).json({
      success: true,
      data: members
    });
  } catch (err) {
    console.error('Error fetching club members:', err);
    return res.status(500).json({
      success: false,
      message: 'Error fetching club members',
    });
  }
});

module.exports = {
  path: '/clubs/members',
  router,
};