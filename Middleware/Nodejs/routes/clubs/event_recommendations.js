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
    return res.status(500).json({ success: false, message: "Authentication failed" });
  }
};

// Similarity function based on overlapping interests
const computeSimilarity = (studentInterests, clubInterests, studentMajor, clubMajor) => {
  const normalizedStudent = studentInterests.map(i => i.toLowerCase());
  const normalizedClub = clubInterests.map(i => i.toLowerCase());

  let score = normalizedStudent.filter(i => normalizedClub.includes(i)).length;
  if (clubMajor && studentMajor && clubMajor.toLowerCase() === studentMajor.toLowerCase()) {
    score += 1;
  }
  return score;
};

// Endpoint for recommended events
router.get("/", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;

  try {
    const user = await db("Users")
      .select("user_id", "major")
      .where({ session_id })
      .first();

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const userKeywords = await db("UserKeywordMapping as uk")
      .join("Keywords as k", "uk.keyword_id", "k.keyword_id")
      .select("k.keyword")
      .where({ "uk.user_id": user.user_id });
    const studentInterests = userKeywords.map(row => row.keyword);

    const events = await db("Events as e")
      .leftJoin("Clubs as c", "e.club_id", "c.club_id")
      .leftJoin("ClubKeywordMapping as ckm", "c.club_id", "ckm.club_id")
      .leftJoin("Keywords as k", "ckm.keyword_id", "k.keyword_id")
      .select(
        "e.*",
        "c.club_name",
        db.raw("GROUP_CONCAT(k.keyword SEPARATOR ',') as club_keywords")
      )
      .groupBy("e.event_id");

    const eventsWithScore = events.map(event => {
      const clubInterests = event.club_keywords ? event.club_keywords.split(",").map(i => i.trim()) : [];
      const clubMajor = event.club_major || null;
      const score = computeSimilarity(studentInterests, clubInterests, user.major, clubMajor);
      return { ...event, score, clubInterests };
    });

    const recommendedEvents = eventsWithScore
      .filter(event => event.score > 0)
      .sort((a, b) => b.score - a.score);

    res.status(200).json({ success: true, events: recommendedEvents });
  } catch (err) {
    console.error("Error recommending events:", err);
    res.status(500).json({ success: false, message: "Failed to generate event recommendations" });
  }
});

module.exports = {
  path: "/recommendations/events",
  router,
  
};
//change2