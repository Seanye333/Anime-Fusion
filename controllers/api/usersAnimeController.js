const UserAnime = require('../../models/UsersAnime'); // Import the UserAnime model

// Create a new user record
exports.createUserAnime = async (req, res) => {
  try {
    const userAnime = await UserAnime.create(req.body);
    res.status(201).json(userAnime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Get a list of all user records
exports.getAllUsers = async (req, res) => {
  try {
    const userAnimeList = await UserAnime.findAll();
    res.status(200).json(userAnimeList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user list' });
  }
};

// Get a single user record by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await UserAnime.findByPk(id);
    if (userId) {
      res.status(200).json(userId);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user by ID' });
  }
};

// Update an existing user record by ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await UserAnime.update(req.body, {
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
};

// Delete a user record by ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await UserAnime.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
