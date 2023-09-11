const Character = require('../models/Character'); // Import the Character model

// Create a new character record
exports.createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create character' });
  }
};

// Get a list of all character records
exports.getAllCharacters = async (req, res) => {
  try {
    const characterList = await Character.findAll();
    res.status(200).json(characterList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch character list' });
  }
};

// Get a single character record by ID
exports.getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Character.findByPk(id);
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch character by ID' });
  }
};

// Update an existing character record by ID
exports.updateCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Character.update(req.body, {
      where: { id },
    });
    if (updated) {
      res.status(200).json({ message: 'Character updated successfully' });
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update character' });
  }
};

// Delete a character record by ID
exports.deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Character.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete character' });
  }
};
