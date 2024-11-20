const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token || req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;

    if (!session_id) {
      return res.status(401).json({ success: false, message: 'Invalid token payload' });
    }

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

    return res.status(500).json({ success: false, message: 'Error during authentication' });
  }
};

// Exit a club (set membership status to 'inactive')
router.post('/:club_id', authenticateToken, async (req, res) => {
  const { club_id } = req.params;
  const { session_id } = req;
  const db = router.locals.db;

  try {
    // Get the user ID based on session ID
    const user = await db('Users').select('user_id').where({ session_id }).first();

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if the user is an active member of the club
    const membership = await db('ClubRegistrations')
      .select('id', 'status')
      .where({ club_id, user_id: user.user_id })
      .first();

    if (!membership) {
      return res.status(404).json({
        success: false,
        message: 'User is not a member of this club',
      });
    }

    if (membership.status !== 'active') {
      return res.status(400).json({
        success: false,
        message: 'You can only exit the club if you are an active member',
      });
    }

    // Update the membership status to 'inactive'
    await db('ClubRegistrations')
      .update({ status: 'inactive'})
      .where({ id: membership.id });

    res.status(200).json({
      success: true,
      message: 'You have successfully exited the club',
    });
  } catch (err) {
    console.error('Error exiting the club:', err);
    res.status(500).json({ success: false, message: 'An error occurred while exiting the club' });
  }
});

module.exports = {
  path: '/club/exit',
  router,
};