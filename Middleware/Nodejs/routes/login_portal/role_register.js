const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const serverUrl = 'http://localhost:3500'; // Update to your current server URL

// Registration route for user, club leader, event manager, administrator
router.post('/', async (req, res) => {
  console.log('Received a request for registration');

  const {
    role, // user, club leader, event manager, administrator
    username,
    email,
    password,
    confirmPassword,
  } = req.body;

  const db = router.locals.db;

  // Validate required fields
  if (!role || !username || !email || !password || !confirmPassword) {
    console.log('Validation failed: Missing required fields');
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
      data: null,
    });
  }

  // Validate email format
  const emailRegex = /@my\.csun\.edu$|@csun\.edu$/;
  if (!emailRegex.test(email)) {
    console.log('Validation failed: Invalid email domain');
    return res.status(400).json({
      success: false,
      message: 'Email must end with @my.csun.edu or @csun.edu',
      data: null,
    });
  }

  // Validate password
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
  if (!passwordRegex.test(password)) {
    console.log('Validation failed: Password does not meet criteria');
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 8 characters long and contain at least one letter and one number',
      data: null,
    });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    console.log('Validation failed: Passwords do not match');
    return res.status(400).json({
      success: false,
      message: 'Passwords do not match',
      data: null,
    });
  }

  try {
    console.log('Checking if email already exists in the database...');
    const existingResults = await db('users')
      .select('user_id')
      .where('email', email);

    if (existingResults.length > 0) {
      console.log('Email already exists in the database');
      return res.status(401).json({
        success: false,
        message: 'Email already exists',
        data: null,
      });
    }

    const trx = await db.transaction();

    try {
      const [insertedId] = await trx('users').insert({
        username,
        email,
        password, // Store as plain text (note: this is not recommended for production)
        role,
      });

      await trx.commit();

      return res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: null,
      });
    } catch (insertError) {
      await trx.rollback();
      console.error('Error during transaction:', insertError);
      throw insertError;
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred',
      data: null,
    });
  }
});

module.exports = {
  path: '/register',
  router,
};