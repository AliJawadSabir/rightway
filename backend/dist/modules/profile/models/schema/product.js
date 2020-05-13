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
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const category_1 = require("./category");
const size_1 = require("./size");
const color_1 = require("./color");
let Product = (() => {
    let Product = class Product extends sequelize_typescript_1.Model {
    };
    __decorate([
        sequelize_typescript_1.ForeignKey(() => category_1.Category),
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "categoryId", void 0);
    __decorate([
        sequelize_typescript_1.ForeignKey(() => size_1.Size),
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "sizeId", void 0);
    __decorate([
        sequelize_typescript_1.ForeignKey(() => color_1.Color),
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "colorId", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "available", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "sold", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "price", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Product.prototype, "type", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Product.prototype, "season", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Product.prototype, "url", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Product.prototype, "code", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "discount", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "createdBy", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", Number)
    ], Product.prototype, "updatedBy", void 0);
    Product = __decorate([
        sequelize_typescript_1.Table({ timestamps: true, freezeTableName: true })
    ], Product);
    return Product;
})();
exports.Product = Product;
//# sourceMappingURL=product.js.map