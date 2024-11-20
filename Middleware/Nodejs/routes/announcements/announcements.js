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



// GET /announcements - Fetch all announcements
router.get("/", authenticateToken, async (req, res) => {
    const { session_id } = req;
    const db = router.locals.db;

  try {
    const announcements = await db("Announcements")
      .select(
        "announcement_id",
        "club_id",
        "event_id",
        "message",
        "created_by",
        "created_at",
        "updated_at"
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



// // POST /announcements - Add a new announcement
// router.post("/", authenticateToken, async (req, res) => {
//   const { club_id, event_id, message } = req.body;
//   const { session_id } = req;

//   try {
//     // Get the user ID from the session
//     const user = await db("Users").select("user_id").where({ session_id }).first();
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     // Insert new announcement
//     const [announcement] = await db("Announcements")
//       .insert({
//         club_id,
//         event_id,
//         message,
//         created_by: user.user_id,
//         created_at: new Date(),
//         updated_at: new Date(),
//       })
//       .returning([
//         "announcement_id",
//         "club_id",
//         "event_id",
//         "message",
//         "created_by",
//         "created_at",
//         "updated_at",
//       ]);

//     res.status(201).json({ success: true, data: announcement });
//   } catch (err) {
//     console.error("Error adding announcement:", err);
//     res.status(500).json({ success: false, message: "Error adding announcement" });
//   }
// });

// // PATCH /announcements/:announcement_id/read - Mark announcement as read/unread
// router.patch("/:announcement_id/read", authenticateToken, async (req, res) => {
//   const { announcement_id } = req.params;
//   const { read_status } = req.body; // true or false

//   try {
//     const updated = await db("Announcements")
//       .where({ announcement_id })
//       .update({ updated_at: new Date(), read_status });

//     if (!updated) {
//       return res.status(404).json({ success: false, message: "Announcement not found" });
//     }

//     res.status(200).json({ success: true, message: "Announcement updated successfully" });
//   } catch (err) {
//     console.error("Error updating announcement:", err);
//     res.status(500).json({ success: false, message: "Error updating announcement" });
//   }
// });

// // DELETE /announcements/:announcement_id - Delete an announcement
// router.delete("/:announcement_id", authenticateToken, async (req, res) => {
//   const { announcement_id } = req.params;

//   try {
//     const deleted = await db("Announcements").where({ announcement_id }).del();

//     if (!deleted) {
//       return res.status(404).json({ success: false, message: "Announcement not found" });
//     }

//     res.status(200).json({ success: true, message: "Announcement deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting announcement:", err);
//     res.status(500).json({ success: false, message: "Error deleting announcement" });
//   }
// });