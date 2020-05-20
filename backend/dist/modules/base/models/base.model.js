"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const connection_1 = require("../conf/connection");
const configurations_1 = require("../conf/configurations");
class BaseModel {
    constructor(model) {
        this.sequelizeModel = model;
        this.openConnection();
    }
    openConnection() {
        if (!configurations_1.CONFIGURATIONS.connection) {
            configurations_1.CONFIGURATIONS.connection = new connection_1.Connection().createConnection();
            console.log('-----------------------------------------------------------');
            console.log('Db Connection is created (' + new Date() + ')');
            console.log('-----------------------------------------------------------');
        }
        this.connection = configurations_1.CONFIGURATIONS.connection;
    }
    closeConnection() {
        this.connection.close();
    }
    find(id, attributes, include) {
        return this.findByCondition(attributes, { id: id }, include);
    }
    findAndCountAll(attributes, conditions, include, order, options) {
        let args = BaseModel.qry2SequelizeOptions(options);
        return this.sequelizeModel.findAndCountAll(this.sequelizeQueryBuilder(attributes, conditions, include, order, args));
    }
    findByCondition(attributes, conditions, include) {
        return this.sequelizeModel.findOne(attributes, { where: { conditions } });
    }
    findAll(attributes, conditions, include, order) {
        return this.findAllByConditions(attributes, conditions, include, order);
    }
    findAllByConditions(attributes, conditions, include, order) {
        return this.sequelizeModel.findAll(this.sequelizeQueryBuilder(attributes, conditions, include, order));
    }
    update(id, item) {
        item = BaseModel.extendItem(item, false);
        console.log('=================================base', item);
        return this.sequelizeModel.update(item, { where: { id: id } });
    }
    create(item) {
        item = BaseModel.extendItem(item, true);
        console.log('this.sequelizeModel', this.sequelizeModel);
        return this.sequelizeModel.create(item);
    }
    count() {
        return this.sequelizeModel.count();
    }
    delete(id) {
        return this.deleteByConditions({ id: id });
    }
    deleteByConditions(conditions) {
        return this.softDelete(conditions);
    }
    softDelete(condition) {
        let item = { deleted: true };
        item = BaseModel.extendItem(item, false);
        return this.sequelizeModel.update(item, { where: condition });
    }
    sequelizeQueryBuilder(attributes, condition, include, order, options) {
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
    conditionBuilder(condition) {
        return BaseModel.cb(condition);
    }
    static cb(condition) {
        let updatedCondition = (condition ? condition : {});
        updatedCondition['deleted'] = false;
        return updatedCondition;
    }
    static extendItem(item, isCreate) {
        return item;
    }
    static qry2SequelizeOptions(query) {
        let options = {};
        if (query['offset']) {
            options['offset'] = Number(query['offset']);
        }
        if (query['limit']) {
            options['limit'] = Number(query['limit']);
        }
        return options;
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base.model.js.map