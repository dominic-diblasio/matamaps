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
    return res.status(500).json({ success: false, message: "Error during authentication" });
  }
};

// GET /announcements - Fetch all announcements with additional details
router.get("/", authenticateToken, async (req, res) => {
  const db = router.locals.db;

  try {
    const announcements = await db("Announcements")
      .join("Clubs", "Announcements.club_id", "Clubs.club_id")
      .join("Users", "Announcements.created_by", "Users.user_id")
      .select(
        "Announcements.announcement_id",
        "Announcements.club_id",
        "Clubs.club_name",
        "Announcements.announcement_name",
        "Announcements.event_id",
        "Announcements.message",
        "Announcements.created_by",
        "Users.first_name as creator_first_name",
        "Users.email as creator_email",
        "Announcements.created_at",
        "Announcements.updated_at"
      );

    if (!announcements.length) {
      return res.status(404).json({ success: false, message: "No announcements found" });
    }

    res.status(200).json({ success: true, data: announcements });
  } catch (err) {
    console.error("Error fetching announcements:", err);
    res.status(500).json({ success: false, message: "Error fetching announcements" });
  }
});

module.exports = {
  path: "/announcements",
  router,
};

// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");

// // Authentication middleware
// const authenticateToken = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({ success: false, message: "No token provided" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const { session_id } = decoded;

//     if (!session_id) {
//       return res.status(401).json({ success: false, message: "Invalid token payload" });
//     }

//     req.session_id = session_id;
//     next();
//   } catch (err) {
//     console.error("Authentication error:", err);
//     return res.status(500).json({ success: false, message: "Error during authentication" });
//   }
// };



// // GET /announcements - Fetch all announcements
// router.get("/", authenticateToken, async (req, res) => {
//     const { session_id } = req;
//     const db = router.locals.db;

//   try {
//     const announcements = await db("Announcements")
//       .select(
//         "announcement_id",
//         "club_id",
//         "announcement_name",
//         "event_id",
//         "message",
//         "created_by",
//         "created_at",
//         "updated_at"
//       );

//     if (!announcements.length) {
//       return res.status(404).json({ success: false, message: "No announcements found" });
//     }

//     res.status(200).json({ success: true, data: announcements });
//   } catch (err) {
//     console.error("Error fetching announcements:", err);
//     res.status(500).json({ success: false, message: "Error fetching announcements" });
//   }
// });


// module.exports = {
//   path: "/announcements",
//   router,
// };