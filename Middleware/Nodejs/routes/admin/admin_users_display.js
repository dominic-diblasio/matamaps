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

// GET /admin/users - Fetch all users and their club memberships
router.get("/display", authenticateToken, async (req, res) => {
  const db = router.locals.db;

  try {
    // Fetch all users
    const users = await db("Users").select(
      "user_id",
      "username",
      "first_name",
      "last_name",
      "email",
      "role",
      "created_at",
      "updated_at"
    );

    if (!users.length) {
      return res.status(404).json({ success: false, message: "No users found." });
    }

    // Fetch club membership data
    const clubMembers = await db("ClubMembers")
      .join("Clubs", "ClubMembers.club_id", "Clubs.club_id")
      .select("ClubMembers.user_id", "Clubs.club_name", "ClubMembers.role_in_club", "ClubMembers.status");

    // Fetch club registrations data
    const clubRegistrations = await db("ClubRegistrations")
      .select("user_id", "club_name", "status");

    // Attach club data to users
    const usersWithClubs = users.map((user) => {
      const memberships = clubMembers.filter((member) => member.user_id === user.user_id);
      const registrations = clubRegistrations.filter((registration) => registration.user_id === user.user_id);

      return {
        ...user,
        clubs_as_leader: memberships.filter((m) => m.role_in_club === "leader" && m.status === "active").map((m) => m.club_name),
        clubs_as_member: registrations.filter((r) => r.status === "active").map((r) => r.club_name),
      };
    });

    res.status(200).json({ success: true, data: usersWithClubs });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ success: false, message: "Error fetching users." });
  }
});

router.get("/:user_id/clubs", authenticateToken, async (req, res) => {
    const { user_id } = req.params;
    const db = router.locals.db;
  
    try {
      // Fetch clubs where the user is a leader or member
      const clubMemberships = await db("ClubMembers")
        .join("Clubs", "ClubMembers.club_id", "Clubs.club_id")
        .select("Clubs.club_name", "ClubMembers.role_in_club", "ClubMembers.status")
        .where("ClubMembers.user_id", user_id)
        .andWhere("ClubMembers.status", "active");
  
      // Fetch registrations for clubs where the user is not a leader
      const clubRegistrations = await db("ClubRegistrations")
        .select("club_name", "status")
        .where("user_id", user_id)
        .andWhere("status", "active");
  
      // Combine data
      const clubs = [
        ...clubMemberships.map((membership) => ({
          club_name: membership.club_name,
          role_in_club: membership.role_in_club,
        })),
        ...clubRegistrations.map((registration) => ({
          club_name: registration.club_name,
          role_in_club: "member",
        })),
      ];
  
      res.status(200).json({ success: true, data: clubs });
    } catch (err) {
      console.error("Error fetching user's clubs:", err);
      res.status(500).json({ success: false, message: "Error fetching user's clubs." });
    }
  });
  
module.exports = {
  path: "/admin/users",
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

// // GET /admin/users - Fetch all users
// router.get("/", authenticateToken, async (req, res) => {
//   const db = router.locals.db;

//   try {
//     const users = await db("Users").select(
//       "user_id",
//       "username",
//       "first_name",
//       "last_name",
//       "email",
//       "role",
//       "created_at",
//       "updated_at"
//     );

//     if (!users.length) {
//       return res.status(404).json({ success: false, message: "No users found." });
//     }

//     res.status(200).json({ success: true, data: users });
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).json({ success: false, message: "Error fetching users." });
//   }
// });

// module.exports = {
//   path: "/admin/users/display",
//   router,
// };