"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const index_1 = require("../index");
class CustomerModel extends base_model_1.BaseModel {
    constructor() {
        super(index_1.Customer);
        this.model = index_1.Customer;
    }
    create(item) {
        return super.create(item).then(result => {
            console.log('----------------------------------------');
            console.log('result showing ' + result);
            console.log('-------------------------------------------');
            return result;
        });
    }
    findAll() {
        return this.model.findAll().then(result => {
            console.log('----------------------------------------');
            console.log('result skowing ' + result);
            console.log('-------------------------------------------');
            return result;
        });
    }
    find(id) {
        return this.model.findOne({ where: { id: id } }).then(res => {
            console.log('-------findddd workedddddddddddddddd', res);
            if (res) {
                console.log('----------------------------------------');
                console.log('result found');
                console.log('-------------------------------------------');
                return res;
            }
            else {
            }
        });
    }
    delete(id) {
        return this.model.delete({ where: { id: id } }).then(res => {
            console.log('-------delete workedddddddddddddddd', res);
        });
    }
    update(id, item) {
        return this.model.update(id, item).then(res => {
            console.log('-------update workedddddddddddddddd', res);
            if (res) {
                console.log('----------------------------------------');
                console.log('result updated');
                console.log('-------------------------------------------');
                return res;
            }
            else {
            }
        });
    }
}
exports.CustomerModel = CustomerModel;
//# sourceMappingURL=customer.model.js.map