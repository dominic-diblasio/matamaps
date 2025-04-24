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
    res.status(500).json({ success: false, message: "Authentication failed" });
  }
};

// POST /admin/clubs/add - Add a new club
router.post("/", authenticateToken, async (req, res) => {
  const { club_name, description, club_rules, logo, image } = req.body;
  const db = router.locals.db;

  if (!club_name || !description) {
    return res.status(400).json({
      success: false,
      message: "Club name and description are required.",
    });
  }

  try {
    // Get the admin user from the session
    const adminUser = await db("Users")
      .select("user_id", "role")
      .where({ session_id: req.session_id })
      .first();

    if (!adminUser || adminUser.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Only admins can add clubs.",
      });
    }

    // Insert the new club into the database
    const [newClubId] = await db("Clubs").insert({
      club_name,
      description,
      club_rules: club_rules || null,
      logo: logo || null,
      image: image || null,
      created_by: adminUser.user_id,
      created_at: new Date(),
      updated_at: new Date(),
      status: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Club added successfully.",
      data: { club_id: newClubId },
    });
  } catch (err) {
    console.error("Error adding club:", err);
    res.status(500).json({ success: false, message: "Error adding club." });
  }
});

module.exports = {
  path: "/admin/clubs/add",
  router,
};