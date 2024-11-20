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

router.put("/:event_id", authenticateToken, async (req, res) => {
  const { session_id } = req;
  const { event_id } = req.params;
  const { status } = req.body;
  const allowedStatuses = ["active", "pending", "inactive"];
  const db = router.locals.db;

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: `Invalid status. Allowed: ${allowedStatuses.join(", ")}` });
  }

  try {
    const user = await db("Users").select("user_id", "role").where({ session_id }).first();

    if (!user || user.role !== "club_leader") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const event = await db("Events").where({ event_id }).first();
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    await db("Events")
      .where({ event_id })
      .update({ status, updated_at: new Date() });

    const updatedEvent = await db("Events").select("updated_at").where({ event_id }).first();

    res.status(200).json({
      success: true,
      message: "Event status updated successfully",
      data: { updated_at: updatedEvent.updated_at },
    });
  } catch (err) {
    console.error("Error updating event status:", err);
    res.status(500).json({ success: false, message: "Error updating event status" });
  }
});

module.exports = {
  path: "/club-leader/events/status",
  router,
};