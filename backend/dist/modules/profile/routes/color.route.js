"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
class ColorRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.ColorController();
        this.router.route('/color/create').post(controller.create);
        this.router.route('/color/findAll').get(controller.findAll);
        this.router.route('/color/update/:id').put(controller.update);
        this.router.route('/color/find/:id').put(controller.find);
        this.router.route('/color/delete/:id').put(controller.delete);
    }
}
exports.ColorRoute = ColorRoute;
//# sourceMappingURL=color.route.js.map