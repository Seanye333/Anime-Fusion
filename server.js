const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3000;
// Setting View Engine To Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON data
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Use the API routes
app.use(routes);

// Connect to the database
sequelize
  .sync({ force: false }) // Set 'force' to true to recreate tables on each start (useful for development)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
