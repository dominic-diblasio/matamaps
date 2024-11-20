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

// Get membership status for a user in a club
router.get("/:club_id", authenticateToken, async (req, res) => {
  const { club_id } = req.params;
  const { session_id } = req;
  const db = router.locals.db;

  try {
    // Fetch user ID based on session ID
    const user = await db("Users").select("user_id").where({ session_id }).first();

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Fetch membership status for the user in the specified club
    const membership = await db("ClubRegistrations")
      .select("status")
      .where({ club_id, user_id: user.user_id })
      .first();

    if (!membership) {
      return res.status(404).json({
        success: false,
        message: "No membership found for the specified club and user",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        status: membership.status,
      },
    });
  } catch (err) {
    console.error("Error fetching membership status:", err);
    res.status(500).json({ success: false, message: "Error fetching membership status" });
  }
});

module.exports = {
  path: "/club/membership/status",
  router,
};
