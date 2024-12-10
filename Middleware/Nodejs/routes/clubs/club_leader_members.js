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
router.get("/:club_id", authenticateToken, async (req, res) => {
    const { session_id } = req;
    const { club_id } = req.params;
    const db = router.locals.db;
  
    try {
      // Get the user ID and role
      const user = await db("Users")
        .select("user_id", "role")
        .where({ session_id })
        .first();
  
      if (!user || user.role !== "club_leader") {
        return res.status(403).json({ success: false, message: "Access denied" });
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
  
      if (!leaderClub) {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to manage members of this club.",
        });
      }
  
      // Fetch club members
      const members = await db("ClubMembers")
        .join("Users", "ClubMembers.user_id", "Users.user_id")
        .select(
          "ClubMembers.membership_id",
          "ClubMembers.user_id",
          "Users.username",
          "ClubMembers.role_in_club",
          "ClubMembers.status",
          "ClubMembers.joined_at",
          "ClubMembers.profile_picture"
        )
        .where({ club_id });
  
      return res.status(200).json({
        success: true,
        data: members,
      });
    } catch (err) {
      console.error("Error fetching club members:", err);
      res.status(500).json({ success: false, message: "Error fetching members" });
    }
  });
  
  module.exports = {
    path: "/club-leader/members",
    router,
  };  
