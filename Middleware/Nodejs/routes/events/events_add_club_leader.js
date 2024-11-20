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

// Endpoint to add an event
router.post("/", authenticateToken, async (req, res) => {
  const { session_id } = req;
  const {
    club_id,
    event_name,
    event_date,
    location,
    event_image,
    event_description,
    status,
  } = req.body;

  console.log("Incoming request body:", req.body);

  const allowedStatuses = ["active", "pending", "inactive"];
  const db = router.locals.db;

  // Validate required fields
  if (!club_id || !event_name || !event_date || !location || !status) {
    console.error(
      "Validation error: Missing required fields",
      { club_id, event_name, event_date, location, status }
    );
    return res.status(400).json({
      success: false,
      message: "All required fields (club_id, event_name, event_date, location, status) must be provided.",
    });
  }

  if (!allowedStatuses.includes(status)) {
    console.error("Validation error: Invalid status provided:", status);
    return res.status(400).json({
      success: false,
      message: `Invalid status. Allowed statuses: ${allowedStatuses.join(", ")}`,
    });
  }

  try {
    // Get the user ID and validate role
    const user = await db("Users")
      .select("user_id", "role")
      .where({ session_id })
      .first();

    console.log("Authenticated user:", user);

    if (!user || user.role !== "club_leader") {
      console.error("Unauthorized access attempt by user:", user);
      return res.status(403).json({ success: false, message: "Agg denied" });
    }

    // Validate that the user is the leader of the given club
    const leaderClub = await db("ClubMembers")
      .select("club_id")
      .where({
        user_id: user.user_id,
        role_in_club: "leader",
        club_id,
        status: "active",
      })
      .first();

    console.log("Validated leader club:", leaderClub);

    if (!leaderClub) {
      console.error("Club validation failed for club_id:", club_id);
      return res.status(403).json({
        success: false,
        message: "You are not authorized to add events for this club.",
      });
    }

    // Insert the event into the database
    const newEvent = {
      club_id,
      event_name,
      event_date,
      location,
      event_image: event_image || null, // Optional field
      event_description: event_description || null, // Optional field
      created_by: user.user_id,
      created_at: new Date(),
      updated_at: new Date(),
      status,
    };

    const [event_id] = await db("Events").insert(newEvent).returning("event_id");

    console.log("Event successfully added with ID:", event_id);

    return res.status(201).json({
      success: true,
      message: "Event added successfully.",
      data: { event_id },
    });
  } catch (err) {
    console.error("Error adding event:", err);
    res.status(500).json({ success: false, message: "Error adding event." });
  }
});

module.exports = {
  path: "/club-leader/events/add",
  router,
};
