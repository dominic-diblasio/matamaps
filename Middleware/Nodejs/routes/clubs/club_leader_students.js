const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;

    if (!session_id) {
      return res.status(401).json({ success: false, message: "Invalid token payload" });
    }

    // Attach session ID to the request object
    req.session_id = session_id;

    next();
  } catch (err) {
    console.error("Authentication error:", err);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Session expired, please login again",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Error during authentication",
    });
  }
};

// Endpoint to get students for a specific club
router.get("/:club_id", authenticateToken, async (req, res) => {
  const { session_id } = req;
  const { club_id } = req.params;
  const db = router.locals.db;

  try {
    // Get the user ID and role
    const user = await db("Users")
      .select("user_id", "role")
      .where({ session_id })
      .first();

    if (!user || user.role !== "club_leader") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    // Verify that the leader manages the given club
    const leaderClub = await db("ClubMembers")
      .select("club_id")
      .where({
        user_id: user.user_id,
        role_in_club: "leader",
        club_id,
        status: "active",
      })
      .first();

    if (!leaderClub) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view students of this club.",
      });
    }

    // Fetch students for the given club
    const students = await db("ClubRegistrations")
      .select("id", "user_id", "username", "student_number", "status")
      .where({ club_id });

    return res.status(200).json({
      success: true,
      data: students,
    });
  } catch (err) {
    console.error("Error fetching club students:", err);
    res.status(500).json({ success: false, message: "Error fetching students" });
  }
});

module.exports = {
  path: "/club-leader/students",
  router,
}