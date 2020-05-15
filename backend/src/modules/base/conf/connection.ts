import { Sequelize } from 'sequelize-typescript';

import { CONNECTION_STRING } from './connection_string';


/**
 * Import from profile Module
 * 
 */
import {
  User, NotifyUser, Category, Product, Size, Color, Customer, Order,
  ProductOrder
} from '../../profile/index'

/**
 * Import from product Module
 * 
 */
// import {
//   Category
// } from '../../product/index'

export class Connection {
  sequelize: Sequelize;
  constructor() { }
  public createConnection(): Sequelize {
    /** Instantiating Sequelize instance for creating connection */
    this.sequelize = new Sequelize(CONNECTION_STRING.database, 
      CONNECTION_STRING.username, CONNECTION_STRING.password,
      { dialect: 'mysql', storage: CONNECTION_STRING.storage });
    // this.sequelize = new Sequelize(CONNECTION_STRING);

    this.sequelize
      .authenticate()
      .then(() => {
        // console.log('Connection has been established successfully.');
      })
      .catch(err => {
        // console.error('Unable to connect to the database:', err);
      });
    this.sequelize.addModels([
      User,
      NotifyUser,
      Category,
      Product,
      Size,
      Color,
      Customer,
      Order,
      ProductOrder
    ]);
    return this.sequelize;
  }
}
