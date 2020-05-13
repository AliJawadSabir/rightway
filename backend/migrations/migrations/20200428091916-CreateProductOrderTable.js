'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'ProductOrder',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        // status: { type: Sequelize.STRING, allowNull: false },
        // amount: { type: Sequelize.INTEGER, allowNull: false },
        orderId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
          references: {
            model: 'Order',
            key: 'id'
          }
        },
        productId: { 
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
          references: {
            model: 'Product',
            key: 'id'
          }
        },
        quantity: { type: Sequelize.INTEGER, allowNull: false },
        // trackId: { type: Sequelize.STRING, allowNull: false },
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
        .addConstraint('ProductOrder', ['orderId'], {
          type: 'foreign key',
          name: 'FK_ProductOrder_Order',
          references: {
            table: 'Order',
            field: 'id'
          }
        }).then(() => {
          return queryInterface
          .addConstraint('ProductOrder', ['productId'], {
            type: 'foreign key',
            name: 'FK_ProductOrder_Product',
            references: {
              table: 'Product',
              field: 'id'
            }
          })
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeConstraint('ProductOrder', 'FK_ProductOrder_Order')
      .then(() => {
        return queryInterface
          .removeConstraint('ProductOrder', 'FK_ProductOrder_Product')
          .then(() => {
            return queryInterface.dropTable('ProductOrder');
        })
      })
  }
};
