"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeController = void 0;
const conf_1 = require("../../base/conf");
const index_1 = require("../index");
class SizeController {
    constructor() { }
    findAll(req, res, next) {
        new index_1.SizeModel()
            .findAll()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    create(req, res, next) {
        console.log('Notfiy user controller create called------------------');
        new index_1.SizeModel().create(req.body).then(result => {
            console.log('Category controller create called', result);
            res.json(result);
        }).catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    find(req, res, next) {
        let id = req.params.id;
        new index_1.SizeModel()
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
}
exports.SizeController = SizeController;
//# sourceMappingURL=size.controller.js.map