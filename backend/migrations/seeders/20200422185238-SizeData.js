'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Size', [{
      size : 'Small',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      size : 'Medium',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      size : 'Large',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      size : 'XLarge',
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Size');
  }
};
