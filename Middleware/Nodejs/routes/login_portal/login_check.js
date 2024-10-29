const express = require('express');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
require('dotenv').config();
const serverUrl = 'http://localhost:3500'; // Update to your current server URL

// Login route to validate credentials, issue JWT, and store session ID
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const db = router.locals.db;

  if (!email || !password) {
    console.log('Email or Password missing in the request');
    return res.status(400).json({
      success: false,
      message: 'Email and Password are required',
      data: null,
    });
  }

  try {
    console.log(`Querying the database for email: ${email}`);
    const result = await db('users').select('*').where({ email }).first();

    if (!result) {
      console.log('No user found for the given email');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        data: null,
      });
    }

    if (password === result.password) {
      console.log('Password is valid. Proceeding to create JWT and session.');
      const sessionId = uuidv4();
      console.log('Generated session ID:', sessionId);
      const token = jwt.sign({ session_id: sessionId, role: result.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('Generated JWT token:', token);

      await db('users').where('user_id', result.user_id).update({ session_id: sessionId });
      console.log('Updated session ID in the database');

      res.cookie('jwt_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.cookie('session_id', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: 3600000,
      });

      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      console.log('Cookies set: jwt_token and session_id');

      return res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
          jwt_token: token,
          session_id: sessionId,
        },
      });
    } else {
      console.log('Password mismatch. Invalid credentials.');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        data: null,
      });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({
      success: false,
      message: 'Error during login',
      data: null,
    });
  }
});

module.exports = {
  path: '/login',
  router,
};
