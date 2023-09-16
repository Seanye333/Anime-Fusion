const Anime = require('./Anime');
const User = require('./User');
const UsersAnime = require('./UsersAnime');

User.belongsToMany(Anime, { through: UsersAnime, foreignKey: 'user_id' });
Anime.belongsToMany(User, { through: UsersAnime, foreignKey: 'anime_id' });

module.exports = { Anime, User, UsersAnime };
