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
//sets the associations for the tables
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
