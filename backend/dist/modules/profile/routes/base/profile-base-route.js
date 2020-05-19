"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const index_2 = require("../../index");
const index_3 = require("../../index");
const index_4 = require("../../index");
class ProfileBaseRoute {
    constructor(router) {
        this.router = router;
        this.initAll();
    }
    initAll() {
        new index_1.UserRoute(this.router);
        new index_2.NotifyUserRoute(this.router);
        new index_3.CategoryRoute(this.router);
        new index_4.ProductRoute(this.router);
        new index_4.SizeRoute(this.router);
        new index_4.ColorRoute(this.router);
        new index_4.CustomerRoute(this.router);
        new index_4.OrderRoute(this.router);
    }
}
exports.ProfileBaseRoute = ProfileBaseRoute;
//# sourceMappingURL=profile-base-route.js.map