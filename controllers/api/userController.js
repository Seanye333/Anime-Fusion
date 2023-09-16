const { User, UsersAnime, Anime } = require('../../models'); // Import the User model
const bcrypt = require('bcrypt');
const express = require('express');
// const UsersAnime = require('../../models/UsersAnime');
const { Sequelize } = require('sequelize');
const router = express.Router();

// Create a new user record
router.post('/login', async (req, res) => {
  const { userId } = req.params;
  try {
    const userRecord = User.findByPk(req.body.id);
    if (!userRecord) {
      await User.create({
        id: userId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
    } else {
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Get a list of all user records
router.get('/', async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).json(userList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user list' });
  }
});

// Get a single user record by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user by ID' });
  }
});
//Adding the watchlist
router.post('/:userId/watchlist', async (req, res) => {
  const { userId } = req.params;
  try {
    const animeRecord = await Anime.findByPk(req.body.id);
    if (!animeRecord) {
      await Anime.create({
        id: req.body.id,
        title: req.body.title
      });
    }
    const userAnime = await UsersAnime.create({
      user_id: userId,
      anime_id: req.body.id,
      anime_title: req.body.title,
      watchlist: true
    });
    res.status(200).json(userAnime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user by ID' });
  }
});

router.get('/:userId/watchlist', async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Anime,
          through: {
            model: UsersAnime,
            where: {
              watchlist: true
            }
          }
        }
      ],
      where: {}
    });
    console.log('USER', user);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userWatchlist = user.get({ plain: true });
    res.status(200).json(userWatchlist);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error occurred' });
  }
});

// Update an existing user record by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await User.update(req.body, {
      where: { id }
    });
    if (updated) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete a user record by ID
// exports.deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await User.destroy({
//       where: { id }
//     });
//     if (deleted) {
//       res.status(204).json();
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to delete user' });
//   }
// };
module.exports = router;
