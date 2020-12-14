'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'Jason Garber',
        url: 'https://sixtwothree.org',
        photo: 'https://assets.sixtwothree.org/jgarber.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
