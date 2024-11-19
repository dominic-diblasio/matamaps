const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.session_id = decoded.session_id;

    next();
  } catch (err) {
    console.error("Authentication error:", err);
    return res.status(500).json({ success: false, message: "Authentication failed" });
  }
};

// Endpoint to fetch club details by ID
router.get("/:club_id", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { club_id } = req.params;

  try {
    const club = await db("Clubs").select("club_id", "club_name").where({ club_id }).first();
    if (!club) {
      return res.status(404).json({ success: false, message: "Club not found" });
    }
    res.status(200).json({ success: true, data: club });
  } catch (err) {
    console.error("Error fetching club details:", err);
    res.status(500).json({ success: false, message: "Error fetching club details" });
  }
});

module.exports = {
  path: "/club/name",
  router,
};