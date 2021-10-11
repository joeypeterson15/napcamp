'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Spots', [
        {
          name: "Abondoned Hospital Bed",
          location: "Angle Island, California",
          category: "hidden-gems",
          imageUrl: 'https://i.ibb.co/FstjPSn/abandoned-hospital-bed.jpg',
          description: "Nestled in Angel Island, one of the Bay Area's landmark spots, abondoned and free beds await."
        },
        {
          name: "Display beds Bed Bath and Beyond",
          location: "outdoors",
          category: "hidden-gems",
          imageUrl: 'https://i.ibb.co/vq2pYCf/bbb-three.jpg',
          description: "Just pick the bed that fits your napping body the best. These beds are only available monday-wednsay during business hours(Ask for Bob. He'll let you sleep as long as you want for only $5!)."
        },
        {
          name: "seaside mattress",
          location: "outdoors",
          category: "scenic",
          imageUrl: 'https://i.ibb.co/VpSZFvv/dirty-seaside-mattress.jpg',
          description: "If you like catching z's surrounded by nature and the beautfil ocean, this is your spot!",
        },
        {
          name: "dirty-seaside-mattress",
          location: "indoors",
          category: "abondoned",
          imageUrl: 'https://i.ibb.co/cNhtkk7/green-park-bench.jpg',
          description: "This beautful park bench offers seclusion and privacy. The curves can be tricky for some people, but if you like a nice curve then this could be your perfect nap match!",

        },
        {
          name: "ikea mattress",
          location: "outdoors",
          category: "convenience",
          imageUrl: 'https://i.ibb.co/d02Y5qC/ikea-mattresses-1.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "outdoor-hanging-bed",
          location: "indoors",
          category: "convenience",
          imageUrl: 'https://i.ibb.co/2cXxbjr/outdoor-nice-hanging-bed.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "outdoor park bench",
          location: "outdoors",
          category: "convenience",
          imageUrl: "https://i.ibb.co/drGrXPP/outdoor-park-bench.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "dirty-seaside-mattress",
          location: "outdoors",
          category: "convenience",
          imageUrl: 'https://i.ibb.co/J7DqxbY/outdoor-path-mattress.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "convenience mattress",
          location: "outdoors",
          category: "convenience",
          imageUrl: "https://i.ibb.co/0YJfvpQ/A-mattress-and-couch-placed-outside-by-the-curb-on-garbage-day.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },

        {
          name: "nice day bed indoor",
          location: "indoors",
          category: "cozy",
          imageUrl: 'https://i.ibb.co/BGDHgnf/nice-day-bed-indoor.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "nice outdoor daybed",
          location: "outdoors",
          category: "cozy",
          imageUrl: 'https://i.ibb.co/7J5b9LF/nice-outdoor-day-bed.png',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "nice indoor bed",
          location: "indoors",
          category: "cozy",
          imageUrl: 'https://i.ibb.co/02YqgBC/nice-indoor-bed.png',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "daybed couch",
          location: "outdoors",
          category: "cozy",
          imageUrl: "https://i.ibb.co/L5jKHJn/day-bed-couch-nice.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "lakeside hammock",
          location: "outdoors",
          category: "scenic",
          imageUrl: 'https://i.ibb.co/DY8d4bg/lakeside-hammock.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "outdoor hammock",
          location: "outdoors",
          category: "scenic",
          imageUrl: "https://i.ibb.co/XZvgtbg/outdoor-hammock.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "seaside hammock",
          location: "outdoors",
          category: "scenic",
          imageUrl: "https://i.ibb.co/2hPP4Zh/seaside-hammock.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },

      ], {});



  },

  down: async (queryInterface, Sequelize) => {

      return await queryInterface.bulkDelete('Spots');

  }
};
