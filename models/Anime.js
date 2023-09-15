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
Anime.associate = () => {
  Anime.belongsToMany(User, {
    through: UsersAnime,
    foreignKey: 'anime_id'
  });
  User.hasMany(Anime, {
    through: UsersAnime,
    foreignKey: 'user_id'
  });
};

module.exports = Anime;
