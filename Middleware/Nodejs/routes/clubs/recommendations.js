const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies.jwt_token || req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { session_id } = decoded;

    if (!session_id) {
      return res.status(401).json({ success: false, message: 'Invalid token payload' });
    }

    // Attach session ID to the request object
    req.session_id = session_id;

    next();
  } catch (err) {
    console.error('Authentication error:', err);

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Session expired, please login again',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Error during authentication',
    });
  }
};

// Matching function: computes a score based on overlapping keywords (case-insensitive)
// and optionally boosts score if the student's major matches the club's major.
const computeSimilarity = (studentInterests, clubInterests, studentMajor, clubMajor) => {
  // Normalize both arrays to lowercase
  const normalizedStudentInterests = studentInterests.map(interest => interest.toLowerCase());
  const normalizedClubInterests = clubInterests.map(interest => interest.toLowerCase());
  let score = normalizedStudentInterests.filter(interest => normalizedClubInterests.includes(interest)).length;
  if (clubMajor && studentMajor && clubMajor.toLowerCase() === studentMajor.toLowerCase()) {
    score += 1; // Adjust the boost value as needed
  }
  return score;
};

// GET /recommendations - Returns recommended clubs for the authenticated user
router.get("/", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { session_id } = req;
  try {
    // Get user details (including major) based on session_id
    const user = await db("Users")
      .select("user_id", "major")
      .where({ session_id })
      .first();
      console.log("User fetched from DB:", user);

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    // Fetch the user's selected keywords from UserKeywordMapping joined with Keywords
    const userKeywordRows = await db("UserKeywordMapping as uk")
      .join("Keywords as k", "uk.keyword_id", "k.keyword_id")
      .select("k.keyword")
      .where({ "uk.user_id": user.user_id });
    const studentInterests = userKeywordRows.map(row => row.keyword);

    // Debug: Log student's interests
    console.log("Student Interests:", studentInterests);

    // Query clubs and aggregate their keywords using GROUP_CONCAT
    const clubs = await db("Clubs as c")
      .leftJoin("ClubKeywordMapping as ckm", "c.club_id", "ckm.club_id")
      .leftJoin("Keywords as k", "ckm.keyword_id", "k.keyword_id")
      .select("c.*", db.raw("GROUP_CONCAT(k.keyword SEPARATOR ',') as club_keywords"))
      .groupBy("c.club_id");

    // Debug: Log each club's name and keywords
    clubs.forEach(club => {
      console.log(`Club: ${club.club_name} | Keywords: ${club.club_keywords}`);
    });

    // Compute similarity score for each club
    const clubsWithScore = clubs.map(club => {
      const clubInterests = club.club_keywords ? club.club_keywords.split(",").map(kw => kw.trim()) : [];
      // Optional: if your Clubs table has a field 'club_major', use it; otherwise null
      const clubMajor = club.club_major || null;
      const score = computeSimilarity(studentInterests, clubInterests, user.major, clubMajor);
      return { ...club, score, clubInterests };
    });

    // Filter out clubs with a score of zero and sort descending by score
    const recommendedClubs = clubsWithScore
      .filter(club => club.score > 0)
      .sort((a, b) => b.score - a.score);

    res.status(200).json({ success: true, clubs: recommendedClubs });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).json({ success: false, message: "Error generating recommendations" });
  }
});

module.exports = {
  path: "/recommendations", // Mounts this endpoint at /recommendations
  router,
  
};
//change1