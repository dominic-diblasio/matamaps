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
    req.session_id = decoded.session_id;
    next();
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(500).json({ success: false, message: "Authentication error" });
  }
};

// POST endpoint to add a user to ClubRegistrations or ClubMembers
router.post("/", authenticateToken, async (req, res) => {
  const { club_id, club_name, user_id, username, student_number, role } = req.body;
  const db = router.locals.db;

  if (!club_id || !user_id || !username || !role) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    // Check if the club exists
    const club = await db("Clubs").where({ club_id }).first();
    if (!club) {
      return res.status(404).json({ success: false, message: "Club not found." });
    }

    if (role === "user") {
      // Insert into ClubRegistrations
      await db("ClubRegistrations").insert({
        club_id,
        club_name,
        user_id,
        username,
        student_number,
        status: "pending", // Default status
        created_at: new Date(),
        updated_at: new Date(),
      });
      return res.status(201).json({ success: true, message: "User added to ClubRegistrations." });
    } else if (role === "leader") {
      // Insert into ClubMembers
      await db("ClubMembers").insert({
        club_id,
        user_id,
        role_in_club: "leader",
        status: "pending", // Default status
        joined_at: new Date(),
        updated_at: new Date(),
        profile_picture: "", // Optional profile picture URL can be added later
      });
      return res.status(201).json({ success: true, message: "Leader added to ClubMembers." });
    } else {
      return res.status(400).json({ success: false, message: "Invalid role." });
    }
  } catch (err) {
    console.error("Error adding member:", err);
    res.status(500).json({ success: false, message: "Error adding member." });
  }
});

module.exports = {
  path: "/admin/clubs/add-member",
  router,
};