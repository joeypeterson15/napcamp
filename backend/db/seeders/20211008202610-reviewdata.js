'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Reviews', [
        {
          content: "this spot was amazing!!",
          spotId: 1
        },
        {
          content: "Highly recommend to anyone who needs a quick wink",
          spotId: 2
        },
        {
          content: "Wow, never felt better after napping here.",
          spotId: 3
        },
        {
          content: "I was a skeptic at first. Now I'm never napping anywhere else!!",
          spotId: 4
        },
        {
          content: "What a privelege to nap here!!",
          spotId: 5
        }
      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Reviews');
  }
};
