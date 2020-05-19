"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const index_1 = require("../index");
const multer = require('multer');
const router = express.Router();
class ProductRoute {
    constructor(router) {
        this.router = router;
        this.create();
    }
    create() {
        let controller = new index_1.ProductController();
        this.router.route('/product/create').post(controller.create);
        this.router.route('/product/findWithCode/:id').get(controller.findWithCode);
        this.router.route('/product/find/:id').get(controller.find);
        this.router.route('/product/updateQuantity/:id').put(controller.updateQuantity);
        this.router.route('/product/update/:id').put(controller.update);
        this.router.route('/product/findByDiscount/:discount').get(controller.findByDiscount);
        this.router.route('/product/findBySeason/:season').get(controller.findBySeason);
        this.router.route('/product/findByType/:type').get(controller.findByType);
        this.router.route('/product/findAll').get(controller.findAll);
        this.router.route('/product/uploadImage').post(controller.uploadImage);
    }
}
exports.ProductRoute = ProductRoute;
//# sourceMappingURL=product.route.js.map