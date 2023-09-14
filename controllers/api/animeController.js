const Anime = require('../../models/Anime');
const express = require('express');
const router = express.Router();

// Create a new anime record
router.post('/', async (req, res) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create anime' });
  }
});

// Get a list of all anime records
router.get('/', async (req, res) => {
  try {
    const animeList = await Anime.findAll();
    res.status(200).json(animeList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch anime list' });
  }
});

// Get a single anime record by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const anime = await Anime.findByPk(id);
    if (anime) {
      res.status(200).json(anime);
    } else {
      res.status(404).json({ error: 'Anime not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch anime by ID' });
  }
});

// Update an existing anime record by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Anime.update(req.body, {
      where: { id }
    });
    if (updated) {
      res.status(200).json({ message: 'Anime updated successfully' });
    } else {
      res.status(404).json({ error: 'Anime not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update anime' });
  }
});

// Delete an anime record by ID
// router.delete('/anime/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await Anime.destroy({
//       where: { id }
//     });
//     if (deleted) {
//       res.status(204).json();
//     } else {
//       res.status(404).json({ error: 'Anime not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to delete anime' });
//   }
// });

module.exports = router;
