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
router.get("/:club_id", authenticateToken, async (req, res) => {
    const { session_id } = req;
    const { club_id } = req.params;
    const db = router.locals.db;
  
    try {
      // Get the user ID and role
      const user = await db("Users")
        .select("user_id", "role")
        .where({ session_id })
        .first();
  
      console.log("Authenticated user:", user);
  
      if (!user || user.role !== "club_leader") {
        console.error("Unauthorized access attempt by user:", user);
        return res.status(403).json({ success: false, message: "Access denied" });
      }
  
      // Validate that the user is the leader of the given club
      const leaderClub = await db("ClubMembers")
        .select("club_id")
        .where({
          user_id: user.user_id,
          role_in_club: "leader",
          club_id,
          status: "active",
        })
        .first();
  
      console.log("Leader validation for club_id:", club_id, "Result:", leaderClub);
  
      if (!leaderClub) {
        console.error("Club validation failed for club_id:", club_id);
        return res.status(403).json({
          success: false,
          message: "You are not authorized to manage events of this club.",
        });
      }
  
      // Fetch events for the club
      const events = await db("Events").where({ club_id }).orderBy("event_date", "desc");
  
      console.log("Fetched events for club_id:", club_id, events);
  
      return res.status(200).json({
        success: true,
        data: events,
      });
    } catch (err) {
      console.error("Error fetching club events:", err);
      res.status(500).json({ success: false, message: "Error fetching events" });
    }
  });
 
  
  module.exports = {
    path: "/club/leader/events",
    router,
  };
   
  
// router.get("/:club_id", authenticateToken, async (req, res) => {
//     const { session_id } = req;
//     const { club_id } = req.params;
//     const db = router.locals.db;
  
//     try {
//       // Get the user ID and role
//       const user = await db("Users")
//         .select("user_id", "role")
//         .where({ session_id })
//         .first();
  
//       if (!user || user.role !== "club_leader") {
//         return res.status(403).json({ success: false, message: "Access denied" });
//       }
  
//       // Validate that the user is the leader of the given club
//       const leaderClub = await db("ClubMembers")
//         .select("club_id")
//         .where({
//           user_id: user.user_id,
//           role_in_club: "leader",
//           club_id,
//           status: "active",
//         })
//         .first();
  
//       if (!leaderClub) {
//         return res.status(403).json({
//           success: false,
//           message: "You are not authorized to manage events of this club.",
//         });
//       }
  
//       // Fetch events for the club
//       const events = await db("Events").where({ club_id }).orderBy("event_date", "desc");
  
//       return res.status(200).json({
//         success: true,
//         data: events,
//       });
//     } catch (err) {
//       console.error("Error fetching club events:", err);
//       res.status(500).json({ success: false, message: "Error fetching events" });
//     }
//   });