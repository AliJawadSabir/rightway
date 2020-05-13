'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Category',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        category: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false },
        updatedAt: { type: Sequelize.DATE, allowNull: false },
        createdBy: { type: Sequelize.INTEGER },
        updatedBy: { type: Sequelize.INTEGER },
      },
      {
        // engine: 'InnoDB',                     // default: 'InnoDB'
        // charset: null,                        // default: null
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Category');
  }
};
