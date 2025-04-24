const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

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
//     if (err.name === "TokenExpiredError") {
//       return res.status(401).json({ success: false, message: "Session expired, please login again" });
//     }
//     return res.status(500).json({ success: false, message: "Error during authentication" });
//   }
// };

// GET /clubs/:club_id/status - Fetch the status of a club
router.get("/:club_id", async (req, res) => {
  const { club_id } = req.params;
  const db = router.locals.db;

  try {
    // Fetch the club details including its status
    const club = await db("Clubs")
      .select(
        "club_id",
        "club_name",
        "status",
        "created_at",
        "updated_at",
        "description",
        "created_by"
      )
      .where({ club_id })
      .first();

    if (!club) {
      return res.status(404).json({ success: false, message: "Club not found." });
    }

    // Fetch the creator's details (user information)
    const creator = await db("Users")
      .select("user_id", "first_name", "last_name", "email")
      .where({ user_id: club.created_by })
      .first();

    // Fetch associated events and their statuses
    const events = await db("Events")
      .select("event_id", "event_name", "status", "event_date")
      .where({ club_id });

    return res.status(200).json({
      success: true,
      data: {
        club: {
          ...club,
          creator: creator || null, // Include creator details or null if not found
        },
        events,
      },
    });
  } catch (err) {
    console.error("Error fetching club status:", err);
    res.status(500).json({ success: false, message: "Error fetching club status." });
  }
});

module.exports = {
  path: "/admin/clubs/status/display",
  router,
};