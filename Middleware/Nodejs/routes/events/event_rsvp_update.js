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
router.put("/:rsvp_id", authenticateToken, async (req, res) => {
    const { rsvp_id } = req.params;
    const { status } = req.body;
    const allowedStatuses = ["accepted", "declined", "tentative", "pending"];
    const db = router.locals.db;
  
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status provided." });
    }
  
    try {
      await db("EventRSVP")
        .where({ rsvp_id })
        .update({ status, updated_at: new Date() });
  
      res.status(200).json({ success: true, message: "RSVP status updated successfully." });
    } catch (err) {
      console.error("Error updating RSVP status:", err);
      res.status(500).json({ success: false, message: "Error updating RSVP status." });
    }
  });
  module.exports = {
    path: "/events/rsvps/update",
    router,
  };