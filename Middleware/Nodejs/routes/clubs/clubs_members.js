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