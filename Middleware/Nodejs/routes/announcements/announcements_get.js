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
    return res.status(500).json({ success: false, message: "Error during authentication" });
  }
};
router.get("/:club_id", authenticateToken, async (req, res) => {
  const { club_id } = req.params; // Fetch club_id from query params
  const db = router.locals.db;

  if (!club_id) {
    return res.status(400).json({ success: false, message: "Club ID is required." });
  }

  try {
    const announcements = await db("Announcements")
      .where({ club_id })
      .select(
        "announcement_id",
        "club_id",
        "announcement_name",
        "event_id",
        "message",
        "created_by",
        "created_at",
        "updated_at"
      );

    if (!announcements.length) {
      return res.status(404).json({ success: false, message: "No announcements found." });
    }

    res.status(200).json({ success: true, data: announcements });
  } catch (err) {
    console.error("Error fetching announcements:", err);
    res.status(500).json({ success: false, message: "Error fetching announcements." });
  }
});

module.exports = {
    path: "/announcements/get",
    router,
  };