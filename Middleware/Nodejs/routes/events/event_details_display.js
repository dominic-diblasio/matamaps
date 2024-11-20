const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      console.error("Token missing in the request");
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;

    if (!session_id) {
      console.error("Session ID missing in the token payload");
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

// Endpoint to fetch event details by event_id
router.get("/:event_id", authenticateToken, async (req, res) => {
  const { event_id } = req.params;
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

    // Fetch the event details
    const event = await db("Events").where({ event_id }).first();

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, data: event });
  } catch (err) {
    console.error("Error fetching event details:", err);
    res.status(500).json({ success: false, message: "Error fetching event details" });
  }
});

module.exports = {
  path: "/club-leader/events/details",
  router,
};
