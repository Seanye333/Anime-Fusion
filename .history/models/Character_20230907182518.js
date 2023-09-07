const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Character = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
  });

  // Define associations (e.g., each character belongs to an anime)
  Character.associate = (models) => {
    Character.belongsTo(models.Anime, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Character;
};
