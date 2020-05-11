"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("../../base/conf");
const index_1 = require("../index");
class ColorController {
    constructor() { }
    findAll(req, res, next) {
        new index_1.ColorModel()
            .findAll()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    create(req, res, next) {
        console.log('Color controller create called------------------');
        new index_1.ColorModel().create(req.body).then(result => {
            console.log('Color controller create called', result);
            res.json(result);
        }).catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    delete(req, res, next) {
        let id = req.params.id;
        new index_1.ColorModel()
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
        new index_1.ColorModel()
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
        let item = { color: reqBody.color, description: reqBody.description };
        new index_1.ColorModel()
            .update(id, item)
            .then(result => {
            res.json(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
}
exports.ColorController = ColorController;
//# sourceMappingURL=color.controller.js.map