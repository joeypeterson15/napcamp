'use strict';
module.exports = (sequelize, DataTypes) => {
  const Save = sequelize.define('Save', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Spots"
      }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users"
      }
    },
  }, {});
  Save.associate = function(models) {
    // associations can be defined here
    Save.belongsTo(models.Spot, { foreignKey: "spotId" })
    Save.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Save;
};
