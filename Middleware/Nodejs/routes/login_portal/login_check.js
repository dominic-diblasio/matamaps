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
    // Fetch user data from the Users table
    const user = await db("Users")
      .select("user_id", "password", "role", "session_id", "role") // Include role
      .where({ email })
      .first();

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Compare plain text password (use bcrypt in production for security)
    if (password === user.password) {
      const session_id = uuidv4();
      const token = jwt.sign({ session_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

      // Update session_id in the database
      await db("Users").where("user_id", user.user_id).update({ session_id });

      // Construct the response
      const responseData = {
        jwt_token: token,
        role: user.role || null // Default to null if role is not defined
      };

      // Send the JWT and role in HttpOnly cookies
      res.cookie("jwt_token", token, {
        httpOnly: process.env.NODE_ENV === "production" ? true : false, // disable httpOnly in development
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 60 * 60 * 1000, // 1 hour
      });

      res.cookie("role", user.role || "", {
        httpOnly: process.env.NODE_ENV === "production" ? true : false, // disable httpOnly in development
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