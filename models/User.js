const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Anime = require('./Anime');
const UsersAnime = require('./UsersAnime');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
User.associate = () => {
  User.hasMany(Anime, {
    through: UsersAnime,
    foreignKey: 'user_id'
  });
  Anime.belongsToMany(User, {
    through: UsersAnime,
    foreignKey: 'anime_id'
  });
};

module.exports = User;
