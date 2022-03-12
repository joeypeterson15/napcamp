'use strict';

// const { INTEGER, STRING } = require("sequelize/types");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      profilePicture: {
        type: Sequelize.STRING(256),
        defaultValue: "https://i.ibb.co/xL7Nt98/hipcamp-icon.png",
        allowNull: true,
      },
      money: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        allowNull: true,
      },
      bio: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      memberSince: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
