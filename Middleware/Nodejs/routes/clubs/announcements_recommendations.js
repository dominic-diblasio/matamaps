const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;
    if (!session_id) return res.status(401).json({ success: false, message: "Invalid token payload" });

    req.session_id = session_id;
    next();
  } catch (err) {
    console.error("Authentication error:", err);
    return res.status(500).json({ success: false, message: "Error during authentication" });
  }
};

const computeSimilarity = (studentInterests, clubInterests, studentMajor, clubMajor) => {
  const normalizedStudentInterests = studentInterests.map(i => i.toLowerCase());
  const normalizedClubInterests = clubInterests.map(i => i.toLowerCase());
  let score = normalizedStudentInterests.filter(interest => normalizedClubInterests.includes(interest)).length;
  if (clubMajor && studentMajor && clubMajor.toLowerCase() === studentMajor.toLowerCase()) {
    score += 1;
  }
  return score;
};

router.get("/", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;

  try {
    const user = await db("Users")
      .select("user_id", "major")
      .where({ session_id })
      .first();

    if (!user) return res.status(401).json({ success: false, message: "User not found" });

    const keywordRows = await db("UserKeywordMapping as uk")
      .join("Keywords as k", "uk.keyword_id", "k.keyword_id")
      .select("k.keyword")
      .where("uk.user_id", user.user_id);

    const studentInterests = keywordRows.map(row => row.keyword);

    const clubs = await db("Clubs as c")
      .leftJoin("ClubKeywordMapping as ckm", "c.club_id", "ckm.club_id")
      .leftJoin("Keywords as k", "ckm.keyword_id", "k.keyword_id")
      .select("c.*", db.raw("GROUP_CONCAT(k.keyword SEPARATOR ',') as club_keywords"))
      .groupBy("c.club_id");

    const matchedClubs = clubs.map(club => {
      const clubInterests = club.club_keywords ? club.club_keywords.split(",").map(kw => kw.trim()) : [];
      const score = computeSimilarity(studentInterests, clubInterests, user.major, club.club_major || null);
      return { ...club, score };
    }).filter(club => club.score > 0);

    const matchedClubIds = matchedClubs.map(c => c.club_id);

    const announcements = await db("Announcements as a")
      .leftJoin("Clubs as c", "a.club_id", "c.club_id")
      .whereIn("a.club_id", matchedClubIds)
      .select("a.*", "c.club_name", "c.logo")
      .orderBy("a.created_at", "desc");

    res.status(200).json({ success: true, announcements });
  } catch (error) {
    console.error("Error generating announcement recommendations:", error);
    res.status(500).json({ success: false, message: "Error fetching announcements" });
  }
});

module.exports = {
  path: "/recommendations/announcements",
  router,
};