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

// Endpoint to view club details
router.get('/:club_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { club_id } = req.params;

  try {
    // Fetch club details by club_id
    const club = await db('Clubs')
      .select('club_id', 'club_name', 'description', 'created_by', 'created_at', 'updated_at')
      .where({ club_id })
      .first();

    if (!club) {
      return res.status(404).json({ success: false, message: 'Club not found' });
    }

    console.log(`Fetched details for club_id: ${club_id}`);

    res.status(200).json({
      success: true,
      data: club
    });
  } catch (err) {
    console.error('Error fetching club details:', err);
    return res.status(500).json({
      success: false,
      message: 'Error fetching club details',
    });
  }
});

module.exports = {
  path: '/clubs/view',
  router,
};