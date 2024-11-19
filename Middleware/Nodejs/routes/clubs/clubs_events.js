const express = require('express');
const axios = require('axios');
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

  router.get('/:club_id', authenticateToken, async (req, res) => {
    const db = router.locals.db;
    const { club_id } = req.params;
  
    try {
      // Fetch only events with "active" status for the specified club_id
      const events = await db('Events')
        .select('event_id', 'event_name', 'event_date', 'event_image','event_description', 'location', 'created_by')
        .where({ club_id, status: 'active' }); // Add the status filter
  
      if (events.length === 0) {
        return res.status(404).json({ success: false, message: 'No active events found for this club' });
      }
  
      console.log(`Fetched ${events.length} active events for club_id: ${club_id}`);
      res.status(200).json({ success: true, data: events });
    } catch (err) {
      console.error('Error fetching club events:', err);
      return res.status(500).json({ success: false, message: 'Error fetching club events' });
    }
  });
  
  
  module.exports = {
    path: '/clubs/events',
    router,
  };