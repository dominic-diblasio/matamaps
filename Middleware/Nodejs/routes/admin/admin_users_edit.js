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
router.put("/:user_id/role", authenticateToken, async (req, res) => {
    console.log("Request body received:", req.body);
  
    const { user_id } = req.params;
    const { roles } = req.body;
    const allowedRoles = ["user", "club_leader", "admin"];
    const db = router.locals.db;
  
    try {
      const user = await db("Users").where({ user_id }).first();
      if (!user) {
        console.error("User not found:", user_id);
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Validate roles
      if (!roles || typeof roles !== "object") {
        console.error("Invalid roles format:", roles);
        return res.status(400).json({
          success: false,
          message: "Invalid roles format. Expected an object with role arrays.",
        });
      }
  
      // Begin transaction
      await db.transaction(async (trx) => {
        // Remove existing roles for the user in the specified clubs
        const allClubIds = [
          ...(roles.user || []),
          ...(roles.club_leader || []),
        ];
  
        if (allClubIds.length > 0) {
          // Delete user's existing roles in these clubs
          await trx("ClubMembers")
            .where({ user_id })
            .whereIn("club_id", allClubIds)
            .del();
  
          await trx("ClubRegistrations")
            .where({ user_id })
            .whereIn("club_id", allClubIds)
            .del();
        }
  
        // Variables to track the highest role
        let hasClubLeaderRole = false;
        let hasAdminRole = false;
  
        // Process roles
        for (const role of allowedRoles) {
          const clubIds = roles[role];
          if (!Array.isArray(clubIds)) continue;
  
          if (role === "admin") {
            if (roles.admin && roles.admin.length > 0) {
              hasAdminRole = true; // User is an admin
            }
            continue;
          }
  
          for (const clubId of clubIds) {
            if (!clubId) continue;
  
            if (role === "user") {
              // Insert into ClubRegistrations
              await trx("ClubRegistrations").insert({
                club_id: clubId,
                user_id,
                club_name: await getClubNameById(clubId, trx),
                username: user.username,
                student_number: await getNextStudentNumber(clubId, trx),
                status: "active",
                created_at: new Date(),
                updated_at: new Date(),
              });
            }
  
            if (role === "club_leader") {
              // Insert into ClubMembers
              await trx("ClubMembers").insert({
                club_id: clubId,
                user_id,
                role_in_club: "leader",
                status: "active",
                joined_at: new Date(),
              });
              hasClubLeaderRole = true; // User is a club leader
            }
          }
        }
  
        // Update the user's role in the Users table according to the hierarchy
        if (hasAdminRole) {
          await trx("Users").where({ user_id }).update({ role: "admin" });
        } else if (hasClubLeaderRole) {
          await trx("Users").where({ user_id }).update({ role: "club_leader" });
        } else {
          await trx("Users").where({ user_id }).update({ role: "user" });
        }
      });
  
      res.status(200).json({ success: true, message: "User roles updated successfully" });
    } catch (err) {
      console.error("Error updating user roles:", err);
      res.status(500).json({ success: false, message: "Error updating user roles" });
    }
  });
  
  // Utility function to get club name by ID (remains unchanged)
  async function getClubNameById(clubId, dbOrTrx) {
    const club = await dbOrTrx("Clubs").where({ club_id: clubId }).first();
    return club ? club.club_name : "Unknown Club";
  }
  
  // Utility function to get the next student number (remains unchanged)
  async function getNextStudentNumber(clubId, dbOrTrx) {
    const maxStudentNumber = await dbOrTrx("ClubRegistrations")
      .where({ club_id: clubId })
      .max("student_number as max")
      .first();
    return maxStudentNumber.max ? maxStudentNumber.max + 1 : 1;
  }
// router.put("/:user_id/role", authenticateToken, async (req, res) => {
//     console.log("Request body received:", req.body);
  
//     const { user_id } = req.params;
//     const { roles } = req.body;
//     const allowedRoles = ["user", "club_leader", "admin"];
//     const db = router.locals.db;
  
//     try {
//       const user = await db("Users").where({ user_id }).first();
//       if (!user) {
//         console.error("User not found:", user_id);
//         return res.status(404).json({ success: false, message: "User not found" });
//       }
  
//       // Validate roles
//       if (!roles || typeof roles !== "object") {
//         console.error("Invalid roles format:", roles);
//         return res.status(400).json({
//           success: false,
//           message: "Invalid roles format. Expected an object with role arrays.",
//         });
//       }
  
//       // Begin transaction
//       await db.transaction(async (trx) => {
//         // Remove existing roles for the user in the specified clubs
//         const allClubIds = [
//           ...(roles.user || []),
//           ...(roles.club_leader || []),
//         ];
  
//         if (allClubIds.length > 0) {
//           // Delete user's existing roles in these clubs
//           await trx("ClubMembers")
//             .where({ user_id })
//             .whereIn("club_id", allClubIds)
//             .del();
  
//           await trx("ClubRegistrations")
//             .where({ user_id })
//             .whereIn("club_id", allClubIds)
//             .del();
//         }
  
//         // Process roles
//         for (const role of allowedRoles) {
//           if (role === "admin") {
//             if (roles.admin && roles.admin.length > 0) {
//               await trx("Users").where({ user_id }).update({ role: "admin" });
//             } else {
//               await trx("Users").where({ user_id }).update({ role: "user" });
//             }
//             continue;
//           }
  
//           const clubIds = roles[role];
//           if (!Array.isArray(clubIds)) continue;
  
//           for (const clubId of clubIds) {
//             if (!clubId) continue;
  
//             if (role === "user") {
//               await trx("ClubRegistrations").insert({
//                 club_id: clubId,
//                 user_id,
//                 club_name: await getClubNameById(clubId, trx),
//                 username: user.username,
//                 student_number: await getNextStudentNumber(clubId, trx),
//                 status: "active",
//                 created_at: new Date(),
//                 updated_at: new Date(),
//               });
//             }
  
//             if (role === "club_leader") {
//               await trx("ClubMembers").insert({
//                 club_id: clubId,
//                 user_id,
//                 role_in_club: "leader",
//                 status: "active",
//                 joined_at: new Date(),
//               });
//             }
//           }
//         }
//       });
  
//       res.status(200).json({ success: true, message: "User roles updated successfully" });
//     } catch (err) {
//       console.error("Error updating user roles:", err);
//       res.status(500).json({ success: false, message: "Error updating user roles" });
//     }
//   });
  
//   // Utility function to get club name by ID
//   async function getClubNameById(clubId, dbOrTrx) {
//     const club = await dbOrTrx("Clubs").where({ club_id: clubId }).first();
//     return club ? club.club_name : "Unknown Club";
//   }
  
//   // Utility function to get the next student number
//   async function getNextStudentNumber(clubId, dbOrTrx) {
//     const maxStudentNumber = await dbOrTrx("ClubRegistrations")
//       .where({ club_id: clubId })
//       .max("student_number as max")
//       .first();
//     return maxStudentNumber.max ? maxStudentNumber.max + 1 : 1;
//   }
  


// DELETE /admin/users/:user_id - Delete user
router.delete("/:user_id", authenticateToken, async (req, res) => {
  const { user_id } = req.params;
  const db = router.locals.db;

  try {
    const user = await db("Users").where({ user_id }).first();
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Remove user from `ClubMembers`
    await db("ClubMembers").where({ user_id }).del();

    // Remove user from `ClubRegistrations`
    await db("ClubRegistrations").where({ user_id }).del();

    // Remove user from `Users`
    await db("Users").where({ user_id }).del();

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
});

module.exports = {
  path: "/admin/users",
  router,
};


// router.put("/:user_id/role", authenticateToken, async (req, res) => {
//     console.log("Request body received:", req.body);

//     const { user_id } = req.params;
//     const { roles } = req.body; // roles object
//     const allowedRoles = ["user", "club_leader", "admin"];
//     const db = router.locals.db;

//     try {
//         const user = await db("Users").where({ user_id }).first();
//         if (!user) {
//             console.error("User not found:", user_id);
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         // Validate roles
//         if (!roles || typeof roles !== "object") {
//             console.error("Invalid roles format:", roles);
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid roles format. Expected an object with role arrays.",
//             });
//         }

//         // Process user role assignments
//         for (const [role, clubIds] of Object.entries(roles)) {
//             if (!allowedRoles.includes(role)) {
//                 console.warn("Ignoring unrecognized role:", role);
//                 continue; // Skip unrecognized roles
//             }

//             // Handle 'admin' role separately since it doesn't require clubIds
//             if (role === "admin") {
//                 await db("Users").where({ user_id }).update({ role: "admin" });
//                 continue;
//             }

//             if (!Array.isArray(clubIds)) {
//                 console.error("clubIds must be an array for role:", role);
//                 return res.status(400).json({
//                     success: false,
//                     message: `clubIds must be an array for role: ${role}`,
//                 });
//             }

//             for (const clubId of clubIds) {
//                 if (!clubId) continue;

//                 // Find the next available student_number for the specific club
//                 const maxStudentNumber = await db("ClubRegistrations")
//                     .where({ club_id: clubId })
//                     .max("student_number as max")
//                     .first();

//                 const studentNumber = maxStudentNumber.max ? maxStudentNumber.max + 1 : 1;

//                 if (role === "user") {
//                     const club = await db("ClubRegistrations")
//                         .where({ club_id: clubId, user_id })
//                         .first();
//                     if (!club) {
//                         await db("ClubRegistrations").insert({
//                             club_id: clubId,
//                             user_id,
//                             club_name: await getClubNameById(clubId, db),
//                             username: user.username,
//                             student_number: studentNumber,
//                             status: "active",
//                             created_at: new Date(),
//                             updated_at: new Date(),
//                         });
//                     } else {
//                         await db("ClubRegistrations")
//                             .where({ club_id: clubId, user_id })
//                             .update({ status: "active", updated_at: new Date() });
//                     }
//                 }

//                 if (role === "club_leader") {
//                     const membership = await db("ClubMembers")
//                         .where({ club_id: clubId, user_id })
//                         .first();
//                     if (!membership) {
//                         await db("ClubMembers").insert({
//                             club_id: clubId,
//                             user_id,
//                             role_in_club: "leader",
//                             status: "active",
//                             joined_at: new Date(),
//                         });
//                     } else {
//                         await db("ClubMembers")
//                             .where({ club_id: clubId, user_id })
//                             .update({
//                                 role_in_club: "leader",
//                                 status: "active",
//                                 updated_at: new Date(),
//                             });
//                     }
//                 }
//             }
//         }

//         res.status(200).json({ success: true, message: "User roles updated successfully" });
//     } catch (err) {
//         console.error("Error updating user roles:", err);
//         res.status(500).json({ success: false, message: "Error updating user roles" });
//     }
// });

// // Utility function to get club name by ID
// async function getClubNameById(clubId, db) {
//     const club = await db("Clubs").where({ club_id: clubId }).first();
//     return club ? club.club_name : "Unknown Club";
// }