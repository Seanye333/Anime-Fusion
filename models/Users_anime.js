const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UsersAnime = sequelize.define('users_anime', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    watchlist: {
      type: DataTypes.CHAR(1),
      defaultValue: 'N'
    }
  });

  // Define associations for the many-to-many relationship
  UsersAnime.associate = (models) => {
    models.User.belongsToMany(models.Anime, {
      through: UsersAnime,
      foreignKey: 'user_id'
    });

    models.Anime.belongsToMany(models.User, {
      through: UsersAnime,
      foreignKey: 'anime_id'
    });
  };

  return UsersAnime;
};
