// import { Sequelize } from 'sequelize-typescript';
import { Connection} from '../conf/connection';
import { CONFIGURATIONS} from '../conf/configurations';
// import { Connection, CONFIGURATIONS } from '../../base/conf';
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'jawad52923',
//     database: 'rightway_db'
//   })

export class BaseModel {
//   public sequelize = Sequelize;
  public sequelizeModel;
  protected connection;
  constructor(model) {
    this.sequelizeModel = model;
    this.openConnection();
    
  }
  


  

  protected openConnection() {
    // this.connection.connect();
    if (!CONFIGURATIONS.connection) 
    {
      console.log('-----------------------------------------------------------');
      console.log('Db Connection is created (' + new Date() + ')');
      console.log('-----------------------------------------------------------');
      CONFIGURATIONS.connection = new Connection().createConnection();
    }
    this.connection = CONFIGURATIONS.connection;
  }

  

  protected closeConnection() {

    // connection.end()
    this.connection.close();
    // CONFIGURATIONS.connection = null;
  }

  /**
   * Find single record by id
   * @param id
   */
  find(id, attributes?, include?) {
    return this.findByCondition(attributes, { id: id }, include);
  }

  findAndCountAll(attributes?, conditions?, include?, order?, options?) {

    let args = BaseModel.qry2SequelizeOptions(options);

    return this.sequelizeModel.findAndCountAll(
      this.sequelizeQueryBuilder(attributes, conditions, include, order, args)
    );
  }

  /**
   * Find single record by specified condition
   * @param attributes
   */
  findByCondition(attributes, conditions, include?) {
    
    return this.sequelizeModel.findOne(attributes,
      // this.sequelizeQueryBuilder(attributes, conditions, include)
      {where:{conditions}}
    );
  }

  /**
   * Find all records with specified attributes
   * @param attributes
   */
  findAll(attributes?, conditions?, include?, order?) {
    return this.findAllByConditions(attributes, conditions, include, order);
  }

  /**
   * Find all records with specified attributes and conditions
   * @param attributes
   */
  findAllByConditions(attributes, conditions, include?, order?) {

    return this.sequelizeModel.findAll(
      this.sequelizeQueryBuilder(attributes, conditions, include, order)
    );
  }

  /**
   * Update a record for given id
   * @param item
   * @param id
   */
  update(id, item) {
    item = BaseModel.extendItem(item, false);
    return this.sequelizeModel.update(item, { where: { id: id } });

  }

  /**
   * Create a new record
   * @param item
   */
  create(item) {

    item = BaseModel.extendItem(item, true);
    console.log('baseeeeeeeeeeeeeee', item);
    return this.sequelizeModel.create(item);
  }

  /**
   * Count all records
   */
  count() {
    return this.sequelizeModel.count();
  }

  /**
   * Delete a record against an id
   * @param id
   */
  delete(id) {
    return this.deleteByConditions({ id: id });
  }

  /**
   * Delete a record by conditions
   * @param conditions
   */
  deleteByConditions(conditions) {

    return this.softDelete(conditions);

    // return this.sequelizeModel.destroy(
    //   this.sequelizeQueryBuilder(null, conditions)
    // );
  }

  /**
   * Update delted flat to true by condition
   * @param condition 
   */
  softDelete(condition) {

    let item = { deleted: true };
    item = BaseModel.extendItem(item, false);

    return this.sequelizeModel.update(item, { where: condition });
  }

  /**
   * To prepare the sequelize query.
   *
   * @param attributes any
   * @param condition any
   */
  protected sequelizeQueryBuilder(attributes?, condition?, include?, order?, options?) {
    let obj = {};

    if (attributes) {
      obj['attributes'] = attributes;
    }

    obj['where'] = this.conditionBuilder(condition);

    if (include) {
      obj['include'] = include;
    }

    if (order) {
      obj['order'] = order;
    }

    if (options && options['offset']) {
      obj['offset'] = options['offset'];
    }

    if (options && options['limit']) {
      obj['limit'] = options['limit'];
    }

    return obj;
  }


  /**
   * Build conditon object
   * 
   * @param condition 
   */
  public conditionBuilder(condition?) {
    return BaseModel.cb(condition);
  }

  /**
   * Build condition object. If condition is provided then append where clause 'deleted = false' into conditon or 
   * if conditon is not provided then create a conditon object with where clause 'deleted = false'.  
   * 
   * @param condition 
   */
  public static cb(condition?) {

    let updatedCondition = (condition ? condition : {});

    updatedCondition['deleted'] = false;

    return updatedCondition;
  }

  /**
   * extend item with createdBy, updatedBy
   * 'both' parameter is being used to updated both keys created/updated by otherwise only updated by will udpated.
   * @param item object
   * @param both boolean
   */
  static extendItem(item, isCreate?) {

    // if (isCreate) {
    //   item['createdBy'] = CONFIGURATIONS.identity.userId;
    // }

    // item['updatedBy'] = CONFIGURATIONS.identity.userId;

    return item;
  }

  /**
     * Convert query sting object to sequelize options object
     * 
     */
  static qry2SequelizeOptions(query) {

    let options = {};

    if (query['offset']) {
      options['offset'] = Number(query['offset'])
    }

    if (query['limit']) {
      options['limit'] = Number(query['limit'])
    }

    return options;
  }
}
