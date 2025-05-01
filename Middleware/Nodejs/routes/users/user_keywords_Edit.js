// routes/users/interests.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.session_id = decoded.session_id;
    next();
  } catch (err) {
    console.error("Authentication error:", err);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

// GET all available keywords grouped by category
router.get("/all", async (req, res) => {
  const db = router.locals.db;
  try {
    const keywords = await db("Keywords").select("keyword_id", "keyword", "category");
    const categorized = {};
    keywords.forEach(k => {
      if (!categorized[k.category]) categorized[k.category] = [];
      categorized[k.category].push({ keyword_id: k.keyword_id, keyword: k.keyword });
    });
    res.json({ success: true, data: categorized });
  } catch (err) {
    console.error("Error fetching keywords:", err);
    res.status(500).json({ success: false, message: "Error fetching keywords" });
  }
});

// GET user's current keyword interests
router.get("/user", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;
  try {
    const user = await db("Users").select("user_id").where({ session_id }).first();
    const interests = await db("UserKeywordMapping as uk")
      .join("Keywords as k", "uk.keyword_id", "k.keyword_id")
      .select("k.keyword_id", "k.keyword", "k.category")
      .where("uk.user_id", user.user_id);
    res.json({ success: true, data: interests });
  } catch (err) {
    console.error("Error fetching user interests:", err);
    res.status(500).json({ success: false, message: "Error fetching interests" });
  }
});

// POST add interest
router.post("/add", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;
  const { keyword_id } = req.body;
  try {
    const user = await db("Users").select("user_id").where({ session_id }).first();
    await db("UserKeywordMapping").insert({ user_id: user.user_id, keyword_id });
    res.json({ success: true, message: "Interest added" });
  } catch (err) {
    console.error("Error adding interest:", err);
    res.status(500).json({ success: false, message: "Could not add interest" });
  }
});

// DELETE remove interest
router.delete("/remove", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;
  const { keyword_id } = req.body;
  try {
    const user = await db("Users").select("user_id").where({ session_id }).first();
    await db("UserKeywordMapping")
      .where({ user_id: user.user_id, keyword_id })
      .del();
    res.json({ success: true, message: "Interest removed" });
  } catch (err) {
    console.error("Error removing interest:", err);
    res.status(500).json({ success: false, message: "Could not remove interest" });
  }
});

module.exports = {
  path: "/users/interests",
  router,
};
