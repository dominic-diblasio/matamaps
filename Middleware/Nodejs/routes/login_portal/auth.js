const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/authenticateToken', (req, res) => {
    const token = req.cookies.jwt_token;
    console.log('Cookies:', req.cookies);
  
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided in cookies.' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });
      }
      res.status(200).json({ success: true});
    });
});

module.exports = {
    path: '/auth',
    router,
};