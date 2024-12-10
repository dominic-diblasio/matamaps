const express = require('express');
const axios = require('axios');
const router = express.Router();
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

// Fetch all active clubs
router.get('/',  async (req, res) => {
  const db = router.locals.db;

  try {
    // Fetch active clubs
    const activeClubs = await db('Clubs')
      .select('club_id', 'club_name', 'description', 'logo', 'image')
      .where('status', 'active');

    if (!activeClubs.length) {
      return res.status(404).json({
        success: false,
        message: 'No active clubs found',
      });
    }

    console.log('Fetched active clubs:', activeClubs);

    res.status(200).json({
      success: true,
      data: activeClubs,
    });
  } catch (err) {
    console.error('Error fetching active clubs:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching active clubs',
    });
  }
});

// Export updated router
module.exports = {
  path: '/clubs/active',
  router,
};
