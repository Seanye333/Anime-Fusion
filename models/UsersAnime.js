const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Anime = require('./Anime');
const User = require('./User');

const UsersAnime = sequelize.define('users_anime', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  anime_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Anime,
      key: 'id'
    }
  },
  watchlist: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = UsersAnime;
