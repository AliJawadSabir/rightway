"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../../base/models/base.model");
const notify_user_1 = require("./schema/notify-user");
class NotifyUserModel extends base_model_1.BaseModel {
    constructor() {
        super(notify_user_1.NotifyUser);
    }
    create(item) {
        return super.create(item).then(result => {
            console.log('----------------------------------------');
            console.log('result skowing ' + result);
            console.log('-------------------------------------------');
            return result;
        });
    }
    index() {
        return super.findAll().then(result => {
            console.log('----------------------------------------');
            console.log('result skowing ' + result);
            console.log('-------------------------------------------');
        });
    }
}
exports.NotifyUserModel = NotifyUserModel;
//# sourceMappingURL=notify-user.model.js.map