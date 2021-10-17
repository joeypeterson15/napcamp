'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Spots', [
        {
          name: "Abondoned Hospital Bed",
          location: "Angel Island",
          category: "Desperate",
          imageUrl: 'https://i.ibb.co/FstjPSn/abandoned-hospital-bed.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Display beds Bed Bath and Beyond",
          location: "Sausilito",
          category: "Urgent",
          imageUrl: 'https://i.ibb.co/vq2pYCf/bbb-three.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Seaside mattress",
          location: "Novato",
          category: "Scenic",
          imageUrl: 'https://i.ibb.co/VpSZFvv/dirty-seaside-mattress.jpg',
          description: "If you like catching z's surrounded by nature and the beautfil ocean, this is your spot!",
          price: "$10"
        },
        {
          name: "Green park bench",
          location: "Oakland",
          category: "Urgent",
          imageUrl: 'https://i.ibb.co/cNhtkk7/green-park-bench.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$10"

        },
        {
          name: "Ikea beds",
          location: "Berkeley",
          category: "Urgent",
          imageUrl: 'https://i.ibb.co/d02Y5qC/ikea-mattresses-1.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Outdoor tropic bed",
          location: "Tiburon",
          category: "Secluded",
          imageUrl: 'https://i.ibb.co/2cXxbjr/outdoor-nice-hanging-bed.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$75"
        },
        {
          name: "Park Bench",
          location: "Richmond",
          category: "Convenience",
          imageUrl: "https://i.ibb.co/drGrXPP/outdoor-park-bench.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "Escape Mattress",
          location: "San Francisco",
          category: "Urgent",
          imageUrl: 'https://i.ibb.co/J7DqxbY/outdoor-path-mattress.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "Roadside couch",
          location: "Mill Valley",
          category: "Convenience",
          imageUrl: "https://i.ibb.co/0YJfvpQ/A-mattress-and-couch-placed-outside-by-the-curb-on-garbage-day.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },

        {
          name: "Cozy indoor bed",
          location: "Ross",
          category: "Cozy",
          imageUrl: 'https://i.ibb.co/BGDHgnf/nice-day-bed-indoor.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$45"

        },
        {
          name: "Outdoor day bed",
          location: "Larkspur",
          category: "Peaceful",
          imageUrl: 'https://i.ibb.co/7J5b9LF/nice-outdoor-day-bed.png',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$35"

        },
        {
          name: "Indoor day bed",
          location: "Corte Madera",
          category: "Private",
          imageUrl: 'https://i.ibb.co/02YqgBC/nice-indoor-bed.png',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$60"

        },
        {
          name: "Couch day bed",
          location: "outdoors",
          category: "Secluded",
          imageUrl: "https://i.ibb.co/L5jKHJn/day-bed-couch-nice.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
          name: "Lakeside hammock",
          location: "Kentfield",
          category: "Scenic",
          imageUrl: 'https://i.ibb.co/DY8d4bg/lakeside-hammock.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$15"
        },
        {
          name: "Secluded hammock",
          location: "Fairfax",
          category: "Scenic",
          imageUrl: "https://i.ibb.co/XZvgtbg/outdoor-hammock.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$20"
        },
        {
          name: "Ocean hammock",
          location: "Stinson Beach",
          category: "Remote",
          imageUrl: "https://i.ibb.co/2hPP4Zh/seaside-hammock.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$25"
        },

      ], {});



  },

  down: async (queryInterface, Sequelize) => {

      return await queryInterface.bulkDelete('Spots');

  }
};
