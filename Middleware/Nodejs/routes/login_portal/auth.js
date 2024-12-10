const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
// const redisClient = require('../../redisClient'); // Import Redis client
// const { router } = require('./employee_welcome');
const router = express.Router();


const SESSION_TIMEOUT = 3600; // 1 hour in seconds

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Invalid token' });
      }

      const { session_id } = decoded;

      // // Check if session_id exists in Redis
      // const sessionStatus = await redisClient.get(session_id);

      // if (!sessionStatus) {
      //   return res.status(401).json({ success: false, message: 'Session expired due to inactivity' });
      // }

      // // Reset session timeout
      // await redisClient.expire(session_id, SESSION_TIMEOUT);

      // Attach session_id to request for further use
      req.session_id = session_id;

      next();
    });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ success: false, message: 'Error during authentication' });
  }
};

module.exports = {
  path: "/authenticateToken",
  router
};

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// router.get('/authenticateToken', (req, res) => {
//     const token = req.cookies.jwt_token;
//     console.log('Cookies:', req.cookies);
  
//     if (!token) {
//       return res.status(401).json({ success: false, message: 'No token provided in cookies.' });
//     }
  
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });
//       }
//       res.status(200).json({ success: true});
//     });
// });

// module.exports = {
//     path: '/auth',
//     router,
// };