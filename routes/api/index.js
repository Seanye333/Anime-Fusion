const express = require('express');
const router = express.Router();
const Anime = require('../../models/Anime');
const Character = require('../../models/Character');

// Route to get all anime
router.get('/anime', async (req, res) => {
  try {
    const animeList = await Anime.findAll();
    res.json(animeList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get all characters
router.get('/characters', async (req, res) => {
  try {
    const characterList = await Character.findAll();
    res.json(characterList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
