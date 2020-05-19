"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("../../base/conf");
const index_1 = require("../index");
class OrderController {
    constructor() { }
    findAll(req, res, next) {
        new index_1.OrderModel()
            .findAll()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    create(req, res, next) {
        let prod = req.body.products;
        let item = { body: req.body, prod: prod, length: prod.length };
        console.log('order controller create called------------------', prod.length);
        new index_1.OrderModel().create(req.body).then(result => {
            console.log('order controller create called', result);
            res.json(result);
        }).catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    delete(req, res, next) {
        let id = req.params.id;
        new index_1.OrderModel()
            .delete(id)
            .then(result => {
            if (result) {
                res.json(result);
            }
            else {
                res.status(conf_1.ErrorHandler.recordNotFound.status).send(conf_1.ErrorHandler.recordNotFound);
            }
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    find(req, res, next) {
        let id = req.params.id;
        new index_1.OrderModel()
            .find(id)
            .then(result => {
            if (result) {
                res.json(result);
            }
            else {
                res.status(conf_1.ErrorHandler.recordNotFound.status).send(conf_1.ErrorHandler.recordNotFound);
            }
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    findAllWithProducts(req, res, next) {
        new index_1.OrderModel()
            .findAllWithProducts()
            .then(result => {
            if (result) {
                res.json(result);
            }
            else {
                res.status(conf_1.ErrorHandler.recordNotFound.status).send(conf_1.ErrorHandler.recordNotFound);
            }
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    findWithProducts(req, res, next) {
        let orderId = req.params.orderId;
        console.log('=======================================');
        console.log('find with product controller', orderId);
        console.log('=======================================');
        new index_1.OrderModel()
            .findWithProducts(orderId)
            .then(result => {
            if (result) {
                res.json(result);
            }
            else {
                res.status(conf_1.ErrorHandler.recordNotFound.status).send(conf_1.ErrorHandler.recordNotFound);
            }
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    update(req, res, next) {
        let id = req.params.id;
        let reqBody = req.body;
        new index_1.OrderModel()
            .update(id, reqBody)
            .then(result => {
            res.json(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map