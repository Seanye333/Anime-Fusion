const { Sequelize } = require('sequelize');

// Load database configuration from your config file (e.g., config.json)
const config = require('./config/config.json')['development']; // Change to your desired environment

// Initialize Sequelize with the database configuration
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    // Additional options can be added here (e.g., logging, pool, etc.)
  }
);

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Export the initialized Sequelize instance
module.exports = {
  sequelize,
  testConnection,
};
