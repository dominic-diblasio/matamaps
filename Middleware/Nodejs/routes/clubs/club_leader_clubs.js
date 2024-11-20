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

router.get("/", authenticateToken, async (req, res) => {
  const { session_id } = req;
  const db = router.locals.db;

  try {
    const user = await db("Users")
      .select("user_id", "role")
      .where({ session_id })
      .first();

    if (!user || user.role !== "club_leader") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const leaderClubs = await db("ClubMembers")
      .join("Clubs", "ClubMembers.club_id", "Clubs.club_id")
      .select("Clubs.club_id", "Clubs.club_name", "Clubs.description", "Clubs.logo")
      .where({
        "ClubMembers.user_id": user.user_id,
        "ClubMembers.role_in_club": "leader",
        "ClubMembers.status": "active",
      });

    return res.status(200).json({ success: true, data: leaderClubs });
  } catch (err) {
    console.error("Error fetching leader's clubs:", err);
    res.status(500).json({ success: false, message: "Error fetching clubs" });
  }
});

module.exports = {
  path: "/club-leader/clubs",
  router,
};
