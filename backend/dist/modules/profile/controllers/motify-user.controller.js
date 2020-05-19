"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("../../base/conf");
const index_1 = require("../index");
class NotifyUserController {
    constructor() { }
    index(req, res, next) {
        new index_1.NotifyUserModel()
            .index()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    create(req, res, next) {
        console.log('Notfiy user controller create called------------------');
        new index_1.NotifyUserModel().create(req.body).then(result => {
            res.json(result);
        }).catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
}
exports.NotifyUserController = NotifyUserController;
//# sourceMappingURL=motify-user.controller.js.map