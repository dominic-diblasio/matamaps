const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
// const redisClient = require("../../redisClient"); // Import Redis client
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const db = router.locals.db;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and Password are required" });
  }

  try {
    const result = await db("Users").select("*").where({ email }).first();

    if (!result) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // const isPasswordValid = await bcrypt.compare(password, result.password);

    if (password === result.password) {
      const session_id = uuidv4();
      const token = jwt.sign({ session_id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      // // Save session_id to Redis with 1-hour expiration
      // await redisClient.setEx(session_id, 60, "active");

      // Update the database with the session_id
      await db("Users").where("user_id", result.user_id).update({ session_id });
console.log("session_id updated:",session_id);
      // Send the JWT in an HttpOnly cookie
      res.cookie("jwt_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 60 * 60 * 1000, // 1 hour
      });

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: { jwt_token: token },
      });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Error during login" });
  }
});

module.exports = {
  path: "/user/login/check",
  router,
};

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const { v4: uuidv4 } = require('uuid');
// const router = express.Router();
// require('dotenv').config();
// const serverUrl = 'http://localhost:3500'; // Update to your current server URL

// // Login route to validate credentials, issue JWT, and store session ID
// router.post('/', async (req, res) => {
//   const { email, password } = req.body;
//   const db = router.locals.db;

//   if (!email || !password) {
//     console.log('Email or Password missing in the request');
//     return res.status(400).json({
//       success: false,
//       message: 'Email and Password are required',
//       data: null,
//     });
//   }

//   try {
//     console.log(`Querying the database for email: ${email}`);
//     const result = await db('users').select('*').where({ email }).first();

//     if (!result) {
//       console.log('No user found for the given email');
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials',
//         data: null,
//       });
//     }

//     if (password === result.password) {
//       console.log('Password is valid. Proceeding to create JWT and session.');
//       const sessionId = uuidv4();
//       console.log('Generated session ID:', sessionId);
//       const token = jwt.sign({ session_id: sessionId, role: result.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       console.log('Generated JWT token:', token);

//       await db('users').where('user_id', result.user_id).update({ session_id: sessionId });
//       console.log('Updated session ID in the database');

//       res.cookie('jwt_token', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'Lax',
//         maxAge: 24 * 60 * 60 * 1000,
//       });

//       res.cookie('session_id', sessionId, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'Strict',
//         maxAge: 3600000,
//       });

//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.setHeader('Access-Control-Allow-Credentials', 'true');

//       console.log('Cookies set: jwt_token and session_id');

//       return res.status(200).json({
//         success: true,
//         message: 'Login successful',
//         data: {
//           jwt_token: token,
//           session_id: sessionId,
//         },
//       });
//     } else {
//       console.log('Password mismatch. Invalid credentials.');
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials',
//         data: null,
//       });
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({
//       success: false,
//       message: 'Error during login',
//       data: null,
//     });
//   }
// });

// module.exports = {
//   path: '/login',
//   router,
// };