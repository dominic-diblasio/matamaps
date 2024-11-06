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

// Endpoint to request the creation of a new club
router.post('/:session_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req.params;
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