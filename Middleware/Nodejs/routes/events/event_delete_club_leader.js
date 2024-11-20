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
    const { session_id } = decoded;

    if (!session_id) {
      return res.status(401).json({ success: false, message: "Invalid token payload" });
    }

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

// Endpoint to delete an event
router.delete("/delete/:event_id", authenticateToken, async (req, res) => {
  const { event_id } = req.params;
  const { session_id } = req;
  const db = router.locals.db;

  try {
    // Verify user and role
    const user = await db("Users")
      .select("user_id", "role")
      .where({ session_id })
      .first();

    if (!user || user.role !== "club_leader") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    // Check if the event exists and belongs to a club managed by the user
    const event = await db("Events").where({ event_id }).first();

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const leaderClub = await db("ClubMembers")
      .select("club_id")
      .where({
        user_id: user.user_id,
        role_in_club: "leader",
        club_id: event.club_id,
        status: "active",
      })
      .first();

    if (!leaderClub) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete events for this club.",
      });
    }

    // Delete the event
    await db("Events").where({ event_id }).del();

    return res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (err) {
    console.error("Error deleting event:", err);
    res.status(500).json({ success: false, message: "Error deleting event" });
  }
});

module.exports = {
  path: "/club-leader/events",
  router,
};
