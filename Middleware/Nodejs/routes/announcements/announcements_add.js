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
// POST /announcements - Add a new announcement
router.post("/",  async (req, res) => {
  const { club_id, message, event_id, announcement_name } = req.body;
  const db = router.locals.db;

  if (!club_id || !message) {
    return res.status(400).json({ success: false, message: "Club ID and message are required." });
  }

  try {
    const [insertedId] = await db("Announcements").insert({
      club_id,
      announcement_name,
      event_id,
      message,
      created_by: req.user_id, // Assuming `user_id` is set in authenticateToken middleware
      created_at: new Date(),
      updated_at: new Date(),
    });

    const newAnnouncement = await db("Announcements")
      .where({ announcement_id: insertedId })
      .first();

    res.status(201).json({ success: true, data: newAnnouncement });
  } catch (err) {
    console.error("Error adding announcement:", err);
    res.status(500).json({ success: false, message: "Error adding announcement." });
  }
});

module.exports = {
  path: "/announcements/add",
  router,
};
