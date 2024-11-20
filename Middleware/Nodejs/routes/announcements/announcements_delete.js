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
router.delete("/:announcement_id", authenticateToken, async (req, res) => {
  const { announcement_id } = req.params;
  const db = router.locals.db;

  if (!announcement_id) {
    return res.status(400).json({ success: false, message: "Announcement ID is required." });
  }

  try {
    const deletedCount = await db("Announcements").where({ announcement_id }).del();

    if (deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Announcement not found." });
    }

    res.status(200).json({ success: true, message: "Announcement deleted successfully." });
  } catch (err) {
    console.error("Error deleting announcement:", err);
    res.status(500).json({ success: false, message: "Error deleting announcement." });
  }
});

module.exports = {
    path: "/announcements/delete",
    router,
  };