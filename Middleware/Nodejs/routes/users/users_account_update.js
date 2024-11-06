const express = require('express');
const axios = require('axios');
const router = express.Router();

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const authResponse = await axios.get('http:/localhost:3500/auth/authenticateToken', {
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

// Endpoint to update account information
router.put('/:session_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req.params;
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Username, email, and password are required' });
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

    // Update user account information in the Users table
    await db('Users')
      .where({ user_id })
      .update({
        username,
        email,
        password // Note: Storing passwords in plain text is not recommended for production
      });

    console.log(`Account information updated for user_id: ${user_id}`);

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