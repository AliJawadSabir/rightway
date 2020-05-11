"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("../../base/conf");
const index_1 = require("../index");
class CustomerController {
    constructor() { }
    findAll(req, res, next) {
        new index_1.CustomerModel()
            .findAll()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    create(req, res, next) {
        console.log('Customer controller create called------------------');
        new index_1.CustomerModel().create(req.body).then(result => {
            console.log('Customer controller create called', result);
            res.json(result);
        }).catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    delete(req, res, next) {
        let id = req.params.id;
        new index_1.CustomerModel()
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
        new index_1.CustomerModel()
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
    update(req, res, next) {
        let id = req.params.id;
        let reqBody = req.body;
        new index_1.CustomerModel()
            .update(id, reqBody)
            .then(result => {
            res.json(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map