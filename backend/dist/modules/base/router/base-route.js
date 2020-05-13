"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoute = void 0;
const index_1 = require("../../profile/index");
class BaseRoute {
    constructor(router) {
        console.log('base route called----------------------------------------------');
        this.router = router;
        this.initAll();
    }
    initAll() {
        new index_1.ProfileBaseRoute(this.router);
    }
}
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=base-route.js.map