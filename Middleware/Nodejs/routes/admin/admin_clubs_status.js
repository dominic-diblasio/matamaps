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
      return res.status(401).json({ success: false, message: "Session expired, please login again" });
    }
    return res.status(500).json({ success: false, message: "Error during authentication" });
  }
};

// PUT /clubs/:club_id/status - Update the status of a club
router.put("/:club_id", authenticateToken, async (req, res) => {
  const { session_id } = req;
  const { club_id } = req.params;
  const { status } = req.body;
  const allowedStatuses = ["pending", "active", "inactive"];
  const db = router.locals.db;

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: `Invalid status. Allowed statuses: ${allowedStatuses.join(", ")}`,
    });
  }

  try {
    // Get the user role
    const user = await db("Users")
      .select("user_id", "role")
      .where({ session_id })
      .first();

    if (!user || user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied. Only admins can update club status." });
    }

    // Check if the club exists
    const club = await db("Clubs").where({ club_id }).first();
    if (!club) {
      return res.status(404).json({ success: false, message: "Club not found." });
    }

    // Update the club's status
    await db("Clubs").where({ club_id }).update({ status });

    // Update all associated events to match the club's new status
    await db("Events").where({ club_id }).update({ status });

    return res.status(200).json({
      success: true,
      message: "Club and associated events status updated successfully.",
    });
  } catch (err) {
    console.error("Error updating club and events status:", err);
    res.status(500).json({ success: false, message: "Error updating club and events status." });
  }
});

module.exports = {
  path: "/admin/clubs/status",
  router,
};