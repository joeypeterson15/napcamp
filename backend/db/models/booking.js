'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    startTime: {
      allowNull: false,
      type: DataTypes.TIME
    },
    endTime: {
      allowNull: false,
      type: DataTypes.TIME
    },
    guests: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
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
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Spot, { foreignKey: "spotId" })
    Booking.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Booking;
};
