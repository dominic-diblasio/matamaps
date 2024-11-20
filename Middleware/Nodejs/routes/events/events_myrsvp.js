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
    return res.status(500).json({ success: false, message: "Error during authentication" });
  }
};
// Get all events RSVPed by the user
router.get("/", authenticateToken, async (req, res) => {
    const { session_id } = req;
    const db = router.locals.db;
  
    try {
      const user = await db("Users")
        .select("user_id")
        .where({ session_id })
        .first();
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const events = await db("EventRSVP")
        .join("Events", "EventRSVP.event_id", "Events.event_id")
        .select(
          "Events.event_id",
          "Events.event_name",
          "Events.event_date",
          "Events.location",
          "EventRSVP.status",
          "EventRSVP.updated_at"
        )
        .where("EventRSVP.user_id", user.user_id); // Use user.user_id here
  
      res.status(200).json({ success: true, data: events });
    } catch (err) {
      console.error("Error fetching user RSVPs:", err);
      res.status(500).json({ success: false, message: "Error fetching user RSVPs." });
    }
  });
  
  module.exports = {
    path: "/events/my-rsvps",
    router,
  };
  