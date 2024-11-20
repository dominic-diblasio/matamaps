const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;

    if (!session_id) {
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

// Endpoint to update the status of a student
router.put("/:id/status", authenticateToken, async (req, res) => {
  const { session_id } = req;
  const { id } = req.params; // ID of the ClubRegistrations entry
  const { status } = req.body; // New status to be updated
  const allowedStatuses = ["pending", "active", "inactive"];
  const db = router.locals.db;

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: `Invalid status. Allowed statuses: ${allowedStatuses.join(", ")}`,
    });
  }

  try {
    // Get the user ID and role
    const user = await db("Users")
      .select("user_id", "role")
      .where({ session_id })
      .first();

    if (!user || user.role !== "club_leader") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    // Check if the user is the leader of the club associated with this student
    const clubRegistration = await db("ClubRegistrations")
      .join("ClubMembers", "ClubRegistrations.club_id", "ClubMembers.club_id")
      .select("ClubRegistrations.club_id")
      .where({
        "ClubRegistrations.id": id,
        "ClubMembers.user_id": user.user_id,
        "ClubMembers.role_in_club": "leader",
        "ClubMembers.status": "active",
      })
      .first();

    if (!clubRegistration) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update the status for this student.",
      });
    }

    // Update the status of the student
    await db("ClubRegistrations").where({ id }).update({ status });

    return res.status(200).json({
      success: true,
      message: "Student status updated successfully.",
    });
  } catch (err) {
    console.error("Error updating student status:", err);
    res.status(500).json({ success: false, message: "Error updating student status" });
  }
});

module.exports = {
  path: "/club-leader/students",
  router,
};