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

// Exit a club (delete user with allowed statuses)
router.post('/:club_id', authenticateToken, async (req, res) => {
  const { club_id } = req.params;
  const { session_id } = req;
  const db = router.locals.db;

  try {
    console.log(`Request received to exit club with ID: ${club_id}`);
    console.log(`Session ID from token: ${session_id}`);

    // Get the user ID based on session ID
    const user = await db('Users').select('user_id').where({ session_id }).first();
    console.log(`User fetched from DB: ${JSON.stringify(user)}`);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if the user is a member of the club
    const membership = await db('ClubRegistrations')
      .select('id', 'status')
      .where({ club_id, user_id: user.user_id })
      .first();
    console.log(`Membership fetched: ${JSON.stringify(membership)}`);

    if (!membership) {
      return res.status(404).json({
        success: false,
        message: 'User is not a member of this club',
      });
    }

    // Allow only 'pending' or 'active' statuses to exit
    if (membership.status !== 'active' && membership.status !== 'pending') {
      console.log(`Membership status is not allowed for exit: ${membership.status}`);
      return res.status(400).json({
        success: false,
        message: 'You can only exit the club if you have an active or pending membership',
      });
    }

    // Delete the user's membership in the club
    await db('ClubRegistrations').where({ id: membership.id }).del();
    console.log('Membership successfully deleted');

    res.status(200).json({
      success: true,
      message: 'User has been successfully deleted from the system',
    });
  } catch (err) {
    console.error('Error deleting the user:', err);
    res.status(500).json({ success: false, message: 'An error occurred while deleting the user' });
  }
});


module.exports = {
  path: '/club/exit',
  router,
};
