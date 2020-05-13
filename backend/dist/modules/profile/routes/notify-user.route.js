"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyUserRoute = void 0;
const index_1 = require("../index");
class NotifyUserRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.NotifyUserController();
        console.log('---------------------------------------in register route create');
        this.router.route('/notifyuser/create').post(controller.create);
    }
}
exports.NotifyUserRoute = NotifyUserRoute;
//# sourceMappingURL=notify-user.route.js.map