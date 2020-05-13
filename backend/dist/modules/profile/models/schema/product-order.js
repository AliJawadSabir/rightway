"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrder = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_1 = require("./order");
const product_1 = require("./product");
let ProductOrder = (() => {
    let ProductOrder = class ProductOrder extends sequelize_typescript_1.Model {
    };
    __decorate([
        sequelize_typescript_1.ForeignKey(() => order_1.Order),
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], ProductOrder.prototype, "orderId", void 0);
    __decorate([
        sequelize_typescript_1.ForeignKey(() => product_1.Product),
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], ProductOrder.prototype, "productId", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], ProductOrder.prototype, "quantity", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], ProductOrder.prototype, "createdBy", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], ProductOrder.prototype, "updatedBy", void 0);
    ProductOrder = __decorate([
        sequelize_typescript_1.Table({ timestamps: true, freezeTableName: true })
    ], ProductOrder);
    return ProductOrder;
})();
exports.ProductOrder = ProductOrder;
//# sourceMappingURL=product-order.js.map