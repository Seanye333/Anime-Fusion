const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Import connect-session-sequelize

const PORT = process.env.PORT || 3000;

// Create a new instance of SequelizeStore, passing your Sequelize instance
const sessionStore = new SequelizeStore({
  db: sequelize
});

// Setting View Engine To Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    name: 'my-session-cookie',
    cookie: {
      secure: true, // Set to true in a production environment
      httpOnly: true,
      maxAge: 86400000 // 24 hours
    },
    rolling: true,
    proxy: true,
    store: sessionStore // Use the session store created with connect-session-sequelize
  })
);

// Middleware for parsing JSON data
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Use the API routes
app.use(routes);

// Connect to the database and initialize the session store
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

// Initialize the session store after syncing the database
sessionStore.sync();
