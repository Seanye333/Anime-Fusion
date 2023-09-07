const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: String,
  episodes: Number,
  releaseYear: Number,
});

module.exports = mongoose.model('Anime', animeSchema);
