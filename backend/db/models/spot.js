'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lat: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    lng: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    bookId: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.STRING
    }
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.hasMany(models.Review, { foreignKey: "spotId" })
    Spot.hasMany(models.Booking, { foreignKey: "spotId"})
    Spot.hasMany(models.Save, { foreignKey: "spotId"})
  };
  return Spot;
};
