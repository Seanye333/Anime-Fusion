const express = require('express');
const app = express();
const routes = require('./routes');
const sequelize = require('./config/connection');

// Middleware for parsing JSON data
app.use(express.json());

// Use the API routes
app.use(routes);

// Connect to the database
sequelize
  .sync({ force: false }) // Set 'force' to true to recreate tables on each start (useful for development)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
