"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const index_1 = require("../index");
class UserRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.UserController();
        this.router.route('/user/register').post(controller.create);
        this.router.route('/user/login').post(controller.login);
        this.router.route('/profile/profile/find/:id').get(controller.find);
        this.router.route('/profile/profile/update/:id').put(controller.update);
        this.router.route('/profile/profile/forgotPassword').post(controller.forgotPassword);
        this.router.route('/profile/profile/changePassword/:id').post(controller.changePassword);
        this.router.route('/profile/profile/resetPassword').post(controller.resetPassword);
        this.router.route('/profile/profile/validateVerificationCode').post(controller.validateVerificationCode);
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=user.route.js.map