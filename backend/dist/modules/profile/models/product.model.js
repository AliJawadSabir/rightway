"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const index_1 = require("../index");
const conf_1 = require("../../base/conf");
const bluebird_1 = require("bluebird");
const category_model_1 = require("./category.model");
const color_model_1 = require("./color.model");
const size_model_1 = require("./size.model");
const multer = require('multer');
class ProductModel extends base_model_1.BaseModel {
    constructor() {
        super(index_1.Product);
        this.model = index_1.Product;
    }
    create(item) {
        return this.model.findOne({ where: { name: item.name, sizeId: item.sizeId,
                colorId: item.colorId, categoryId: item.categoryId } }).then(res => {
            console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd', res);
            if (res) {
                console.log('----------------------------------------');
                console.log('result is duplicate');
                console.log('-------------------------------------------');
                return conf_1.ErrorHandler.duplicateEntry;
            }
            else {
                console.log('-------in createeeeeeeee portionnnnnn', item);
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
            console.log('result skowing in find all', result);
            console.log('-------------------------------------------');
            return result;
        });
    }
    findWithCode(id) {
        console.log('-------id worked', id);
        return this.find(id).then(res => {
            if (res) {
                let code = res.code;
                console.log('----------------------------------------');
                console.log('item code in find code', code);
                console.log('-------------------------------------------');
                return this.findCodeItems(code);
            }
        });
    }
    findBySeason(season) {
        console.log('-------season workedddddddddddddddd', season);
        return this.model.findAll().then(res => {
            if (res) {
                let response = [];
                return bluebird_1.Promise.each(res, resp => {
                    if (resp['dataValues']['season'] == season) {
                        console.log('-----------------category id', resp['dataValues']['categoryId']);
                        return new category_model_1.CategoryModel().find(resp['dataValues']['categoryId']).then(categoryResponse => {
                            resp['dataValues']['category'] = categoryResponse;
                            return new color_model_1.ColorModel().find(resp['dataValues']['colorId']).then(colorResponse => {
                                resp['dataValues']['color'] = colorResponse;
                                return new size_model_1.SizeModel().find(resp['dataValues']['sizeId']).then(sizeResponse => {
                                    resp['dataValues']['size'] = sizeResponse;
                                    response.push(resp);
                                });
                            });
                        });
                    }
                }).then(() => {
                    return response;
                });
            }
            else {
                return conf_1.ErrorHandler.recordNotFound;
            }
        });
    }
    findByDiscount(discount) {
        console.log('-------discount workedddddddddddddddd', discount);
        return this.model.findAll().then(res => {
            if (res) {
                let response = [];
                return bluebird_1.Promise.each(res, resp => {
                    if (resp['dataValues']['discount'] >= discount) {
                        console.log('-----------------category id', resp['dataValues']['categoryId']);
                        return new category_model_1.CategoryModel().find(resp['dataValues']['categoryId']).then(categoryResponse => {
                            resp['dataValues']['category'] = categoryResponse;
                            return new color_model_1.ColorModel().find(resp['dataValues']['colorId']).then(colorResponse => {
                                resp['dataValues']['color'] = colorResponse;
                                return new size_model_1.SizeModel().find(resp['dataValues']['sizeId']).then(sizeResponse => {
                                    resp['dataValues']['size'] = sizeResponse;
                                    response.push(resp);
                                });
                            });
                        });
                    }
                }).then(() => {
                    return response;
                });
            }
            else {
                return conf_1.ErrorHandler.recordNotFound;
            }
        });
    }
    findByType(type) {
        console.log('-------type workedddddddddddddddd', type);
        let attributes = ['id', 'name', 'url', 'price', 'code', 'description', 'season',
            'discount', 'sold', 'available', 'colorId', 'categoryId', 'sizeId', 'type'];
        let conditions = { discount: type };
        return this.model.findAll(attributes, conditions).then(res => {
            console.log('-------find with type workedddddddddddddddd', res);
            if (res) {
                let i = 0;
                let response = [];
                while (i < res.length) {
                    if (res[i]['dataValues']['type'] == type) {
                        response.push(res[i]['dataValues']);
                    }
                    i++;
                }
                return response;
            }
        });
    }
    find(id) {
        return this.model.findOne({ where: { id: id } }).then(res => {
            console.log('-------find worked', res['dataValues']['id']);
            if (res) {
                return new category_model_1.CategoryModel().find(res['dataValues']['categoryId']).then(categoryResponse => {
                    res['dataValues']['category'] = categoryResponse;
                    return new color_model_1.ColorModel().find(res['dataValues']['colorId']).then(colorResponse => {
                        res['dataValues']['color'] = colorResponse;
                        return new size_model_1.SizeModel().find(res['dataValues']['sizeId']).then(sizeResponse => {
                            res['dataValues']['size'] = sizeResponse;
                            return res;
                        });
                    });
                });
            }
        });
    }
    updateQuantity(id, quantity) {
        return this.model.findOne({ where: { id: id } }).then(res => {
            if (res) {
                let item = res['dataValues'];
                item['available'] = item['available'] - quantity;
                item['sold'] = item['sold'] + quantity;
                return this.update(id, item).then(response => {
                    return response;
                });
            }
        });
    }
    update(id, item) {
        item = base_model_1.BaseModel.extendItem(item, false);
        return this.sequelizeModel.update(item, { where: { id: id } });
    }
    findCodeItems(code) {
        console.log('----------------------------------------');
        console.log('item code in find code items', code);
        console.log('-------------------------------------------');
        return this.findAll()
            .then(res => {
            if (res) {
                let response = [];
                return bluebird_1.Promise.each(res, product => {
                    if (product['dataValues']['code'] == code) {
                        return this.find(product['dataValues']['id']).then(resp => {
                            response.push(resp);
                            console.log('=========================================');
                            console.log('response of find function', resp['dataValues']['id']);
                        });
                    }
                }).then(() => {
                    console.log('=======================================');
                    console.log('retuning response', response);
                    return response;
                });
            }
        });
    }
}
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.model.js.map