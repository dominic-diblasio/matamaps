const express = require('express');
const axios = require('axios');
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
    const user = await db("Users")
      .select("user_id", "role")
      .where({ session_id })
      .first();

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // If user is not a club leader, return all active clubs
    if (user.role !== "club_leader") {
      const activeClubs = await db("Clubs").select("*").where({ status: "active" });
      return res.status(200).json({ success: true, data: activeClubs });
    }

    // Fetch clubs managed by the leader
    const leaderClubs = await db("ClubMembers")
      .select("club_id")
      .where({ user_id: user.user_id, role_in_club: "leader", status: "active" });

    const leaderClubIds = leaderClubs.map((club) => club.club_id);

    // Fetch active clubs excluding those managed by the leader
    const filteredClubs = await db("Clubs")
      .select("*")
      .where({ status: "active" })
      .whereNotIn("club_id", leaderClubIds);

    return res.status(200).json({ success: true, data: filteredClubs });
  } catch (err) {
    console.error("Error fetching filtered clubs:", err);
    res.status(500).json({ success: false, message: "Error fetching filtered clubs" });
  }
});

module.exports = {
  path: "/clubs/filtered-active",
  router,
};
