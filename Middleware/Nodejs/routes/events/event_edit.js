const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      console.error("Token missing in the request");
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;

    if (!session_id) {
      console.error("Session ID missing in the token payload");
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
router.put("/:event_id", authenticateToken, async (req, res) => {
    const { event_id } = req.params;
    const {
      event_name,
      event_date,
      location,
      event_image,
      event_description,
      status,
    } = req.body;
    const { session_id } = req;
    const db = router.locals.db;
  
    try {
      // Authenticate the user
      const user = await db("Users")
        .select("user_id", "role")
        .where({ session_id })
        .first();
  
      if (!user || user.role !== "club_leader") {
        return res.status(403).json({ success: false, message: "Access denied" });
      }
  
      // Fetch the event to ensure it exists
      const existingEvent = await db("Events").where({ event_id }).first();
  
      if (!existingEvent) {
        return res.status(404).json({ success: false, message: "Event not found" });
      }
  
      // Update the event
      await db("Events")
        .where({ event_id })
        .update({
          event_name,
          event_date,
          location,
          event_image: event_image || null,
          event_description: event_description || null,
          status,
          updated_at: new Date(),
        });
  
      res.status(200).json({ success: true, message: "Event updated successfully" });
    } catch (err) {
      console.error("Error updating event:", err);
      res.status(500).json({ success: false, message: "Error updating event" });
    }
  });
  module.exports = {
    path: "/club-leader/events/edit",
    router,
  };
  