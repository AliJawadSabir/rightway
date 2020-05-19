"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../../base/models/base.model");
const index_1 = require("../index");
const conf_1 = require("../../base/conf");
class ColorModel extends base_model_1.BaseModel {
    constructor() {
        super(index_1.Color);
        this.model = index_1.Color;
    }
    create(item) {
        return this.model.findOne({ where: { color: item.color } }).then(res => {
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
            console.log('result skowing ' + result);
            console.log('-------------------------------------------');
            return result;
        });
    }
    find(id) {
        return this.model.findOne({ where: { id: id } }).then(res => {
            if (res) {
                console.log('----------------------------------------');
                console.log('result found');
                console.log('-------------------------------------------');
                return res;
            }
            else {
            }
        });
    }
    delete(id) {
        return this.model.delete({ where: { id: id } }).then(res => {
        });
    }
    update(id, item) {
        return this.model.update(id, item).then(res => {
            console.log('-------update workedddddddddddddddd', res);
            if (res) {
                console.log('----------------------------------------');
                console.log('result updated');
                console.log('-------------------------------------------');
                return res;
            }
            else {
            }
        });
    }
}
exports.ColorModel = ColorModel;
//# sourceMappingURL=color.model.js.map