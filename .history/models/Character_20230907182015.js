const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  anime: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime',
  },
});

module.exports = mongoose.model('Character', characterSchema);
