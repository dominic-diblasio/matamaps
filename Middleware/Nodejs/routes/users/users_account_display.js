const express = require('express');
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

// Endpoint to display user details
router.get('/', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;

  try {
    // Retrieve user details using session ID
    const user = await db('Users')
      .select('user_id', 'username', 'email', 'first_name', 'last_name')
      .where({ session_id })
      .first();

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found for the session' });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.error('Error fetching user details:', err);
    return res.status(500).json({
      success: false,
      message: 'Error fetching user details',
    });
  }
});

module.exports = {
    path: '/users/account/details',
    router,
  };