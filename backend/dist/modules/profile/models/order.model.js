"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../../base/models/base.model");
const index_1 = require("../index");
const bluebird_1 = require("bluebird");
const product_order_model_1 = require("./product-order.model");
const product_model_1 = require("./product.model");
const customer_model_1 = require("./customer.model");
class OrderModel extends base_model_1.BaseModel {
    constructor() {
        super(index_1.Order);
        this.model = index_1.Order;
    }
    create(item) {
        return super.create(item).then(result => {
            for (let i = 0; i < item.products.length; i++) {
                let prodOrder = { orderId: result['dataValues']['id'],
                    productId: item.products[i]['id'], quantity: item.quantity[i] };
                console.log('----------------------------------------');
                console.log('result showing in order model ' + prodOrder);
                console.log('-------------------------------------------');
                new product_order_model_1.ProductOrderModel().create(prodOrder).then(resp => {
                    console.log('----------------------------------------');
                    console.log('result showing of id ' + resp['dataValues']);
                    console.log('-------------------------------------------');
                });
            }
            return result;
        });
    }
    findAll() {
        return this.model.findAll().then(result => {
            console.log('----------------------------------------');
            console.log('result skowing ');
            console.log('-------------------------------------------');
            return result;
        });
    }
    findAllWithProducts() {
        return this.model.findAll().then(result => {
            if (result) {
                let orders = [];
                return bluebird_1.Promise.each(result, order => {
                    return this.findWithProducts(order['dataValues']['id']).then(resp => {
                        orders.push(resp);
                    });
                }).then(() => {
                    return orders;
                });
            }
        });
    }
    findWithProducts(orderId) {
        return this.find(orderId).then(orderResult => {
            if (orderResult) {
                let products = [];
                let customerId = orderResult['dataValues']['customerId'];
                return new customer_model_1.CustomerModel().find(customerId).then(customer => {
                    if (customer) {
                        orderResult['dataValues']['customer'] = customer;
                        return new product_order_model_1.ProductOrderModel().findAll().then(productOrderResponse => {
                            return bluebird_1.Promise.each(productOrderResponse, productOrder => {
                                if (productOrder['dataValues']['orderId'] == orderId) {
                                    let productId = productOrder['dataValues']['productId'];
                                    return new product_model_1.ProductModel().find(productId).then(productResponse => {
                                        productResponse['dataValues']['quantity'] = productOrder['dataValues']['quantity'];
                                        products.push(productResponse);
                                    });
                                }
                            }).then(() => {
                                orderResult['dataValues']['products'] = products;
                                return orderResult;
                            });
                        });
                    }
                });
            }
        });
    }
    find(id) {
        return this.model.findOne({ where: { id: id } }).then(res => {
            console.log('-------findddd workeddddddd in order');
            if (res) {
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
exports.OrderModel = OrderModel;
//# sourceMappingURL=order.model.js.map