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

router.post("/", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { club_id, club_name, username } = req.body;

  if (!club_id || !club_name || !username) {
    return res.status(400).json({
      success: false,
      message: "Club ID, Club Name, and Username are required.",
    });
  }

  try {
    const { session_id } = req; // session_id is now available
    
    // Retrieve user details using session ID
    const user = await db("Users")
      .select("user_id")
      .where({ session_id })
      .first();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found for the session.",
      });
    }

    const { user_id } = user; // Extract user_id from the query result

    // Check if the user is already registered for the club
    const existingRegistration = await db("ClubRegistrations")
      .select("status")
      .where({ club_id, user_id })
      .first();

    if (existingRegistration) {
      // Handle existing registration based on status
      switch (existingRegistration.status) {
        case "pending":
          return res.status(200).json({
            success: false,
            message: "Your request has been sent. Please wait until the club reviews your request.",
          });
        case "active":
          return res.status(200).json({
            success: false,
            message: "You are already part of this club.",
          });
        case "inactive":
          return res.status(200).json({
            success: false,
            message: "You cannot be a part of this club.",
          });
        default:
          return res.status(500).json({
            success: false,
            message: "Unexpected status in the club registration.",
          });
      }
    }

    // Find the next student number for the club
    const maxStudentNumber = await db("ClubRegistrations")
      .where({ club_id })
      .max("student_number as max")
      .first();

    const student_number = maxStudentNumber.max ? maxStudentNumber.max + 1 : 1;

    // Insert the new registration
    await db("ClubRegistrations").insert({
      club_id,
      user_id, // Use the extracted user_id here
      club_name,
      username,
      student_number,
      status: "pending", // Default status
    });

    res.status(200).json({
      success: true,
      message: "Your request to join the club has been submitted. Please wait for approval.",
    });
  } catch (err) {
    console.error("Error registering user to club:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while registering to the club.",
    });
  }
});

module.exports = {
  path: "/club/join",
  router,
};

// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');

// // Authentication middleware
// const authenticateToken = async (req, res, next) => {
//   try {
//     // Extract token from cookies or Authorization header
//     const token = req.cookies.jwt_token || req.headers['authorization']?.split(' ')[1];

//     if (!token) {
//       return res.status(401).json({ success: false, message: 'No token provided' });
//     }

//     // Verify the JWT token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const { session_id } = decoded;

//     if (!session_id) {
//       return res.status(401).json({ success: false, message: 'Invalid token payload' });
//     }

//     // Attach session ID to the request object
//     req.session_id = session_id;

//     next();
//   } catch (err) {
//     console.error('Authentication error:', err);

//     if (err.name === 'TokenExpiredError') {
//       return res.status(401).json({
//         success: false,
//         message: 'Session expired, please login again',
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: 'Error during authentication',
//     });
//   }
// };
// router.post("/", authenticateToken, async (req, res) => {
//     const db = router.locals.db;
//     const { club_id, club_name, username } = req.body;
  
//     if (!club_id || !club_name || !username) {
//         return res.status(400).json({
//             success: false,
//             message: "Club ID, Club Name, and Username are required.",
//         });
//     }
  
//     try {
//         const { session_id } = req; // session_id is now available
        
//         // Retrieve user details using session ID
//         const user = await db("Users")
//             .select("user_id")
//             .where({ session_id })
//             .first();
  
//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found for the session.",
//             });
//         }
  
//         const { user_id } = user; // Extract user_id from the query result
  
//         // Find the next student number for the club
//         const maxStudentNumber = await db("ClubRegistrations")
//             .where({ club_id })
//             .max("student_number as max")
//             .first();
  
//         const student_number = maxStudentNumber.max ? maxStudentNumber.max + 1 : 1;
  
//         // Insert the new registration
//         await db("ClubRegistrations").insert({
//             club_id,
//             user_id, // Use the extracted user_id here
//             club_name,
//             username,
//             student_number,
//             status: "pending", // Default status
//         });
  
//         res.status(200).json({
//             success: true,
//             message: "User successfully registered to the club.",
//         });
//     } catch (err) {
//         console.error("Error registering user to club:", err);
//         res.status(500).json({
//             success: false,
//             message: "An error occurred while registering to the club.",
//         });
//     }
// });

  

// module.exports ={
//     path: "/club/join",
//     router,
// };