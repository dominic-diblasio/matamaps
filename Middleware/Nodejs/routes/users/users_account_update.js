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


router.put('/', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;
  const { username, first_name, last_name, email } = req.body;

  console.log('Received update request with data:', { username, first_name, last_name, email });

  if (!username || !first_name || !last_name || !email) {
    console.error('Validation failed: Missing fields', { username, first_name, last_name, email });
    return res.status(400).json({ success: false, message: 'First name, last name, and email are required' });
  }

  try {
    // Retrieve user ID using session ID
    const user = await db('Users')
      .select('user_id')
      .where({ session_id })
      .first();

    if (!user) {
      console.error('Session ID not found in the database:', session_id);
      return res.status(404).json({ success: false, message: 'Session ID not found' });
    }

    const { user_id } = user;

    console.log('Updating user details for user_id:', user_id);

    // Update user account information in the Users table
    await db('Users')
      .where({ user_id })
      .update({
        username,
        first_name,
        last_name,
        email,
        updated_at: new Date(),
      });

    console.log(`Account information updated successfully for user_id: ${user_id}`);
    res.status(200).json({
      success: true,
      message: 'Account information updated successfully',
    });
  } catch (err) {
    console.error('Error updating account information:', err);
    return res.status(500).json({
      success: false,
      message: 'Error updating account information',
    });
  }
});


module.exports = {
  path: '/users/account/update',
  router,
};
