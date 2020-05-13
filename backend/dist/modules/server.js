"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const base_route_1 = require("./base/router/base-route");
class Server {
    constructor() {
        this.app = express();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    api() {
    }
    errorHandler() {
        this.app.use(function (err, req, res, next) {
            this.app.use((err, req, res, next) => {
                console.log('Error handler: -------------------------------------');
                return res.status(err.status || 500).send({
                    message: err.message || err.name || err
                });
            });
        });
    }
    routes() {
        let router;
        router = express.Router();
        new base_route_1.BaseRoute(router);
        this.app.use('/', router);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map