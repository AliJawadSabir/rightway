"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../../base/models/base.model");
const index_1 = require("../index");
class ProductOrderModel extends base_model_1.BaseModel {
    constructor() {
        super(index_1.ProductOrder);
        this.model = index_1.ProductOrder;
    }
    create(item) {
        return super.create(item).then(result => {
            console.log('----------------------------------------');
            console.log('result showing ' + result['dataValues'][0]);
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
    findByOrderId(orderId) {
        return this.model.findAll(['id', 'orderId', 'productId', 'quantity'], { where: { orderId: orderId } }).then(res => {
            console.log('-------findddd workedd in product order');
            if (res) {
                console.log('----------------------------------------');
                console.log('result found', res['dataValues']);
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
    deleteByOrderId(orderId) {
        return this.model.delete({ where: { orderId: orderId } }).then(res => {
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
exports.ProductOrderModel = ProductOrderModel;
//# sourceMappingURL=product-order.model.js.map