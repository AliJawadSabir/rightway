'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Product',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, allowNull: false },
        url: { type: Sequelize.STRING, allowNull: false },
        code: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: false },
        type: { type: Sequelize.STRING, allowNull: false },
        season: { type: Sequelize.STRING, allowNull: false },
        price: { type: Sequelize.INTEGER, allowNull: false },
        available: { type: Sequelize.INTEGER, allowNull: false },
        sold: { type: Sequelize.INTEGER, allowNull: false },
        discount: { type: Sequelize.INTEGER, allowNull: false },
        categoryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
          references: {
            model: 'Category',
            key: 'id'
          }
        },
        sizeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
          references: {
            model: 'Size',
            key: 'id'
          }
        },
        colorId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
          references: {
            model: 'Color',
            key: 'id'
          }
        },
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
    .then(() => {
      return queryInterface
        .addConstraint('Product', ['categoryId'], {
          type: 'foreign key',
          name: 'FK_Product_Category',
          references: {
            table: 'Category',
            field: 'id'
          }
        })
        .then(() => {
          return queryInterface.addConstraint('Product', ['sizeId'], {
            type: 'foreign key',
            name: 'FK_Product_Size',
            references: {
              table: 'Size',
              field: 'id'
            }
          })
          .then(() => {
            return queryInterface.addConstraint('Product', ['colorId'], {
              type: 'foreign key',
              name: 'FK_Product_Color',
              references: {
                table: 'Color',
                field: 'id'
              }
            });
          });
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeConstraint('Product', 'FK_Product_Category')
      .then(() => {
        return queryInterface
          .removeConstraint('Product', 'FK_Product_Size')
          .then(() => {
            return queryInterface
            .removeConstraint('Product', 'FK_Product_Color')
            .then(() => {
              return queryInterface.dropTable('Product');
            });
          })
      });
  }
};
