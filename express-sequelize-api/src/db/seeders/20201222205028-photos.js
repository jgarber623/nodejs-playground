'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Photos', [
      {
        authorId: 1,
        name: 'Textures',
        url: 'https://sixtwothree.org/photos/1',
        syndications: [
          'https://www.flickr.com/photos/jgarber/23207722914/',
          'https://www.instagram.com/p/_c-DL7txhI/'
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Photos', null, {});
  }
};
