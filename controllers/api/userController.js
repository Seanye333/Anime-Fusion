const { User, UserAnime, Anime } = require('../../models'); // Import the User model
const express = require('express');
const router = express.Router();

// Create a new user record
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
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
    const userAnime = await UserAnime.create({
      user_id: userId,
      anime_id: req.body.id,
      watchlist: true
    });
    res.status(200).json(userAnime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user by ID' });
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
