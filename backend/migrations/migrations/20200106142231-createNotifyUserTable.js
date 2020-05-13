'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'NotifyUser',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        email: { type: Sequelize.STRING, allowNull: false },
        // password: { type: Sequelize.STRING, allowNull: false },
        // isSuperUser: { type: Sequelize.BOOLEAN },
        // isActive: { type: Sequelize.BOOLEAN, defaultValue: true },
        // portal: { type: Sequelize.STRING(50), allowNull: false },
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
    return queryInterface.dropTable('NotifyUser')
  }
};
