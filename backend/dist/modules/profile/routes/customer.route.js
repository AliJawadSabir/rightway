"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
class CustomerRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.CustomerController();
        this.router.route('/customer/create').post(controller.create);
        this.router.route('/customer/findAll').get(controller.findAll);
        this.router.route('/customer/update/:id').put(controller.update);
        this.router.route('/customer/find/:id').put(controller.find);
        this.router.route('/customer/delete/:id').put(controller.delete);
    }
}
exports.CustomerRoute = CustomerRoute;
//# sourceMappingURL=customer.route.js.map