"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connection_string_1 = require("./connection_string");
const index_1 = require("../../profile/index");
class Connection {
    constructor() { }
    createConnection() {
        this.sequelize = new sequelize_typescript_1.Sequelize(connection_string_1.CONNECTION_STRING.database, connection_string_1.CONNECTION_STRING.username, connection_string_1.CONNECTION_STRING.password, { host: '34.229.20.55', port: 3306, dialect: 'mysql', storage: connection_string_1.CONNECTION_STRING.storage });
        this.sequelize
            .authenticate()
            .then(() => {
            console.log('Connection has been established successfully.');
        })
            .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
        this.sequelize.addModels([
            index_1.User,
            index_1.NotifyUser,
            index_1.Category,
            index_1.Product,
            index_1.Size,
            index_1.Color,
            index_1.Customer,
            index_1.Order,
            index_1.ProductOrder
        ]);
        return this.sequelize;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map