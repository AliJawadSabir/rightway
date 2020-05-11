"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
class SizeRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.SizeController();
        this.router.route('/size/create').post(controller.create);
        this.router.route('/size/findAll').get(controller.findAll);
        this.router.route('/size/find/:id').get(controller.find);
    }
}
exports.SizeRoute = SizeRoute;
//# sourceMappingURL=size.route.js.map