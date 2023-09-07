const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Anime = sequelize.define('Anime', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: DataTypes.STRING,
    episodes: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER,
  });

  return Anime;
};
