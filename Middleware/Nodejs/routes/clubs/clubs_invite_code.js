const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
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

// Endpoint to generate and send an invitation code for a club
router.post('/:club_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { club_id } = req.params;

  try {
    // Check if the club is active
    const club = await db('Clubs')
      .select('club_id')
      .where({ club_id, status: 'active' })
      .first();

    if (!club) {
      return res.status(404).json({ success: false, message: 'Club not found or inactive' });
    }

    // Generate a unique invitation code
    const invitationCode = uuidv4().slice(0, 8); // Shortened for simplicity

    // Insert the invitation into the ClubInvitations table
    await db('ClubInvitations').insert({
      club_id: club.club_id,
      invitation_code: invitationCode,
      status: 'active',
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Expires in 7 days
    });

    console.log(`Generated invitation code ${invitationCode} for club_id: ${club_id}`);

    res.status(201).json({
      success: true,
      message: 'Invitation code generated successfully',
      data: {
        club_id: club_id,
        invitation_code: invitationCode
      }
    });
  } catch (err) {
    console.error('Error generating invitation code:', err);
    return res.status(500).json({
      success: false,
      message: 'Error generating invitation code',
    });
  }
});

module.exports = {
  path: '/clubs/invite',
  router,
};