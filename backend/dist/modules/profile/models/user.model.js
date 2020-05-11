"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../../base/models/base.model");
const user_1 = require("./schema/user");
const conf_1 = require("../../base/conf");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const configurations_1 = require("../../base/conf/configurations");
class UserModel extends base_model_1.BaseModel {
    constructor() {
        super(user_1.User);
        this.SALTROUNDS = 10;
        this.model = user_1.User;
    }
    create(item) {
        console.log('-------createeeeeeeeeeeeeee' + item.email);
        return this.model.findOne({ where: { email: item.email } }).then(res => {
            console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd', res);
            if (res) {
                return conf_1.ErrorHandler.duplicateEmail;
            }
            else {
                console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd');
                return this.encrypt(item.password).then(hashedPassword => {
                    console.log('-------HASHED PASSWORD--------', hashedPassword);
                    item.password = hashedPassword;
                    return super.create(item);
                });
            }
        });
    }
    login(item) {
        return this.model.findOne({ where: { email: item.email } }).then(res => {
            if (res) {
                let userRes = res;
                return this.verifyPassword(item.password, userRes.password).then(match => {
                    if (res && match) {
                        console.log('------------------------------success');
                        console.log(res);
                        let token = jwt.sign({ id: res['id'], email: res['email'],
                            iat: Math.floor(Date.now() / 1000) - 30 }, configurations_1.CONFIGURATIONS.SECRET);
                        let result = {
                            id: userRes.id, email: userRes.email, isSuperUser: userRes.isSuperUser,
                            token: token, gender: userRes.gender, address: userRes.address,
                            mobileNumber: userRes.mobileNumber, name: userRes.name
                        };
                        return result;
                    }
                    else {
                        console.log('------------------------------password');
                        console.log(res);
                        return conf_1.ErrorHandler.invalidLogin;
                    }
                });
            }
            else {
                console.log('------------------------------email');
                console.log(res);
                return conf_1.ErrorHandler.invalidLogin;
            }
        });
    }
    forgotPassword(item) {
        return super.findByCondition(['id', 'username'], { username: item.username }).then(user => {
            if (user) {
            }
            else {
            }
        });
    }
    changePassword(id, item) {
        return super.find(id, ['id', 'password']).then(result => {
        });
    }
    resetPassword(item) {
        if (item.verificationCode && item.password) {
            return super.findByCondition(['id'], { verificationCode: item.verificationCode }).then(user => {
            });
        }
        else {
        }
    }
    sendEmail(_from, _fromPassword, _to, _subject, _text, _html) {
        return new Promise((resolve, reject) => {
        });
    }
    encrypt(str) {
        return bcrypt.hash(str, this.SALTROUNDS);
    }
    verifyPassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map