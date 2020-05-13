"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const index_1 = require("../index");
class CategoryRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.CategoryController();
        this.router.route('/category/create').post(controller.create);
        this.router.route('/category/findAll').get(controller.findAll);
        this.router.route('/category/find/:id').get(controller.find);
    }
}
exports.CategoryRoute = CategoryRoute;
//# sourceMappingURL=category.route.js.map