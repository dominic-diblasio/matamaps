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

router.post("/", authenticateToken, async (req, res) => {
    const db = router.locals.db;
    const { event_id, username } = req.body;
  
    try {
      const { session_id } = req;
  
      // Retrieve user details using session ID
      const user = await db("Users").select("user_id").where({ session_id }).first();
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
      }
  
      const { user_id } = user;
  
      // Check if already RSVP'd
      const existingRSVP = await db("EventRSVP")
        .where({ event_id, user_id })
        .first();
  
      if (existingRSVP) {
        return res.status(400).json({
          success: false,
          message: `You have already RSVP'd as ${existingRSVP.status}.`,
        });
      }
  
      // Insert RSVP with pending status
      await db("EventRSVP").insert({
        event_id,
        user_id,
        status: "pending",
        created_at: new Date(),
        updated_at: new Date(),
      });
  
      res.status(200).json({
        success: true,
        message: "RSVP submitted successfully. Please wait for confirmation.",
      });
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      res.status(500).json({
        success: false,
        message: "An error occurred while submitting RSVP.",
      });
    }
  });
  
  module.exports = {
    path: "/events/rsvp",
    router,
  };