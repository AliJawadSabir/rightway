"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const index_1 = require("../index");
class OrderRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.OrderController();
        this.router.route('/order/create').post(controller.create);
        this.router.route('/order/findAll').get(controller.findAll);
        this.router.route('/order/update/:id').put(controller.update);
        this.router.route('/order/find/:id').get(controller.find);
        this.router.route('/order/findWithProducts/:orderId').get(controller.findWithProducts);
        this.router.route('/order/findAllWithProducts').get(controller.findAllWithProducts);
        this.router.route('/order/delete/:id').delete(controller.delete);
    }
}
exports.OrderRoute = OrderRoute;
//# sourceMappingURL=order.route.js.map