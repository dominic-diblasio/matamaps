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
      return res.status(401).json({
        success: false,
        message: "Session expired, please login again",
      });
    }
    return res.status(500).json({ success: false, message: "Error during authentication" });
  }
};
router.get("/:event_id", authenticateToken, async (req, res) => {
    const { event_id } = req.params;
    const db = router.locals.db;
  
    try {
      const rsvps = await db("EventRSVP")
        .join("Users", "EventRSVP.user_id", "Users.user_id")
        .leftJoin("ClubRegistrations", function () {
          this.on("EventRSVP.user_id", "=", "ClubRegistrations.user_id").andOn(
            "ClubRegistrations.club_id",
            "=",
            db.raw("(SELECT club_id FROM Events WHERE event_id = ?)", [event_id])
          );
        })
        .select(
          "EventRSVP.rsvp_id",
          "EventRSVP.status",
          "EventRSVP.updated_at",
          "Users.username",
          "Users.first_name",
          "Users.last_name",
          db.raw("CASE WHEN ClubRegistrations.status IN ('active', 'pending') THEN 'Yes' ELSE 'No' END as is_member")
        )
        .where("EventRSVP.event_id", event_id);
  
      res.status(200).json({ success: true, data: rsvps });
    } catch (err) {
      console.error("Error fetching RSVPs:", err);
      res.status(500).json({ success: false, message: "Error fetching RSVPs." });
    }
  });
  
  module.exports = {
    path: "/events/rsvps",
    router,
  };
  
  // router.get("/:event_id", authenticateToken, async (req, res) => {
//     const { event_id } = req.params;
//     const db = router.locals.db;
  
//     try {
//       const rsvps = await db("EventRSVP")
//         .join("Users", "EventRSVP.user_id", "Users.user_id")
//         .leftJoin("ClubRegistrations", function () {
//           this.on("EventRSVP.user_id", "=", "ClubRegistrations.user_id").andOn(
//             "ClubRegistrations.club_id",
//             "=",
//             db.raw("(SELECT club_id FROM Events WHERE event_id = ?)", [event_id])
//           );
//         })
//         .select(
//           "EventRSVP.rsvp_id",
//           "EventRSVP.status",
//           "EventRSVP.updated_at",
//           "Users.username",
//           "ClubRegistrations.status as is_member"
//         )
//         .where("EventRSVP.event_id", event_id);
  
//       res.status(200).json({ success: true, data: rsvps });
//     } catch (err) {
//       console.error("Error fetching RSVPs:", err);
//       res.status(500).json({ success: false, message: "Error fetching RSVPs." });
//     }
//   });