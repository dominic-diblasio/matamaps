// routes/users/account/details.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token || req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.session_id) {
      return res.status(401).json({ success: false, message: 'Invalid token payload' });
    }
    req.session_id = decoded.session_id;
    next();
  } catch (err) {
    console.error('Auth error', err);
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Session expired, please login again' });
    }
    return res.status(500).json({ success: false, message: 'Error during authentication' });
  }
};

router.get("/", authenticateToken, async (req, res) => {
  const db = router.locals.db;
  try {
    // 1) get the user
    const user = await db("Users")
      .select("user_id", "username", "email", "first_name", "last_name", "role")
      .where({ session_id: req.session_id })
      .first();

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    // 2) get their Major keyword
    const majorRow = await db("UserKeywordMapping as uk")
      .join("Keywords as k", "uk.keyword_id", "k.keyword_id")
      .select("k.keyword")
      .where({
        "uk.user_id": user.user_id,
        "k.category": "Major",
      })
      .first();

    user.major = majorRow ? majorRow.keyword : null;

    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Error fetching user details" });
  }
});


module.exports = {
  path: '/users/account/details',
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

// // Endpoint to display user details
// router.get('/', authenticateToken, async (req, res) => {
//   const db = router.locals.db;
//   const { session_id } = req;

//   try {
//     // Retrieve user details using session ID
//     const user = await db('Users')
//       .select('user_id', 'username', 'email', 'first_name', 'last_name', 'role')
//       .where({ session_id })
//       .first();

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found for the session' });
//     }

//     res.status(200).json({
//       success: true,
//       data: user,
//     });
//   } catch (err) {
//     console.error('Error fetching user details:', err);
//     return res.status(500).json({
//       success: false,
//       message: 'Error fetching user details',
//     });
//   }
// });

// module.exports = {
//     path: '/users/account/details',
//     router,
//   };