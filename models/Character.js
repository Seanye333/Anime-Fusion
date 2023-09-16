const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Character = sequelize.define('Character', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
});

module.exports = Character;