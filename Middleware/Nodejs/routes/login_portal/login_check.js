const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
// const redisClient = require("../../redisClient"); // Import Redis client
const router = express.Router();
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const db = router.locals.db;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and Password are required" });
  }

  try {
    const user = await db("Users").select("*").where({ email }).first();

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Compare plain text password (for simplicity here, though bcrypt should be used)
    if (password === user.password) {
      const session_id = uuidv4();
      const token = jwt.sign({ session_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

      // Update session_id in the database
      await db("Users").where("user_id", user.user_id).update({ session_id });

      let responseData = { jwt_token: token };

      // If user is a club_leader, fetch associated club details
      if (user.role === "club_leader") {
        const clubDetails = await db("ClubMembers")
          .select("membership_id", "club_id")
          .where({ user_id: user.user_id, role_in_club: "leader", status: "active" })
          .first();

        if (clubDetails) {
          responseData = { ...responseData, club_id: clubDetails.club_id, membership_id: clubDetails.membership_id, username: user.username, role: user.role };
        }
      }

      // Send the JWT in an HttpOnly cookie
      res.cookie("jwt_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 60 * 60 * 1000, // 1 hour
      });

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: responseData,
      });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Error during login" });
  }
});

module.exports = {
  path: "/user/login/check",
  router,
};


// router.post("/", async (req, res) => {
//   const { email, password } = req.body;
//   const db = router.locals.db;

//   if (!email || !password) {
//     return res.status(400).json({ success: false, message: "Email and Password are required" });
//   }

//   try {
//     const result = await db("Users").select("*").where({ email }).first();

//     if (!result) {
//       return res.status(401).json({ success: false, message: "Invalid credentials" });
//     }

//     // const isPasswordValid = await bcrypt.compare(password, result.password);

//     if (password === result.password) {
//       const session_id = uuidv4();
//       const token = jwt.sign({ session_id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//       // // Save session_id to Redis with 1-hour expiration
//       // await redisClient.setEx(session_id, 60, "active");

//       // Update the database with the session_id
//       await db("Users").where("user_id", result.user_id).update({ session_id });
// console.log("session_id updated:",session_id);
//       // Send the JWT in an HttpOnly cookie
//       res.cookie("jwt_token", token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "Lax",
//         maxAge: 60 * 60 * 1000, // 1 hour
//       });

//       return res.status(200).json({
//         success: true,
//         message: "Login successful",
//         data: { jwt_token: token },
//       });
//     } else {
//       return res.status(401).json({ success: false, message: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ success: false, message: "Error during login" });
//   }
// });
