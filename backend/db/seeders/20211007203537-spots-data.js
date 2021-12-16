'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Spots', [


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

        {
          name: "Cozy Outdoor bed",
          location: "Mill Valley",
          category: "Remote",
          imageUrl: "https://i.ibb.co/4R5DVhD/4.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$16",
        },
        {
          name: "Bamboo bed",
          location: "Berkeley",
          category: "Cozy",
          imageUrl: "https://i.ibb.co/g9cf92D/Becoming-one-with-the-landscape-thanks-to-the-outdoor-bed-in-bamboo.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$28",
        },
        {
          name: "Bed by the Pool",
          location: "Tiburon",
          category: "Peaceful",
          imageUrl: "https://i.ibb.co/L5YYbbf/Bed-by-pool.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
          price: "$38",
        },
        {
          name: "Awesome outdoor bed",
          location: "Sausilito",
          category: "Secluded",
          imageUrl: "https://i.ibb.co/nnHPLxf/outdoor-bed-awesome.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$32",
        },
        {
          name: "Private outdoor bed",
          location: "San Francisco",
          category: "Private",
          imageUrl: "https://i.ibb.co/2WHnHKX/image.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$29",
        },
        {
          name: "Cozy private backyard bed",
          location: "Mill Valley",
          category: "Private",
          imageUrl: "https://i.ibb.co/vDvLTqt/outdoor-beds-backyard.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$27",
        },
        {
          name: "Solid wood twin daybed",
          location: "Stinson Beach",
          category: "Remote",
          imageUrl: "https://i.ibb.co/H7wN9y4/Schwenksville-Twin-Solid-Wood-Daybed-with-Mattress.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$21",
        },
        {
          name: "Daybed with cushions in outdoor patio",
          location: "Ross",
          category: "Cozy",
          imageUrl: "https://i.ibb.co/sV83cW2/Tillis-81-Wide-Outdoor-Teak-Patio-Daybed-with-Cushions.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$29",
        },





        {
          name: "Outdoor bed",
          location: "Mill Valley",
          category: "Peaceful",
          imageUrl: "https://i.ibb.co/VghQ6Tt/951e5c5ff5693d83df467a845ae54781.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$30"
        },
        {
          name: "Front patio hanging bed",
          location: "Oakland",
          category: "Peaceful",
          imageUrl: "https://i.ibb.co/M5LwssS/front-patio-hanging-bed.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$30"
        },
        {
          name: "Outdoor sleeping porch",
          location: "Larkspur",
          category: "Secluded",
          imageUrl: "https://i.ibb.co/NjtVX8G/Outdoor-sleeping-porch-hanging-bed.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$37"
        },
        {
          name: "Outdoor hanging bed above peaceful water",
          location: "Bolinas",
          category: "Peaceful",
          imageUrl: "https://i.ibb.co/rpF68LY/outdoor-swing-bed-above-water.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$24"
        },
        {
          name: "Porch swinging daybed",
          location:"Novato",
          category:"Cozy",
          imageUrl: "https://i.ibb.co/F44qNPz/porch-swing-daybed-idea-1.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$19"
        },
        {
          name:"Back porch daybed",
          location: "Tiburon",
          category: "Private",
          imageUrl: "https://i.ibb.co/dsNQ3kM/porch-swing-hanging-1080x1305.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$31"
        },
        {
          name: "Red hanging porch bed",
          location: "Sausilito",
          category: "Private",
          imageUrl: "https://i.ibb.co/TcmBDVy/Red-hanging-porch-bed.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$35"
        },
        {
          name: "Sleeping porch day bed",
          location: "Ross",
          category: "Secluded",
          imageUrl: "https://i.ibb.co/CJybP8p/sleeping-porch-017.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$24"
        },
        {
          name: "Circular hanging patio bed",
          location: "Stinson Beach",
          category: "Remote",
          imageUrl: "https://i.ibb.co/1sp6TxD/swirly-handing-patio-bed.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$38"
        },

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








      ], {});



  },

  down: async (queryInterface, Sequelize) => {

      return await queryInterface.bulkDelete('Spots');

  }
};
