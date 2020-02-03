import { Sequelize } from 'sequelize-typescript';

import { CONNECTION_STRING } from './local-settings';


/**
 * Import from profile Module
 * 
 */
import {
  User, NotifyUser
} from '../../profile/index'

export class Connection {
  sequelize: Sequelize;
  constructor() { }
  public createConnection(): Sequelize {
    /** Instantiating Sequelize instance for creating connection */
    this.sequelize = new Sequelize('rightway_db','SA', 'Jawad@52923',{dialect:'mssql'});
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
      NotifyUser
    ]);
    return this.sequelize;
  }
}
