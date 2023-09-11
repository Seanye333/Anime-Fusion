const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
    },
    rating: {
      type: DataTypes.INTEGER
    }
  });

  return Anime;
};
