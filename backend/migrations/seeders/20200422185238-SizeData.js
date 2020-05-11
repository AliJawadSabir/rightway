'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Size', [{
      size : 'Small',
      text : 'S',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      size : 'Medium',
      text : 'M',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      size : 'Large',
      text : 'L',
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Size');
  }
};
