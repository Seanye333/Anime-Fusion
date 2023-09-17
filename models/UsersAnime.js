const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Anime = require('./Anime');
const User = require('./User');

class UsersAnime extends Model {}

UsersAnime.init(
  {
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'users_anime'
  }
);

module.exports = UsersAnime;
