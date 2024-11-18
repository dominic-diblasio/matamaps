const express = require('express');
const dotenv = require('dotenv');
const knex = require('knex');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3500;
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

// Load environment variables from .env file
dotenv.config();

// Middleware for parsing JSON bodies and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());  // Required for parsing cookies

// server.js

// Middleware to attach db to request
app.use((req, res, next) => {
  req.db = db; // Attach the Knex db object to req
  next();
});

app.use((req, res, next) => {
  if (req.cookies.session_id && !req.query.session_id) {
    req.query.session_id = req.cookies.session_id;  // Inject session_id from cookie to query
  }
  next();
});
// Create a Knex database connection
// knex - ssl
const db = knex({
  client: 'mysql2',  // Using mysql2 client
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    // ssl: process.env.DB_SSL === 'true' ? {
    //   rejectUnauthorized: true // Ensures SSL certificate verification
    // } : false,
  },
});

// Check database connection (optional, to ensure Knex is set up correctly)
db.raw('SELECT 1')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  });
// Function to dynamically load routes from specified directories
const loadRoutes = (directories) => {
  directories.forEach((dir) => {
    fs.readdirSync(dir).forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
        loadRoutes([fullPath]); // Recurse into subdirectory
      } else if (file.endsWith('.js')) {
        const { path: routePath, router } = require(fullPath);
        if (routePath && router) {
          router.locals = { db }; // Pass the Knex db object to the router
          app.use(routePath, router);
          console.log(`Loaded route: ${routePath}`);
        } else {
          console.warn(`Skipping file ${fullPath} as it does not export a path and router`);
        }
      }
    });
  });
};

// Load routes only from the 'routes' directory
loadRoutes([path.join(__dirname, 'routes')]);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});