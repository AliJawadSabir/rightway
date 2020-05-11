"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const conf_1 = require("../../base/conf");
class UserController {
    constructor() { }
    login(req, res, next) {
        new index_1.UserModel().login(req.body).then(result => {
            if (result && !result['error']) {
                res.json(result);
            }
            else {
                conf_1.ErrorHandler.send(result, res, next);
            }
        }).catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    create(req, res, next) {
        new index_1.UserModel()
            .create(req.body)
            .then(result => {
            console.log('-------createeeeeeeeeeeeeee calleddddddddddddddd', result);
            if (result) {
                res.json(result);
            }
            else {
                res.status(conf_1.ErrorHandler.recordNotFound.status)
                    .send(conf_1.ErrorHandler.recordNotFound);
            }
        })
            .catch(err => {
            conf_1.ErrorHandler.sendServerError(err, res, next);
        });
    }
    find(req, res, next) {
        let id = req.params.id;
        new index_1.UserModel()
            .find(id, ['id', 'username', 'name', 'phoneNumber', 'address', 'gender'])
            .then(result => {
            if (result) {
                res.json(result);
            }
            else {
            }
        })
            .catch(err => {
        });
    }
    update(req, res, next) {
        let id = req.params.id;
        let reqBody = req.body;
        let item = { name: reqBody.name, phoneNumber: reqBody.phoneNumber, address: reqBody.address, gender: reqBody.gender };
        new index_1.UserModel()
            .update(id, item)
            .then(result => {
            res.json(result);
        })
            .catch(err => {
        });
    }
    forgotPassword(req, res, next) {
        new index_1.UserModel()
            .forgotPassword(req.body)
            .then(result => {
            if (result && !result['error']) {
                res.json(result);
            }
            else {
            }
        })
            .catch(err => {
        });
    }
    changePassword(req, res, next) {
        let id = req.params.id;
        let item = req.body;
        new index_1.UserModel()
            .changePassword(id, item)
            .then(result => {
            if (result && !result['error']) {
                res.json(result);
            }
            else {
            }
        })
            .catch(err => {
        });
    }
    resetPassword(req, res, next) {
        let item = req.body;
        new index_1.UserModel()
            .resetPassword(item)
            .then(result => {
            if (result && !result['error']) {
                res.json(result);
            }
            else {
            }
        })
            .catch(err => {
        });
    }
    validateVerificationCode(req, res, next) {
        let verificationCode = req.body.verificationCode;
        new index_1.UserModel()
            .findByCondition(['id'], { verificationCode: verificationCode })
            .then(result => {
            if (result) {
                res.send(true);
            }
            else {
            }
        })
            .catch(err => {
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map