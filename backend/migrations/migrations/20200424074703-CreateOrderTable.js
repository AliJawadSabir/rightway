'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Order',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        status: { type: Sequelize.STRING, allowNull: false },
        amount: { type: Sequelize.INTEGER, allowNull: false },
        customerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
          references: {
            model: 'Customer',
            key: 'id'
          }
        },
        // products: { type: Sequelize.STRING, allowNull: false },
        // quantities: { type: Sequelize.STRING, allowNull: false },
        trackId: { type: Sequelize.STRING, allowNull: false },
        // gender: { type: Sequelize.STRING(50), allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false },
        updatedAt: { type: Sequelize.DATE, allowNull: false },
        createdBy: { type: Sequelize.INTEGER },
        updatedBy: { type: Sequelize.INTEGER },
      },
      {
        // engine: 'InnoDB',                     // default: 'InnoDB'
        // charset: null,                        // default: null
      }
    ).then(() => {
      return queryInterface
        .addConstraint('Order', ['customerId'], {
          type: 'foreign key',
          name: 'FK_Order_Customer',
          references: {
            table: 'Customer',
            field: 'id'
          }
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeConstraint('Order', 'FK_Order_Customer')
      .then(() => {
        return queryInterface.dropTable('Order');
      })
  }
};
