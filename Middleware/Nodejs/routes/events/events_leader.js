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

router.get("/", authenticateToken, async (req, res) => {
    const { session_id } = req;
    const db = router.locals.db;
  
    try {
      // Get the user ID and validate role
      const user = await db("Users")
        .select("user_id", "role")
        .where({ session_id })
        .first();
  
      if (!user || user.role !== "club_leader") {
        return res.status(403).json({ success: false, message: "Access denied" });
      }
  
      // Get clubs managed by the leader
      const leaderClubs = await db("ClubMembers")
        .select("club_id")
        .where({ user_id: user.user_id, role_in_club: "leader", status: "active" });
  
      if (leaderClubs.length === 0) {
        return res.status(200).json({ success: true, data: [] });
      }
  
      const clubIds = leaderClubs.map((club) => club.club_id);
  
      // Get events for those clubs
      const events = await db("Events").whereIn("club_id", clubIds).andWhere("status", "active");
  
      return res.status(200).json({ success: true, data: events });
    } catch (err) {
      console.error("Error fetching leader's club events:", err);
      res.status(500).json({ success: false, message: "Error fetching events" });
    }
  });
  
  module.exports = {
    path: '/club-leader/events',
    router,
  };