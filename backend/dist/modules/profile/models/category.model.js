"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../../base/models/base.model");
const index_1 = require("../index");
const conf_1 = require("../../base/conf");
class CategoryModel extends base_model_1.BaseModel {
    constructor() {
        super(index_1.Category);
        this.model = index_1.Category;
    }
    create(item) {
        return this.model.findOne({ where: { category: item.category } }).then(res => {
            console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd', res);
            if (res) {
                console.log('----------------------------------------');
                console.log('result is duplicate');
                console.log('-------------------------------------------');
                return conf_1.ErrorHandler.duplicateEntry;
            }
            else {
                return super.create(item).then(result => {
                    console.log('----------------------------------------');
                    console.log('result showing ' + res);
                    console.log('-------------------------------------------');
                    return result;
                });
            }
        });
    }
    findAll() {
        return this.model.findAll().then(result => {
            console.log('----------------------------------------');
            console.log('result skowing ');
            console.log('-------------------------------------------');
            return result;
        });
    }
    find(id) {
        return this.model.findOne({ where: { id: id } }).then(res => {
            if (res) {
                return res;
            }
        });
    }
}
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=category.model.js.map