const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Anime = sequelize.define('Anime', {
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
