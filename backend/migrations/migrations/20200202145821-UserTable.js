'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'User',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: false },
        isSuperUser: { type: Sequelize.BOOLEAN },
        mobileNumber: { type: Sequelize.STRING, allowNull: false },
        address: { type: Sequelize.STRING, allowNull: false },
        gender: { type: Sequelize.STRING(50), allowNull: false },
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
    return queryInterface.dropTable('User')
  }
};
