"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
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
        var store = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads');
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + '.' + file.originalname);
            }
        });
        var upload = multer({ storage: store });
        this.router.post('/product/uploadImage', upload.single('file'), function (req, res, next) {
            console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            console.log('UPLOAD IMAGE CALLED IN ROUTER');
            console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            if (!req.file) {
                return res.send({
                    success: false
                });
            }
            else {
                let status = { success: true, file: req.file };
                return res.send(status);
            }
        });
    }
}
exports.ProductRoute = ProductRoute;
//# sourceMappingURL=product.route.js.map