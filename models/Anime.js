const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const UsersAnime = require('./UsersAnime');

const Anime = sequelize.define('animes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Anime;
