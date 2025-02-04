const express = require('express');
const router = express.Router();
require('dotenv').config();

const serverUrl = 'http://0.0.0.0:10000'; // Update to your current server URL

// Registration route
router.post('/', async (req, res) => {
  console.log('Received a request for registration');

  const {
    username,
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
  } = req.body;

  const db = router.locals.db;

  // Validate required fields
  if (!username || !email || !password || !confirmPassword) {
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

  // // Validate password
  // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
  // if (!passwordRegex.test(password)) {
  //   console.log('Validation failed: Password does not meet criteria');
  //   return res.status(400).json({
  //     success: false,
  //     message: 'Password must be at least 8 characters long and contain at least one letter and one number',
  //     data: null,
  //   });
  // }

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
    const existingResults = await db('Users')
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

    // Start a database transaction
    const trx = await db.transaction();

    try {
      // Insert the new user into the database with the default role "user"
      const [insertedId] = await trx('Users').insert({
        username,
        email,
        first_name,
        last_name,
        password, // Storing plain text (not recommended for production)
        role: 'user', // Default role for all new users
      });

      // Commit the transaction
      await trx.commit();

      console.log('User registered successfully with ID:', insertedId);

      return res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: {
          user_id: insertedId,
        },
      });
    } catch (insertError) {
      // Rollback the transaction in case of an error
      await trx.rollback();
      console.error('Error during transaction:', insertError);
      throw insertError;
    }
  } catch (error) {
    console.error('Unexpected error during registration:', error);
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
