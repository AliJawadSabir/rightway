"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const conf_1 = require("../../base/conf");
const index_1 = require("../index");
class ProductController {
    constructor() { }
    findAll(req, res, next) {
        new index_1.ProductModel()
            .findAll()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    findWithCode(req, res, next) {
        let id = req.params.id;
        console.log('find wit code controller', id);
        new index_1.ProductModel()
            .findWithCode(id)
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    findByDiscount(req, res, next) {
        let discount = req.params.discount;
        console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log('discount worked in controller', discount);
        console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>');
        new index_1.ProductModel()
            .findByDiscount(discount)
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    findBySeason(req, res, next) {
        let season = req.params.season;
        console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log('discount worked in controller', season);
        console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>');
        new index_1.ProductModel()
            .findBySeason(season)
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    findByType(req, res, next) {
        let type = req.params.type;
        new index_1.ProductModel()
            .findByType(type)
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    find(req, res, next) {
        let id = req.params.id;
        new index_1.ProductModel()
            .find(id)
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    create(req, res, next) {
        console.log('Product controller create called------------------');
        new index_1.ProductModel().create(req.body).then(result => {
            console.log('Product controller create called', result);
            res.json(result);
        }).catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    updateQuantity(req, res, next) {
        let id = req.params.id;
        let reqBody = req.body;
        let item = reqBody.quantity;
        console.log('UPDATE QUANTITY IN PRODUCT CONTROLLER', item, id);
        new index_1.ProductModel()
            .updateQuantity(id, item)
            .then(result => {
            res.json(result);
        })
            .catch(err => {
        });
    }
    update(req, res, next) {
        let id = req.params.id;
        let reqBody = req.body;
        new index_1.ProductModel()
            .update(id, reqBody)
            .then(result => {
            res.json(result);
        })
            .catch(err => {
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map