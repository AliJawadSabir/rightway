function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/app.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/app.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<app-main-nav>\n<router-outlet (activate)=\"onActivate($event, outlet)\" #outlet></router-outlet>\n</app-main-nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/about/about.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/about/about.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>About Us\n</div>\n<div class=\"about\" *ngIf=\"isMobileScreen\">\n    <div class=\"aboutHeading\">ABOUT RIGHTWAY</div>\n    <mat-card class=\"aboutMatcard\"> \n        <label> OUR FOCUS</label>\n        <p>\n            RightWay always focus the best quality that can be produced and a unique collection\n            of items. At Rightway, we work collectively to bring the best idea forward for you. Our \n            goal is to prepare unique items with great fabric quality because people start\n            to judge by looking at you. The cloth used is not mere fabric for us, we treat \n            it like an artist treats his canvas; with the love, respect and dedication that \n            it deserves.\n        </p>\n        <label> OUR GOALS</label>\n        <p>\n            At Rightway, we work collectively to bring the best idea forward for you. Our \n            goal is to prepare unique items with great fabric quality because people start\n            to judge by looking at you. The cloth used is not mere fabric for us, we treat \n            it like an artist treats his canvas; with the love, respect and dedication that \n            it deserves.\n        </p>\n    </mat-card>\n</div>\n\n<div class=\"about\" *ngIf=\"!isMobileScreen\">\n    <div class=\"aboutHeading\">ABOUT RIGHTWAY</div>\n        <mat-card class=\"aboutMatcard\" fxLayout=\"row\"> \n            <span fxFlex=\"50\" class=\"imageMatCard\">\n                <img class=\"imgSlider\" src={{image}}>\n                <!-- <div class=\"sliderText\">\n                    <h2>LAWN KURTA</h2>\n                </div> -->\n            </span>\n            <div fxLayout=\"column\" fxFlex=\"50\">\n                <label> OUR FOCUS</label>\n                <p>\n                    RightWay always focus the best quality that can be produced and a unique collection\n                    of items. At Rightway, we work collectively to bring the best idea forward for you. Our \n                    goal is to prepare unique items with great fabric quality because people start\n                    to judge by looking at you. The cloth used is not mere fabric for us, we treat \n                    it like an artist treats his canvas; with the love, respect and dedication that \n                    it deserves.\n                </p>\n                <label> OUR GOALS</label>\n                <p>\n                    At Rightway, we work collectively to bring the best idea forward for you. Our \n                    goal is to prepare unique items with great fabric quality because people start\n                    to judge by looking at you. The cloth used is not mere fabric for us, we treat \n                    it like an artist treats his canvas; with the love, respect and dedication that \n                    it deserves.\n                </p>\n            </div>\n        </mat-card>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-category/add-category.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-category/add-category.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsAddCategoryAddCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"pagePath\">\n        RightWay<span class=\"sign\">></span>Add Category\n    </div>\n    <div class=\"productPage\" *ngIf=\"!isMobileScreen\">\n        <!-- <div fxLayout=\"row\">\n            <a id=\"right\">Right Way</a>\n            <label class=\"prodLabel\">{{im.description}}</label>\n        </div> -->\n        <mat-card fxLayout=\"row\">\n            <div fxFlex=\"50\">\n                <img class=\"img\" src=\"{{imageLink}}\">\n            </div>\n            <div fxFlex=\"50\" class=\"formClass\">\n                <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"addCategory(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n                <h4>Add Category</h4>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Category</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.category\" formControlName=\"category\" required>\n                        <mat-error *ngIf=\"fg.get('category').hasError('required')\">Enter Category</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Description</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.description\" formControlName=\"description\" required>\n                        <mat-error *ngIf=\"fg.get('description').hasError('required')\">Enter Description</mat-error>\n                    </mat-form-field>\n                    <div fxLayout=\"row\">\n                        <button mat-raised-button class=\"addCategoryButton\" type=\"submit\" [disabled]=\"fg.invalid\">ADD Category</button>\n                        <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/home']\">Cancel</button>\n                    </div>\n                </form>\n                </div>\n        </mat-card>\n    </div>\n    <div class=\"productPage\" *ngIf=\"isMobileScreen\">\n        <!-- <div fxLayout=\"row\">\n            <a id=\"right\">Right Way</a>\n            <label class=\"prodLabel\">{{im.description}}</label>\n        </div> -->\n        <mat-card fxLayout=\"column\">\n            <div fxFlex=\"50\">\n                <img class=\"img\" src=\"{{imageLink}}\">\n            </div>\n            <div fxFlex=\"50\" class=\"formClass\">\n                <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"addCategory(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n                <h4>Add Category</h4>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Category</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.category\" formControlName=\"category\" required>\n                        <mat-error *ngIf=\"fg.get('category').hasError('required')\">Enter Category</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Description</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.description\" formControlName=\"description\" required>\n                        <mat-error *ngIf=\"fg.get('description').hasError('required')\">Enter Description</mat-error>\n                    </mat-form-field>\n                    <div fxLayout=\"row\">\n                        <button mat-raised-button class=\"addCategoryButton\" type=\"submit\" [disabled]=\"fg.invalid\">ADD Category</button>\n                        <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/home']\">Cancel</button>\n                    </div>\n                </form>\n                </div>\n        </mat-card>\n    </div>\n    <app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-product/add-product.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-product/add-product.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <div class=\"pagePath\">\n        RightWay<span class=\"sign\">></span>Add Product\n    </div>\n    <div class=\"productPage\">\n        <mat-card fxLayout=\"column\" class=\"matClass\">\n            <!-- <div fxFlex=\"50\">\n                <img class=\"img\" src=\"{{imageLink}}\">\n            </div> -->\n\n            <div class=\"formClass\">\n                <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"addProduct(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"0px\">\n                    <h4>Add Product</h4>\n                    <!-- <button mat-raised-button >Check</button> -->\n                        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                            <!-- <mat-form-field appearance=\"outline\" fxFlex=\"48\"> -->\n                                <!-- <h4 fxFlex=\"40\">Add Image</h4> -->\n                                <!-- <mat-label>{{componentLabels.name}}</mat-label> -->\n                                <span class=\"hidden-file\">\n                                    <!-- <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple [accept]=\"fileFilter\"> -->\n                                    <input type=\"file\" accept='image/*' #fileInput ng2FileSelect [uploader]=\"uploader\">\n                                </span>\n                                <!-- <input matInput [placeholder]=\"componentLabels.name\" formControlName=\"name\" required> -->\n                                <!-- <mat-error *ngIf=\"fg.get('name').hasError('required')\">Enter Name</mat-error> -->\n                            <!-- </mat-form-field> -->\n                            <button type=\"button\" class=\"imageButton\" mat-raised-button (click)=\"fileInput.click()\">Add Image</button>\n                        </div>\n                        <div fxLayout=\"row\" *ngIf=\"uploader.queue.length > 0\">\n                            <strong fxFlex=\"35\">Name</strong>\n                            <strong fxFlex=\"15\">Size</strong>\n                            <strong fxFlex=\"15\">Status</strong>\n                            <strong fxFlex=\"25\">Action</strong>\n                        </div>\n                        \n                        <div fxLayout=\"column\" *ngFor=\"let item of uploader.queue\">\n                            <div fxLayout=\"row\">\n                                <h6 fxFlex=\"35\">{{item.file.name}}</h6>\n                                <h6 fxFlex=\"15\">{{ item.file.size/1024/1024 | number:'.2' }} MB</h6>\n                                <span fxFlex=\"15\">\n                                    <mat-icon class=\"done-status\" *ngIf=\"item.isReady\">file_upload</mat-icon>\n                                    <mat-icon class=\"done-status\" *ngIf=\"!item.isReady\">thumb_down</mat-icon>\n                                </span>\n                                <button type=\"button\" class=\"removeButton\" mat-raised-button color=\"warn\" (click)=\"item.remove()\">Remove</button>\n                            </div>\n                        </div>\n                        <div *ngIf=\"uploader.queue.length > 0\" fxLayout=\"row\">\n                            <strong fxFlex=\"15\">Progress:</strong>\n                            <mat-progress-bar class=\"progress-bar\" mode=\"determinate\" \n                            [value]=\"uploader.progress\"></mat-progress-bar>\n                        </div>\n                        <div fxLayout=\"row\" *ngIf=\"uploader.queue.length > 0\" class=\"removeAllButton\">\n                            <button class=\"removeButton\" mat-raised-button [disabled]=\"!uploader.queue.length\"\n                            color=\"warn\" type=\"button\" (click)=\"uploader.clearQueue()\">Remove All</button>\n                            <button class=\"uploadButton\" mat-raised-button  [disabled]=\"!uploader.getNotUploadedItems().length\"\n                            (click)=\"uploadImage()\" type=\"button\">Upload All</button>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.name}}</mat-label>\n                                <input matInput [placeholder]=\"componentLabels.name\" formControlName=\"name\" required>\n                                <mat-error *ngIf=\"fg.get('name').hasError('required')\">Enter Product Name.</mat-error>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.categoryId}}</mat-label>\n                                <mat-select [placeholder]=\"componentLabels.categoryId\" formControlName=\"categoryId\" required>\n                                    <mat-option *ngFor=\"let category of categoryList\" [value]=\"category.id\">\n                                        {{ category.category }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"fg.get('categoryId').hasError('required')\">Select Category</mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.available}}</mat-label>\n                                <input matInput [placeholder]=\"componentLabels.available\" formControlName=\"available\" type=\"number\" required>\n                                <mat-error *ngIf=\"fg.get('available').hasError('required')\">Enter Available Itema</mat-error>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.price}}</mat-label>\n                                <input matInput [placeholder]=\"componentLabels.price\" formControlName=\"price\" type=\"number\" required>\n                                <mat-error *ngIf=\"fg.get('price').hasError('required')\">Enter Product Price.</mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.colorId}}</mat-label>\n                                <mat-select [placeholder]=\"componentLabels.colorId\" formControlName=\"colorId\" required>\n                                    <mat-option *ngFor=\"let color of colorList\" [value]=\"color.id\">\n                                        {{ color.color }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"fg.get('colorId').hasError('required')\">Select Color</mat-error>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.code}}</mat-label>\n                                <input matInput [placeholder]=\"componentLabels.code\" formControlName=\"code\" required>\n                                <mat-error *ngIf=\"fg.get('code').hasError('required')\">Enter Product Code</mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.sizeId}}</mat-label>\n                                <mat-select [placeholder]=\"componentLabels.sizeId\" formControlName=\"sizeId\" required>\n                                    <mat-option *ngFor=\"let size of sizeList\" [value]=\"size.id\">\n                                        {{ size.size }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"fg.get('sizeId').hasError('required')\">Select Size</mat-error>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.discount}}</mat-label>\n                                <input matInput [placeholder]=\"componentLabels.discount\" formControlName=\"discount\" type=\"number\" required>\n                                <mat-error *ngIf=\"fg.get('discount').hasError('required')\">Enter Discount Percentage.</mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.type}}</mat-label>\n                                <input matInput [placeholder]=\"componentLabels.type\" formControlName=\"type\">\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                                <mat-label>{{componentLabels.season}}</mat-label>\n                                <mat-select [placeholder]=\"componentLabels.season\" formControlName=\"season\" required>\n                                    <mat-option *ngFor=\"let season of seasonList\" [value]=\"season\">\n                                        {{ season }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"fg.get('season').hasError('required')\">Select Season</mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                            <mat-form-field appearance=\"outline\" fxFlex=\"96\">\n                                <mat-label>{{componentLabels.description}}</mat-label>\n                                <input matInput [placeholder]=\"componentLabels.description\" formControlName=\"description\" required>\n                                <mat-error *ngIf=\"fg.get('description').hasError('required')\">Enter Description</mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div fxLayout=\"row\">\n                            <button mat-raised-button class=\"addProductButton\" type=\"submit\" [disabled]=\"fg.invalid\">Add Product</button>\n                            <button class=\"cancelButton\" mat-raised-button (click)=\"cancelClick()\">Cancel</button>\n                        </div>\n                    </form>\n            </div>\n\n        </mat-card>\n    </div>\n    <app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-to-cart/add-to-cart.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-to-cart/add-to-cart.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsAddToCartAddToCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div > -->\n    <!-- <mat-spinner class=\"spinner\" *ngIf=\"!loaded\"></mat-spinner> -->\n    <!-- <mat-toolbar color=\"primary\" class=\"matCard\">\n        <span fxLayout=\"row\" fxFlex=\"90\" class=\"matCardButtons\">\n        <h1 class=\"matHeading\">  Right Way  </h1>  \n        <button mat-button routerLink=\"/\">Sales</button>  \n        <button mat-button routerLink=\"/about\">Winter Collection</button>\n        <button mat-button routerLink=\"/about\">New Designs</button>\n        <button mat-button routerLink=\"/about\">UnStitched</button>\n        <button mat-button routerLink=\"/about\">Stitched</button>\n        </span>\n        <span fxFlex=\"15\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <mat-icon>account_circle</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item routerLink=\"/login\">\n                  <span>Login</span>\n                </button>\n                <button mat-menu-item routerLink=\"/register\">\n                  <span>Sign Up</span>\n                </button>\n              </mat-menu>\n              <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n                <mat-icon>shopping_cart</mat-icon>\n              </button>\n              \n        </span>\n    </mat-toolbar> -->\n    \n    <!-- <div class=\"productPage\" fxLayout=\"row\">\n        <div fxFlex=\"50\">\n            <img class=\"img\" src=\"{{imageLink}}\">\n        </div>\n        <div fxFlex=\"50\">\n            <div fxLayout=\"column\">\n\n            </div>\n        </div>\n    </div> -->\n    <div class=\"pagePath\">\n        RightWay<span class=\"sign\">></span>Home<span class=\"sign\">></span>Add To Cart\n    </div>\n    <div class=\"productPage\" *ngIf=\"!isMobileScreen\">\n        <!-- <div fxLayout=\"row\">\n            <label class=\"cartLabel\">Shopping Cart Items</label>\n        </div> -->\n        <mat-card fxLayout=\"column\">\n            <div fxLayout=\"row\">\n                <label class=\"cartLabel\">Shopping Cart Items</label>\n            </div>\n            <div class=\"text-style\" fxLayout=\"row\" *ngIf=\"items.length > 0\">\n                <label  fxFlex=\"30\">Product</label>\n                <label fxFlex=\"15\">Price</label>\n                <label fxFlex=\"15\">Quantity</label>\n                <label fxFlex=\"15\">SubTotal</label>\n                <label fxFlex=\"15\">Action</label>\n            </div>\n            <div class=\"cartLabel\" *ngIf=\"items.length == 0\">\n                No Item Selected</div>\n            <div fxLayout=\"row\" class=\"margin-top\" *ngFor=\"let item of items; let i = index\">\n                <span fxFlex=\"30\" fxLayout=\"row\">\n                    <img fxFlex=\"30\" fxLayoutGap=\"20px\" class=\"img\" src=\"{{item.url}}\">\n                    <span class=\"margin-left\" fxFlex=\"50\" fxLayout=\"column\">\n                        <label>{{item.name}}</label>\n                        <label style=\"margin-top:10px\">Size: {{item.size}}</label>\n                        <label>Category: {{item.category}}</label>\n                    </span>\n                </span>\n                \n                <label fxFlex=\"15\">{{item.price}}</label>\n                <label fxFlex=\"15\">{{item.quantity}}</label>\n                <label fxFlex=\"15\">{{item.price * item.quantity}}</label>\n                <button type=\"button\" class=\"removeButton\" mat-raised-button color=\"warn\" (click)=\"removeItem(item.id)\">Remove</button>            \n            </div>\n            <div fxLayout=\"row\" class=\"button-style\">\n                <button mat-raised-button fxFlex=\"25\" class=\"continueShopping\"  [routerLink]=\"['/home']\">Continue Shopping</button>\n                <button mat-raised-button fxFlex=\"25\" class=\"removeItems\" *ngIf=\"items.length > 0\" (click)=\"removeItems()\">Remove Items</button>\n            </div>\n            <div fxFlex=\"50\" class=\"formClass\">\n                </div>\n        </mat-card>\n        <mat-card fxLayout=\"column\" style=\"margin-top:20px\">\n            <label class=\"orderLabel\">Order Summary</label>\n            <!-- <mat-list>\n                <mat-list-item>\n                    <label class=\"totalLabel\">Total</label>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">SubTotal</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{totalAmount}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">Tax Amount(14%)</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{taxAmount}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">Delivery Charges</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{deliveryCharges}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">Order Total</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{total}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n            </mat-list> -->\n            <label class=\"totalLabel\">Total</label>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">SubTotal</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{totalAmount}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Tax Amount(0%)</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{taxAmount}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Delivery Charges</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{deliveryCharges}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Order Total</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{total}}</label>\n            </span>\n            <button mat-raised-button class=\"proceed\" *ngIf=\"totalAmount > 0\" \n            [routerLink]=\"['/home/addToCart/shipping']\">Proceed To Checkout</button>\n        </mat-card>\n    </div>\n\n    <div class=\"productPage\" *ngIf=\"isMobileScreen\">\n        <mat-card fxLayout=\"column\" style=\"margin-top:20px\">\n            <label class=\"orderLabel\">Order Summary</label>\n            <!-- <mat-list>\n                <mat-list-item>\n                    <label class=\"totalLabel\">Total</label>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">SubTotal</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{totalAmount}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">Tax Amount(14%)</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{taxAmount}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">Delivery Charges</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{deliveryCharges}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>\n                    <span fxLayout=\"row\">\n                        <label class=\"itemLabel\" fxFlex=\"40\">Order Total</label>\n                        <label class=\"totalLabel\" fxFlex=\"40\">PKR {{total}}</label>\n                    </span>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n            </mat-list> -->\n            <label class=\"totalLabel\">Total</label>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"50\">SubTotal</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{totalAmount}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"50\">Tax Amount(0%)</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{taxAmount}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"50\">Delivery Charges</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{deliveryCharges}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"50\">Order Total</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{total}}</label>\n            </span>\n            <button mat-raised-button class=\"proceed\" *ngIf=\"totalAmount > 0\" \n            [routerLink]=\"['/home/addToCart/shipping']\">Proceed To Checkout</button>\n        </mat-card>\n        <div fxLayout=\"row\">\n            <label class=\"cartLabel\">Shopping Cart Items</label>\n        </div>\n        <mat-card fxLayout=\"column\">\n            <!-- <div class=\"text-style\" fxLayout=\"row\" *ngIf=\"items.length > 0\">\n                <label  fxFlex=\"30\">Product</label>\n                <label fxFlex=\"15\">Price</label>\n                <label fxFlex=\"15\">Quantity</label>\n                <label fxFlex=\"15\">SubTotal</label>\n                <label fxFlex=\"15\">Action</label>\n            </div> -->\n            <div class=\"cartLabel\" *ngIf=\"items.length == 0\">\n                No Item Selected</div>\n            <div class=\"margin-top\" *ngFor=\"let item of items; let i = index\">\n                <label class=\"nameLabel\">{{item.name}}</label>\n                <span fxLayout=\"row\">\n                    <img fxFlex=\"25\" class=\"img\" src=\"{{item.url}}\">\n                    <span class=\"margin-left\" fxFlex=\"40\" fxLayout=\"column\">\n                        \n                        <span class=\"marginColor\">Size:</span>\n                        <!-- <span class=\"marginColor\">Category:</span> -->\n                        <span class=\"marginColor\">Price:</span>\n                        <span class=\"marginColor\">Quantity:</span>\n                        <span class=\"marginColor\">Sub Total:</span>\n                        <button type=\"button\" class=\"removeButton\" mat-raised-button \n                        color=\"warn\" (click)=\"removeItem(item.id)\">Remove</button>\n                    </span>\n                    <!-- <span class=\"margin-left\" fxFlex=\"30\" fxLayout=\"column\">\n                        <label>{{item.name}}</label>\n                        <label><span class=\"marginColor\">Size:</span>{{item.size}}</label>\n                        <label><span class=\"marginColor\">Category:</span> {{item.category}}</label>\n                        <label><span class=\"marginColor\">Price:</span>{{item.price}}</label>\n                        <label><span class=\"marginColor\">Quantity:</span>{{item.quantity}}</label>\n                        <label><span class=\"marginColor\">Sub Total:</span>{{item.price * item.quantity}}</label>\n                        <button type=\"button\" class=\"removeButton\" mat-raised-button \n                        color=\"warn\" (click)=\"removeItem(item.id)\">Remove</button>\n                    </span> -->\n                    <span class=\"margin-left\" fxFlex=\"30\" fxLayout=\"column\">\n                        <!-- <label>{{item.name}}</label> -->\n                        <label class=\"marginColor1\">{{item.size}}</label>\n                        <!-- <label class=\"marginColor1\"> {{item.category}}</label> -->\n                        <label class=\"marginColor1\">{{item.price}}</label>\n                        <label class=\"marginColor1\">{{item.quantity}}</label>\n                        <label class=\"marginColor1\">{{item.price * item.quantity}}</label>\n                        <!-- <button type=\"button\" class=\"removeButton\" mat-raised-button \n                        color=\"warn\" (click)=\"removeItem(item.id)\">Remove</button> -->\n                    </span>\n                </span>\n                \n                <!-- <label>{{item.price}}</label>\n                <label>{{item.quantity}}</label>\n                <label>{{item.price * item.quantity}}</label> -->\n                <!-- <label fxFlex=\"15\">{{item.price}}</label>\n                <label fxFlex=\"15\">{{item.quantity}}</label>\n                <label fxFlex=\"15\">{{item.price * item.quantity}}</label> -->\n                            \n            </div>\n            <div fxLayout=\"column\" class=\"button-style\">\n                <button mat-raised-button fxFlex=\"25\" class=\"continueShopping\"  [routerLink]=\"['/home']\">Continue Shopping</button>\n                <button mat-raised-button fxFlex=\"25\" class=\"removeItems\" *ngIf=\"items.length > 0\" (click)=\"removeItems()\">Remove Items</button>\n            </div>\n            <div fxFlex=\"50\" class=\"formClass\">\n                </div>\n        </mat-card>\n        \n\n    </div>\n    <app-footer></app-footer>\n\n  <!-- <router-outlet></router-outlet> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/color/color.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/color/color.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsColorColorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <div class=\"pagePath\">\n        RightWay<span class=\"sign\">></span>Add Color\n    </div>\n    <div class=\"productPage\" *ngIf=\"!isMobileScreen\">\n        <!-- <div fxLayout=\"row\">\n            <a id=\"right\">Right Way</a>\n            <label class=\"prodLabel\">{{im.description}}</label>\n        </div> -->\n        <mat-card fxLayout=\"row\">\n            <div fxFlex=\"50\">\n                <img class=\"img\" src=\"{{imageLink}}\">\n            </div>\n            <div fxFlex=\"50\" class=\"formClass\">\n                <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"addColor(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n                <h4>Add Color</h4>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Color</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.color\" formControlName=\"color\" required>\n                        <mat-error *ngIf=\"fg.get('color').hasError('required')\">Enter Color</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Description</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.description\" formControlName=\"description\" required>\n                        <mat-error *ngIf=\"fg.get('description').hasError('required')\">Enter Description</mat-error>\n                    </mat-form-field>\n                    <div fxLayout=\"row\">\n                        <button mat-raised-button class=\"addCategoryButton\" type=\"submit\" [disabled]=\"fg.invalid\">Add Color</button>\n                        <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/home']\">Cancel</button>\n                    </div>\n                </form>\n                </div>\n        </mat-card>\n    </div>\n    <div class=\"productPage\" *ngIf=\"isMobileScreen\">\n        <!-- <div fxLayout=\"row\">\n            <a id=\"right\">Right Way</a>\n            <label class=\"prodLabel\">{{im.description}}</label>\n        </div> -->\n        <mat-card fxLayout=\"column\">\n            <div fxFlex=\"50\">\n                <img class=\"img\" src=\"{{imageLink}}\">\n            </div>\n            <div fxFlex=\"50\" class=\"formClass\">\n                <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"addColor(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n                <h4>Add Color</h4>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Color</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.color\" formControlName=\"color\" required>\n                        <mat-error *ngIf=\"fg.get('color').hasError('required')\">Enter Color</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Description</mat-label>\n                        <input matInput [placeholder]=\"componentLabels.description\" formControlName=\"description\" required>\n                        <mat-error *ngIf=\"fg.get('description').hasError('required')\">Enter Description</mat-error>\n                    </mat-form-field>\n                    <div fxLayout=\"row\">\n                        <button mat-raised-button class=\"addCategoryButton\" type=\"submit\" [disabled]=\"fg.invalid\">Add Color</button>\n                        <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/home']\">Cancel</button>\n                    </div>\n                </form>\n                </div>\n        </mat-card>\n    </div>\n    <app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/contact-us/contact-us.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/contact-us/contact-us.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>Contact Us\n</div>\n<div class=\"contact\" *ngIf=\"isMobileScreen\">\n    \n    <div class=\"contactHeading\">CONTACT RIGHTWAY</div>\n    <mat-card class=\"contactMatcard\"> \n        <div class=\"labelMargin marginBottom\">\n            <label>EMAIL US</label>\n        </div>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon>mail_outline</mat-icon>\n            <span>alijawad1119@gmail.com</span>\n        </span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon>mail_outline</mat-icon>\n            <span>alijawad1119@yahoo.com</span>\n        </span>\n                    \n        <div class=\"labelMargin marginBottom\">\n            <label>OUR WHATSAPP</label>\n        </div>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon>perm_phone_msg</mat-icon>\n            <span>03216808487</span>\n        </span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon>perm_phone_msg</mat-icon>\n            <span>03227540906</span>\n        </span>\n                    \n        <div class=\"labelMargin marginBottom\">\n            <label>SOCIAL SITES</label>\n        </div>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <a href=\"https://www.twitter.com/\">\n                <img matTooltip=\"Twitter\" class=\"imgIcon\" \n                src=\"assets/twitter3.webp\">\n            </a>\n            <a href=\"https://www.facebook.com/\">\n                <img matTooltip=\"Facebook\" class=\"imgIcon\" \n                src=\"assets/facebook4.webp\">\n            </a>\n            <a href=\"https://www.instagram.com/\">\n                <img matTooltip=\"Instagram\" class=\"imgIcon\" \n                src=\"assets/insta1.png\">\n            </a>\n        </span>\n    </mat-card>\n</div>\n\n<div class=\"contact\" *ngIf=\"!isMobileScreen\">\n    <div class=\"contactHeading\">CONTACT US</div>\n        <mat-card class=\"contactMatcard\" fxLayout=\"row\"> \n            <span fxFlex=\"50\" class=\"imageMatCard\">\n                <img class=\"imgSlider\" src={{image}}>\n                <!-- <div class=\"sliderText\">\n                    <h2>LAWN KURTA</h2>\n                </div> -->\n            </span>\n            <div fxLayout=\"column\" fxFlex=\"50\">\n                <label> EMAIL US</label>\n                <span fxLayout=\"row\" class=\"setMargin\">\n                    <mat-icon>mail_outline</mat-icon>\n                    <span>alijawad1119@gmail.com</span>\n                </span>\n                <span fxLayout=\"row\" class=\"setMargin\">\n                    <mat-icon>mail_outline</mat-icon>\n                    <span>alijawad1119@yahoo.com</span>\n                </span>\n                    \n                <label class=\"labelMargin\">OUR WHATSAPP</label>\n                    <span fxLayout=\"row\" class=\"setMargin\">\n                        <mat-icon>perm_phone_msg</mat-icon>\n                        <span>03216808487</span>\n                    </span>\n                    <span fxLayout=\"row\" class=\"setMargin\">\n                        <mat-icon>perm_phone_msg</mat-icon>\n                        <span>03227540906</span>\n                    </span>\n                    \n                <label class=\"labelMargin\">SOCIAL SITES</label>\n                    <span fxLayout=\"row\" class=\"setMargin\">\n                        <a href=\"https://www.twitter.com/\">\n                            <img matTooltip=\"Twitter\" class=\"imgIcon\" \n                            src=\"assets/twitter3.webp\">\n                        </a>\n                        <a href=\"https://www.facebook.com/\">\n                            <img matTooltip=\"Facebook\" class=\"imgIcon\" \n                            src=\"assets/facebook4.webp\">\n                        </a>\n                        <a href=\"https://www.instagram.com/\">\n                            <img matTooltip=\"Instagram\" class=\"imgIcon\" \n                            src=\"assets/insta1.png\">\n                        </a>\n                    </span>\n            </div>\n        </mat-card>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/footer/footer.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/footer/footer.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div fxLayout=\"row\" class=\"footer\" *ngIf=\"!isMobileScreen\">\n    <span fxLayout=\"column\" fxFlex=\"38\">\n        <span class=\"labelHeading\">Get in Touch</span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon style=\"margin-right: 10px;\">mail_outline</mat-icon>\n            <span>alijawad1119@gmail.com</span>\n        </span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon style=\"margin-right: 10px;\">perm_phone_msg</mat-icon>\n            <span>+923216808487</span>\n        </span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <a href=\"https://www.twitter.com/\">\n                <img matTooltip=\"Twitter\" class=\"imgIcon\" \n                src=\"assets/twitter3.webp\">\n            </a>\n            <a href=\"https://www.facebook.com/\">\n                <img matTooltip=\"Facebook\" class=\"imgIcon\" \n                src=\"assets/facebook4.webp\">\n            </a>\n            <a href=\"https://www.instagram.com/\">\n                <img matTooltip=\"Instagram\" class=\"imgIcon\" \n                src=\"assets/insta1.png\">\n            </a>\n        </span>\n    </span>  \n    <span fxLayout=\"column\" fxFlex=\"31\">\n        <span class=\"labelHeading\">Right Way</span>\n        <label [routerLink]=\"['/about-us']\">About Us</label>\n        <label [routerLink]=\"['/contact-us']\">Contact Us</label>\n        <label >Careers at RightWay</label>\n    </span>  \n    <span fxLayout=\"column\" fxFlex=\"31\">\n        <span class=\"labelHeading\">Customer Support</span>\n        <label >Return or Exchange</label>\n        <label >Track Order</label>\n        <label >Privacy Policy</label>\n        <label >Terms & Conditions</label>\n    </span>  \n</div>\n\n<div fxLayout=\"column\" class=\"footer\" *ngIf=\"isMobileScreen\">\n    <!-- <span fxLayout=\"column\" fxFlex=\"20\"> -->\n        <span class=\"labelHeading\">Get in Touch</span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon style=\"margin-right: 10px;\">mail_outline</mat-icon>\n            <span>alijawad1119@gmail.com</span>\n        </span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <mat-icon style=\"margin-right: 10px;\">perm_phone_msg</mat-icon>\n            <span>+923216808487</span>\n        </span>\n        <span fxLayout=\"row\" class=\"setMargin\">\n            <a href=\"https://www.twitter.com/\">\n                <img matTooltip=\"Twitter\" class=\"imgIcon\" \n                src=\"assets/twitter3.webp\">\n            </a>\n            <a href=\"https://www.facebook.com/\">\n                <img matTooltip=\"Facebook\" class=\"imgIcon\" \n                src=\"assets/facebook4.webp\">\n            </a>\n            <a href=\"https://www.instagram.com/\">\n                <img matTooltip=\"Instagram\" class=\"imgIcon\" \n                src=\"assets/insta1.png\">\n            </a>\n        </span>\n    <!-- </span>  \n    <span fxLayout=\"column\" fxFlex=\"20\"> -->\n        <span class=\"labelHeading\">Right Way</span>\n        <label [routerLink]=\"['/about-us']\">About Us</label>\n        <label [routerLink]=\"['/contact-us']\">Contact Us</label>\n        <label >Careers at RightWay</label>\n    <!-- </span>  \n    <span fxLayout=\"column\" fxFlex=\"20\"> -->\n        <span class=\"labelHeading\">Customer Support</span>\n        <label >Return or Exchange</label>\n        <label >Track Order</label>\n        <label >Privacy Policy</label>\n        <label >Terms & Conditions</label>\n        <span style=\"margin-bottom: 50px;\"></span>\n    <!-- </span>   -->\n</div>\n      \n    <!-- <button mat-button routerLink=\"/\">Home</button>  \n    <button mat-button routerLink=\"/about\">About</button>\n    <router-outlet></router-outlet> -->\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/home/home.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/home/home.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div > -->\n    <!-- <mat-toolbar color=\"primary\" class=\"matCard\">\n        <span fxLayout=\"row\" fxFlex=\"90\" class=\"matCardButtons\">\n        <h1 class=\"matHeading\">  Right Way  </h1>  \n        <button mat-button routerLink=\"/\">Sales</button>  \n        <button mat-button routerLink=\"/about\">Winter Collection</button>\n        <button mat-button routerLink=\"/about\">New Designs</button>\n        <button mat-button routerLink=\"/about\">UnStitched</button>\n        <button mat-button routerLink=\"/about\">Stitched</button>\n        </span>\n        <span fxFlex=\"15\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <mat-icon>account_circle</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item routerLink=\"/login\">\n                  <span>Login</span>\n                </button>\n                <button mat-menu-item routerLink=\"/register\">\n                  <span>Sign Up</span>\n                </button>\n              </mat-menu>\n              <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n                <mat-icon>shopping_cart</mat-icon>\n              </button>\n              \n        </span>\n    </mat-toolbar> -->\n    <div class=\"pagePath\">\n      RightWay<span class=\"sign\">></span>{{page}}\n  </div>\n<mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth<600\">\n  <span fxLayout=\"row\">\n    <mat-card class=\"sliderMatCard\">\n        <img class=\"imgSlider\" fxFlex=\"100\" src={{image}}>\n            <div class=\"sliderText\">\n                <h1 class=\"offHeading\">UP TO 20% OFF</h1>\n                <p>\n                    <!-- This kurta is designed by right way. -->\n                </p>\n            </div>\n    </mat-card>\n  </span>\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\" *ngFor=\"let prod of imageInterval; let j = index\">\n        <mat-card class=\"homeMatCard\" fxFlex=\"100\">\n          <mat-card class=\"imgOverflow\">\n            <img class=\"img\" src=\"{{prod.url}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <!-- <div class=\"hoverTextbox\">\n              <h2>{{prod.name}}</h2>\n              <p>\n                  This kurta is designed by right way.\n              </p>\n            </div> -->\n            <div class=\"sliderText\">\n              <h1 class=\"offHeading\">{{prod.discount}}% OFF</h1>\n            </div>\n          </mat-card>\n\n            <div class=\"middle\">\n                <div class=\"text\">{{prod.name}}</div>\n                <P class=\"paragraph\">{{prod.description}}</P>\n                  <label class=\"label\">SHOP NOW</label>\n            </div>\n        </mat-card>\n    </div>\n</mat-card>\n<mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth>=600 && innerWidth<750\">\n  <span *ngFor=\"let product of imageInterval1; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-card class=\"homeMatCard\" *ngFor=\"let prod of product; let j = index\" fxFlex=\"50\">\n          <mat-card class=\"imgOverflow\">\n            <img class=\"img\" src=\"{{prod.url}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <!-- <div class=\"hoverTextbox\">\n              <h2>{{prod.name}}</h2>\n              <p>\n                  This kurta is designed by right way.\n              </p>\n            </div> -->\n            <div class=\"sliderText\">\n              <h1 class=\"offHeading\">{{prod.discount}}% OFF</h1>\n            </div>\n          </mat-card>\n          <div class=\"middle\">\n            <div class=\"text\">{{prod.name}}</div>\n            <P class=\"paragraph\">{{prod.description}}</P>\n            <label class=\"label\">SHOP NOW</label>\n          </div>\n        </mat-card>\n    </div>\n  </span>\n</mat-card>\n<mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth>=750\">\n  <span *ngFor=\"let product of imageInterval2; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-card class=\"homeMatCard\" *ngFor=\"let prod of product; let j = index\" fxFlex=\"33\">\n          <mat-card class=\"imgOverflow\">\n            <img class=\"img\" src=\"{{prod.url}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <!-- <div class=\"hoverTextbox\">\n              <h2>{{prod.name}}</h2>\n              <p>\n                  This kurta is designed by right way.\n              </p>\n            </div> -->\n            <div class=\"sliderText\">\n              <h1 class=\"offHeading\">{{prod.discount}}% OFF</h1>\n            </div>\n          </mat-card>\n          <div class=\"middle\">\n            <div class=\"text\">{{prod.name}}</div>\n            <P class=\"paragraph\">{{prod.description}}</P>\n            <label class=\"label\">SHOP NOW</label>\n          </div>\n        </mat-card>\n    </div>\n  </span>\n</mat-card>\n  <app-footer></app-footer>\n<!-- <mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth>=600 && innerWidth<992\">\n    <span *ngFor=\"let product of products; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-card class=\"homeMatCard\" *ngFor=\"let prod of product; let j = index\" fxFlex=\"31.5\">\n            <img class=\"img\" src=\"{{prod.name}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <div class=\"middle\">\n                <div class=\"text\">{{products.length}}</div>\n            </div>\n        </mat-card>\n    </div>\n  </span>\n</mat-card> -->\n    \n<!-- <mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth>991\">\n    <span *ngFor=\"let product of products; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-card class=\"homeMatCard\" *ngFor=\"let prod of product; let j = index\" fxFlex=\"31.5\">\n            <img class=\"img\" src=\"{{prod.name}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <div class=\"middle\">\n                <div class=\"text\">John Doe</div>\n            </div>\n        </mat-card>\n    </div>\n  </span>\n</mat-card> -->\n\n<!-- <html>\n    <link href=\"https://fonts.googleapis.com/css?family=Playfair+Display&display=swap\" rel=\"stylesheet\">\n    <div class=\"image\">\n        <div class=\"heading\">\n            <p id=\"awesome\">Building Something Awesome</p>\n            <h1>Coming Soon!</h1>\n            <hr>\n            <p id=\"timer\"></p>\n            <form novalidate [formGroup]=\"fg\" fxLayout=\"row\" fxLayoutGap=\"10px\" (ngSubmit)=\"onSave(fg.value)\">\n\n            <mat-form-field fxFlex=\"70%\">\n                <input class=\"emailInput\" matInput placeholder=\"Get Notify by Email\" formControlName=\"email\" required>\n                <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n                <mat-error *ngIf=\"fg.get('email').hasError('required')\">Enter Email</mat-error>\n              </mat-form-field>\n              <button fxFlex=\"30%\" class=\"saveButton\" type=\"submit\" [disabled]=\"fg.invalid\" mat-raised-button color=\"primary\">Notify Me!</button>\n            </form>\n        </div>\n    </div>\n</html> -->\n\n  <!-- <router-outlet></router-outlet> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/login/login.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/login/login.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div fxLayout=\"column\"> -->\n<!-- <mat-toolbar color=\"primary\" class=\"matCard\">\n    <span fxLayout=\"row\" fxFlex=\"90\" class=\"matCardButtons\">\n    <h1 class=\"matHeading\">  Right Way  </h1>  \n    <button mat-button routerLink=\"/\">Sales</button>  \n    <button mat-button routerLink=\"/about\">Winter Collection</button>\n    <button mat-button routerLink=\"/about\">New Designs</button>\n    <button mat-button routerLink=\"/about\">UnStitched</button>\n    <button mat-button routerLink=\"/about\">Stitched</button>\n    </span>\n    <span fxFlex=\"15\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n            <mat-icon>account_circle</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item routerLink=\"/login\">\n              <span>Login</span>\n            </button>\n            <button mat-menu-item routerLink=\"/register\">\n              <span>Sign Up</span>\n            </button>\n          </mat-menu>\n          <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n            <mat-icon>shopping_cart</mat-icon>\n          </button>\n          \n    </span>\n</mat-toolbar> -->\n\n\n\n<div class=\"image\">\n  <div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>Login\n</div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <div fxFlex=\"{{flexSize}}\" class=\"login-form\">\n          <mat-card class=\"example-card\" >\n              <mat-card-header>\n                <mat-card-title>Login Form</mat-card-title>\n              </mat-card-header>\n              <mat-card-content>\n                  <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"onSave(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n\n                      <mat-form-field>\n                          <input class=\"emailInput\" matInput [placeholder]=\"componentLabels.email\" formControlName=\"email\" required>\n                          <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n                          <mat-error *ngIf=\"fg.get('email').hasError('required')\">Enter Email</mat-error>\n                      </mat-form-field>\n                      <mat-form-field>\n                          <input type=\"password\" class=\"passwordInput\" matInput [placeholder]=\"componentLabels.password\" formControlName=\"password\" required>\n                          <mat-error *ngIf=\"fg.get('password').hasError('required')\">Enter Email</mat-error>\n                      </mat-form-field>\n                      <div fxLayout=\"row\">\n                          <button class=\"saveButton\" mat-raised-button type=\"submit\" [disabled]=\"fg.invalid\">Login</button>\n                          <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/register']\">Create New Account</button>\n              \n                        </div>\n                        <!-- <label class=\"label\" [routerLink]=\"['/forgotPassword']\">Forgot Password?</label> -->\n                        <label class=\"label\" [routerLink]=\"['/home']\">Return to Store</label>\n                  </form>\n              </mat-card-content>\n            </mat-card>\n          </div>\n  </div>\n  <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"isMobileScreen\">\n          <div fxFlex=\"80\" class=\"login-form\">\n          <mat-card class=\"example-card\" >\n              <mat-card-header>\n                <mat-card-title>Login Form</mat-card-title>\n              </mat-card-header>\n              <mat-card-content>\n                  <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"onSave(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n\n                      <mat-form-field>\n                          <input class=\"emailInput\" matInput [placeholder]=\"componentLabels.email\" formControlName=\"email\" required>\n                          <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n                          <mat-error *ngIf=\"fg.get('email').hasError('required')\">Enter Email</mat-error>\n                      </mat-form-field>\n                      <mat-form-field>\n                          <input type=\"password\" class=\"passwordInput\" matInput [placeholder]=\"componentLabels.password\" formControlName=\"password\" required>\n                          <mat-error *ngIf=\"fg.get('password').hasError('required')\">Enter Email</mat-error>\n                      </mat-form-field>\n                      <div fxLayout=\"row\">\n                          <button class=\"saveButton\" mat-raised-button type=\"submit\" [disabled]=\"fg.invalid\">Login</button>\n                          <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/register']\">Create New Account</button>\n              \n                        </div>\n                        <label class=\"label\" [routerLink]=\"['/home']\">Return to Store</label>\n                  </form>\n              </mat-card-content>\n            </mat-card>\n          </div>\n  </div> -->\n</div>\n<!-- <app-footer></app-footer> -->\n<!-- <div class=\"login\">\n    <h1>Login Form</h1>\n    <div fxLayout=\"row\">\n    <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"onSave(fg.value)\" fxLayout=\"column\" fxFlex=\"50\" fxLayoutGap=\"20px\">\n        <mat-form-field>\n            <input matInput [placeholder]=\"componentLabels.email\" formControlName=\"email\" required>\n            <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n            <mat-error *ngIf=\"fg.get('email').hasError('required')\">Enter Email</mat-error>\n            <mat-error *ngIf=\"fg.get('email').hasError('maxLength')\">Email is too long</mat-error>\n          </mat-form-field>\n        <mat-form-field>\n            <input type=\"password\" matInput [placeholder]=\"componentLabels.password\" formControlName=\"password\" required>\n            <mat-error *ngIf=\"fg.get('password').hasError('minLength')\">Atleast six Characters Required</mat-error>\n            <mat-error *ngIf=\"fg.get('password').hasError('required')\">Enter Password</mat-error>\n          </mat-form-field>\n\n          <div fxLayout=\"row\">\n            <button class=\"saveButton\" mat-raised-button type=\"submit\" [disabled]=\"fg.invalid\">Login</button>\n            <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/register']\">Create New Account</button>\n\n          </div>\n          <label class=\"label\" [routerLink]=\"['/forgotPassword']\">Forgot Password?</label>\n          <label class=\"label\" [routerLink]=\"['/home']\">Return to Store</label>\n    </form>\n</div>\n</div> -->\n<!-- </div> -->\n    <!-- <router-outlet></router-outlet> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/main-nav/main-nav.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/main-nav/main-nav.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsMainNavMainNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"false\"\n      [attr.role]=\"'main'\"\n      [mode]=\"'over'\">\n\n    <mat-toolbar class=\"sideNav-toolbar\">Right Way</mat-toolbar>\n    <mat-nav-list class=\"nav-list\">\n      <a mat-list-item (click)=\"drawer.toggle()\" routerLink=\"/newArrival\">New Arrival</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" routerLink=\"/sale\">Sale Items</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" routerLink=\"/unstitch\">UnStitched</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" routerLink=\"/summerCollection\">Summer Collection</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" *ngIf=\"isSuperUser\" routerLink=\"/addColor\">Add Color</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" *ngIf=\"isSuperUser\" routerLink=\"/addCategory\">Add Category</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" *ngIf=\"isSuperUser\" routerLink=\"/addProduct\">Add Product</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" *ngIf=\"isSuperUser\" routerLink=\"/orders\">Orders</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" *ngIf=\"isSuperUser\" routerLink=\"/products\">Products</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" routerLink=\"/contact-us\">Contact Us</a>\n      <a mat-list-item (click)=\"drawer.toggle()\" routerLink=\"/about-us\">About</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <!-- <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item  routerLink=\"/about\">Link 1</a>\n      <a mat-list-item  routerLink=\"/about\">Link 2</a>\n      <a mat-list-item  routerLink=\"/about\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav> -->\n  <mat-sidenav-content>\n\n    <div class=\"topToolbar\">\n        <span fxLayout=\"row\" class=\"topToolbarButtons\">\n          <p fxFlex=\"100\"class=\"topToolbarHeading\">  Due to coronavirus emergency and lockdown situation,\n             please expect some delay in your online order delieveries. Stay Safe. Stay Healthy.  </p>  \n        </span>\n      </div>\n\n    <mat-toolbar color=\"primary\" class=\"toolbar\" *ngIf=\"!isMobileScreen\">\n      <span fxLayout=\"row\" fxFlex=\"85\">\n        <button type=\"button\" aria-label=\"Toggle sidenav\"\n          mat-icon-button (click)=\"drawer.toggle()\">\n          <mat-icon aria-label=\"Side nav toggle icon\" class=\"menu-icon\">menu</mat-icon>\n        </button>\n        <!-- <button type=\"button\" aria-label=\"Toggle sidenav\"\n          mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"isHandset$ | async\">\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n        </button> -->\n\n        <span fxLayout=\"row\" class=\"toolbarButtons\" *ngIf=\"innerWidth > 850\">\n          <h1 class=\"toolbarHeading\" routerLink=\"/home\">  Right Way  </h1>  \n          <!-- <span routerLink=\"/\">Sales</span>   -->\n          <button mat-button routerLink=\"/sale\">Sale</button>\n          <button mat-button routerLink=\"/summerCollection\">Summer Collection</button>\n          <button mat-button routerLink=\"/newArrival\">New Arrival</button>\n          <button mat-button routerLink=\"/unstitch\">UnStitched</button>\n          <button mat-button routerLink=\"/about-us\">About</button>\n        </span>\n        <span fxLayout=\"row\" class=\"toolbarButtons\" *ngIf=\"innerWidth < 851\">\n          <h1 class=\"toolbarHeading\" routerLink=\"/home\">  Right Way  </h1>  \n          <button mat-button routerLink=\"/sale\">Sale</button>  \n          <button mat-button routerLink=\"/summerCollection\">Summer</button>\n        </span>\n      </span>\n      <span fxFlex=\"15\" fxLayout=\"row\" fxFlexAlign=\"end\" fxLayoutGap=\"5px\" class=\"left-icons\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n              <mat-icon>account_circle</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item *ngIf=\"!user\" routerLink=\"/login\">\n                <mat-icon>account_box</mat-icon>\n                <span>Login</span>\n              </button>\n              <button mat-menu-item *ngIf=\"user\" (click)=\"logOut()\" routerLink=\"/home\">\n                <mat-icon>account_box</mat-icon>\n                <span>Log Out</span>\n              </button>\n              <button mat-menu-item *ngIf=\"!user\" routerLink=\"/register\">\n                <mat-icon>supervisor_account</mat-icon>\n                <span>Sign Up</span>\n              </button>\n            </mat-menu>\n            <!-- <button mat-icon-button aria-label=\"Example icon-button with a menu\" *ngIf=\"products == 0\">\n              <mat-icon matBadge=\"\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\n            </button> -->\n            <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n              <mat-icon matBadge=\"{{itemsInCart}}\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\n            </button>\n      </span>\n  </mat-toolbar>\n\n    <mat-toolbar color=\"primary\" class=\"toolbar\" *ngIf=\"isMobileScreen\">\n      <span fxLayout=\"row\" fxFlex=\"80\">\n        <button type=\"button\" aria-label=\"Toggle sidenav\"\n          mat-icon-button (click)=\"drawer.toggle()\">\n          <mat-icon aria-label=\"Side nav toggle icon\" class=\"menu-icon\">menu</mat-icon>\n        </button>\n\n        <span fxLayout=\"row\" class=\"toolbarButtons\">\n          <h1 class=\"toolbarHeading\" routerLink=\"/home\">  Right Way  </h1>  \n        </span>\n      </span>\n      <span fxLayout=\"row\" fxFlex=\"20\" fxFlexAlign=\"end\" class=\"left-icons\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n              <mat-icon>account_circle</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item *ngIf=\"!user\" routerLink=\"/login\">\n                <mat-icon>account_box</mat-icon>\n                <span>Login</span>\n              </button>\n              <button mat-menu-item *ngIf=\"user\" (click)=\"logOut()\" routerLink=\"/home\">\n                <mat-icon>account_box</mat-icon>\n                <span>Log Out</span>\n              </button>\n              <button mat-menu-item *ngIf=\"!user\" routerLink=\"/register\">\n                <mat-icon>supervisor_account</mat-icon>\n                <span>Sign Up</span>\n              </button>\n            </mat-menu>\n            <!-- <button mat-icon-button aria-label=\"Example icon-button with a menu\" *ngIf=\"products == 0\">\n              <mat-icon matBadge=\"\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\n            </button> -->\n            <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n              <mat-icon matBadge=\"{{itemsInCart}}\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\n            </button>\n            \n      </span>\n  </mat-toolbar>\n    \n\n\n    <!-- Add Content Here -->\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/order/form/order-form.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/order/form/order-form.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsOrderFormOrderFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>Orders<span class=\"sign\">></span>View\n</div>\n<mat-card class=\"viewMatcard\" *ngIf=\"loaded\">\n    <mat-card-title class=\"orderHeading\">Order Detail</mat-card-title>\n    <mat-divider></mat-divider>\n    <mat-list>\n        <div fxLayout=\"row\">\n            <mat-list-item fxFlex=\"25\">\n                <label>Customer Name</label>\n            </mat-list-item>\n            <mat-list-item fxFlex=\"75\">\n                <label>{{orderModel.customer.fname}} {{orderModel.customer.lname}}</label>\n            </mat-list-item>\n        </div>\n        <mat-divider></mat-divider>\n        <div fxLayout=\"row\">\n            <mat-list-item fxFlex=\"25\">\n                <label>Amount</label>\n            </mat-list-item>\n            <mat-list-item fxFlex=\"75\">\n                <label>{{orderModel.amount}}</label>\n            </mat-list-item>\n        </div>\n        <mat-divider></mat-divider>\n        <div fxLayout=\"row\">\n            <mat-list-item fxFlex=\"25\">\n                <label>Order Status</label>\n            </mat-list-item>\n            <mat-list-item fxFlex=\"75\">\n                <label>{{orderModel.status}}</label>\n            </mat-list-item>\n        </div>\n        <mat-divider></mat-divider>\n        <div fxLayout=\"row\">\n            <mat-list-item fxFlex=\"25\">\n                <label>Track Id</label>\n            </mat-list-item>\n            <mat-list-item fxFlex=\"75\">\n                <label>{{orderModel.trackId}}</label>\n            </mat-list-item>\n        </div>\n        <mat-divider></mat-divider>\n        <div fxLayout=\"row\">\n            <mat-list-item fxFlex=\"25\">\n                <label>Address</label>\n            </mat-list-item>\n            <mat-list-item fxFlex=\"75\">\n                <label>{{orderModel.customer.address}}</label>\n            </mat-list-item>\n        </div>\n        <mat-divider style=\"padding-top: 10px;\"></mat-divider>\n    </mat-list>\n    <mat-card class=\"margin\">\n        <mat-card-title class=\"fontFamily\">Products Detail</mat-card-title>\n        <mat-accordion *ngFor=\"let product of orderModel.products\">\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title class=\"fontFamily\">\n                  {{product.name}}\n                </mat-panel-title>\n                <mat-panel-description *ngIf=\"!isMobileScreen\" class=\"fontFamily\">\n                  {{product.description}}\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <mat-list *ngIf=\"!isMobileScreen\">\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"30\">\n                        <label>Price</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"70\">\n                        <label>{{product.price}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"30\">\n                        <label>Product Code</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"70\">\n                        <label>{{product.code}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"30\">\n                        <label>Color</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"70\">\n                        <label>{{product.color.color}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"30\">\n                        <label>Size</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"70\">\n                        <label>{{product.size.size}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"30\">\n                        <label>Category</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"70\">\n                        <label>{{product.category.category}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"30\">\n                        <label>Discount</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"70\">\n                        <label>{{product.discount}}%</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"30\">\n                        <label>Quantity</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"70\">\n                        <label>{{product.quantity}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n              </mat-list>\n              <mat-list *ngIf=\"isMobileScreen\">\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"50\">\n                        <label>Price</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"50\">\n                        <label>{{product.price}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"50\">\n                        <label>Product Code</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"50\">\n                        <label>{{product.code}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"50\">\n                        <label>Color</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"50\">\n                        <label>{{product.color.color}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"50\">\n                        <label>Size</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"50\">\n                        <label>{{product.size.size}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"50\">\n                        <label>Category</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"50\">\n                        <label>{{product.category.category}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"50\">\n                        <label>Discount</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"50\">\n                        <label>{{product.discount}}%</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout=\"row\">\n                    <mat-list-item fxFlex=\"50\">\n                        <label>Quantity</label>\n                    </mat-list-item>\n                    <mat-list-item fxFlex=\"50\">\n                        <label>{{product.quantity}}</label>\n                    </mat-list-item>\n                </div>\n                <mat-divider></mat-divider>\n              </mat-list>\n            </mat-expansion-panel>\n            <!-- <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                 (closed)=\"panelOpenState = false\">\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Self aware panel\n                </mat-panel-title>\n                <mat-panel-description>\n                  Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <p>I'm visible because I am open</p>\n            </mat-expansion-panel> -->\n          </mat-accordion>\n    </mat-card>\n\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/order/list/order-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/order/list/order-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsOrderListOrderListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div *ifPermitted=\"'educationLevels.index'\"> -->\n  <!-- <shared-page-loader *ngIf=\"!loaded\"> </shared-page-loader> -->\n\n  <div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>Orders\n</div>\n  <div class=\"ordersCard\" *ngIf=\"loaded\">\n    <label class=\"orderHeading\">Orders List</label>\n      <div>\n          <mat-form-field fxFlex class=\"dgSearchBar\">\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n          </mat-form-field>\n      </div>\n\n      <mat-table class=\"matTable\" #table [dataSource]=\"dataSource\" matSort (matSortChange)=\"sortData()\" matSortDisableClear *ngIf=\"!isMobileScreen\">\n\n          <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['name']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"mobileNumber\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['mobileNumber']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.mobileNumber}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"amount\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['amount']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.amount}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"status\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['status']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.status}} </mat-cell>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"options\">\n              <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" class=\"options\">\n                  <a [routerLink]=\"['/orders/view', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"View\" class=\"viewIcon\">visibility</mat-icon>\n                  </a>\n                  <a [routerLink]=\"['/orders/update', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"Edit\" class=\"editIcon\">edit</mat-icon>\n                  </a>\n                  <!-- <a mat-icon-button (click)=\"delete(element.id)\" matTooltip=\"Delete\">\n                      <mat-icon class=\"delete-icon\">delete</mat-icon>\n                  </a> -->\n              </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row class=\"hover-effect\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n      <mat-table class=\"matTable\" #table [dataSource]=\"dataSource\" matSort (matSortChange)=\"sortData()\" matSortDisableClear *ngIf=\"isMobileScreen\">\n\n          <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['name']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"amount\">\n              <mat-header-cell class=\"amountColumn\" *matHeaderCellDef mat-sort-header> {{attrLabels['amount']}} </mat-header-cell>\n              <mat-cell class=\"amountColumn\" *matCellDef=\"let element\"> {{element.amount}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"options\">\n              <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" class=\"options\">\n                  <a [routerLink]=\"['/orders/view', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"View\" class=\"viewIcon\">visibility</mat-icon>\n                  </a>\n                  <a [routerLink]=\"['/orders/update', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"Edit\" class=\"editIcon\">edit</mat-icon>\n                  </a>\n                  <!-- <a mat-icon-button (click)=\"delete(element.id)\" matTooltip=\"Delete\">\n                      <mat-icon class=\"delete-icon\">delete</mat-icon>\n                  </a> -->\n              </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedMobileColumns\"></mat-header-row>\n          <mat-row class=\"hover-effect\" *matRowDef=\"let row; columns: displayedMobileColumns;\"></mat-row>\n      </mat-table>\n\n      <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\"></mat-paginator>\n\n  </div>\n  <!-- <div class=\"right-bottom-button\">\n      <a mat-fab color=\"primary\" [routerLink]=\"['/orders/create']\">\n          <mat-icon>add</mat-icon>\n      </a>\n  </div> -->\n<!-- </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/payment/payment.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/payment/payment.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsPaymentPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div > -->\n    <!-- <mat-spinner class=\"spinner\" *ngIf=\"!loaded\"></mat-spinner> -->\n    \n<div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>Home<span class=\"sign\">></span>Add To Cart\n    <span class=\"sign\">></span>Payment\n</div>\n<div fxLayout=\"column\" class=\"payment\" *ngIf=\"isMobileScreen\">\n    <span fxLayout=\"row\">\n        <mat-card class=\"homeMatCard\">\n            <img class=\"img\" fxFlex=\"100\" src=\"{{image}}\">\n                <!-- <div class=\"text\">\n                    <h2>LAWN KURTA</h2>\n                    <p>\n                        This kurta is designed by right way.\n                    </p>\n                </div> -->\n                <div class=\"sliderText\">\n                    <h1 class=\"offHeading\">UPTO 20% OFF</h1>\n                </div>\n        </mat-card>\n    </span>\n    <div class=\"shippingPage\" >\n        <mat-card class=\"formClass\" fxLayout=\"column\">\n            <span class=\"shippingLabel\">\n                <label>Payment Method</label>\n            </span>\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                 fxLayout=\"column\"\n                [(ngModel)]=\"methodChoosen\">\n                <mat-radio-button class=\"margin-radio-group\" *ngFor=\"let payMethod of paymentMethods\" [value]=\"payMethod.id\">\n                    {{payMethod.method}}\n                </mat-radio-button>\n            </mat-radio-group>\n            <span class=\"margin-radio-group\">\n                <label *ngIf=\"methodChoosen == 1\">\n                    You will Pay at the time of delivery.\n                </label>\n                <label *ngIf=\"methodChoosen == 2\">\n                    <span fxLayout=\"row\">\n                        <label fxFlex=\"40\">Account No.</label>\n                        <label fxFlex=\"40\">03216808487</label>\n                    </span> \n                    <span fxLayout=\"row\" style=\"margin-top:5px\">\n                        <label fxFlex=\"40\">Email Id</label>\n                        <label fxFlex=\"40\">rightWay@gmail.com</label>\n                    </span> \n                    <p>Send us an email with\n                        Transaction Id or Screenshot of Transaction.</p>\n                </label>\n                <label *ngIf=\"methodChoosen == 3\">\n                    <span fxLayout=\"row\">\n                        <label fxFlex=\"40\">Account No.</label>\n                        <label fxFlex=\"40\">03216808487</label>\n                    </span> \n                    <span fxLayout=\"row\" style=\"margin-top:5px\">\n                        <label fxFlex=\"40\">Email Id</label>\n                        <label fxFlex=\"40\">rightWay@gmail.com</label>\n                    </span> \n                    <p>Send us an email with\n                        Transaction Id or Screenshot of Transaction.</p>\n                </label>\n            </span>\n            <div fxLayout=\"row\">\n                <button mat-raised-button class=\"paymentButton\" type=\"submit\" (click)=\"confirmOrder()\" [disabled]=\"methodChoosen == 0\">Confirm Order</button>\n                <button class=\"cancelButton\" mat-raised-button (click)=\"cancelClick()\">Cancel</button>\n            </div>\n        </mat-card>\n        <mat-card fxLayout=\"column\" style=\"margin-top:20px\" class=\"amountCard\">\n            <label class=\"orderLabel\">Order Summary</label>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Total Amount</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{amount}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Name</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">{{customer.fname + ' ' + customer.lname}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Email</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">{{customer.email}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Mobile Number</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">{{customer.mobileNumber}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Address</label>\n                <label class=\"totalLabel\" fxFlex=\"60\">{{customer.address}}</label>\n            </span>\n            <div fxLayout=\"row\">\n                <button class=\"continueShoppingButton\" mat-raised-button (click)=\"cancelClick()\" \n                [routerLink]=\"['/home']\">Continue Shopping</button>\n            </div>\n        </mat-card>\n        <!-- <mat-card fxLayout=\"column\" style=\"margin-top:20px\" class=\"amountCard\">\n            <label class=\"orderLabel\">Your Information</label>\n        </mat-card> -->\n        \n    </div>\n</div>\n\n\n\n<div fxLayout=\"row\" class=\"payment\" *ngIf=\"!isMobileScreen\">\n    <span fxLayout=\"row\" fxFlex=\"50\">\n        <mat-card class=\"homeMatCard\">\n            <img class=\"img\" fxFlex=\"100\" src=\"{{image}}\">\n                <!-- <div class=\"text\">\n                    <h2>LAWN KURTA</h2>\n                    <p>\n                        This kurta is designed by right way.\n                    </p>\n                </div> -->\n                <div class=\"sliderText\">\n                    <h1 class=\"offHeading\">UPTO 20% OFF</h1>\n                </div>\n        </mat-card>\n    </span>\n    <div class=\"shippingPage\" fxFlex=\"50\">\n        <mat-card class=\"formClass\" fxLayout=\"column\">\n            <span class=\"shippingLabel\">\n                <label>Payment Method</label>\n            </span>\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                 fxLayout=\"column\"\n                [(ngModel)]=\"methodChoosen\">\n                <mat-radio-button class=\"margin-radio-group\" *ngFor=\"let payMethod of paymentMethods\" [value]=\"payMethod.id\">\n                    {{payMethod.method}}\n                </mat-radio-button>\n            </mat-radio-group>\n            <span class=\"margin-radio-group\">\n                <label *ngIf=\"methodChoosen == 1\">\n                    You will Pay at the time of delivery.\n                </label>\n                <label *ngIf=\"methodChoosen == 2\">\n                    <span fxLayout=\"row\">\n                        <label fxFlex=\"40\">Account Number.</label>\n                        <label fxFlex=\"40\">03216808487</label>\n                    </span> \n                    <span fxLayout=\"row\" style=\"margin-top:5px\">\n                        <label fxFlex=\"40\">Email Id.</label>\n                        <label fxFlex=\"40\">rightWay@gmail.com</label>\n                    </span> \n                    <p>Send us an email with\n                        Transaction Id or Screenshot of Transaction.</p>\n                </label>\n                <label *ngIf=\"methodChoosen == 3\">\n                    <span fxLayout=\"row\">\n                        <label fxFlex=\"30\">Account Number.</label>\n                        <label fxFlex=\"40\">03216808487</label>\n                    </span> \n                    <span fxLayout=\"row\" style=\"margin-top:5px\">\n                        <label fxFlex=\"30\">Email Id.</label>\n                        <label fxFlex=\"40\">rightWay@gmail.com</label>\n                    </span> \n                    <p>Send us an email with\n                        Transaction Id or Screenshot of Transaction.</p>\n                </label>\n            </span>\n            <div fxLayout=\"row\">\n                <button mat-raised-button class=\"paymentButton\" type=\"submit\" (click)=\"confirmOrder()\" [disabled]=\"methodChoosen == 0\">Confirm Order</button>\n                <button class=\"cancelButton\" mat-raised-button (click)=\"cancelClick()\">Cancel</button>\n            </div>\n        </mat-card>\n        <mat-card fxLayout=\"column\" style=\"margin-top:20px\" class=\"amountCard\">\n            <label class=\"orderLabel\">Order Summary</label>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Total Amount</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{amount}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Name</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">{{customer.fname + ' ' + customer.lname}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Email</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">{{customer.email}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Mobile Number</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">{{customer.mobileNumber}}</label>\n            </span>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Address</label>\n                <label class=\"totalLabel\" fxFlex=\"60\">{{customer.address}}</label>\n            </span>\n            <div fxLayout=\"row\">\n                <button class=\"continueShoppingButton\" mat-raised-button (click)=\"cancelClick()\" \n                [routerLink]=\"['/home']\">Continue Shopping</button>\n            </div>\n        </mat-card>\n        <!-- <mat-card fxLayout=\"column\" style=\"margin-top:20px\" class=\"amountCard\">\n            <label class=\"orderLabel\">Your Information</label>\n        </mat-card> -->\n        \n    </div>\n</div>\n<app-footer></app-footer>\n\n\n\n\n<!-- <span fxLayout=\"row\">\n        <mat-card class=\"homeMatCard\" *ngFor=\"let prod of imageObject; let j = index\">\n            <img class=\"img\" fxFlex=\"100\" src=\"{{prod.image}}\" [routerLink]=\"['/home/product', prod.id]\">\n                <div class=\"text\">\n                    <h2>LAWN KURTA</h2>\n                    <p>\n                        This kurta is designed by right way.\n                    </p>\n                </div>\n        </mat-card>\n    </span> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/product/product.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/product/product.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div > -->\n    <!-- <mat-spinner class=\"spinner\" *ngIf=\"!loaded\"></mat-spinner> -->\n    <!-- <mat-toolbar color=\"primary\" class=\"matCard\">\n        <span fxLayout=\"row\" fxFlex=\"90\" class=\"matCardButtons\">\n        <h1 class=\"matHeading\">  Right Way  </h1>  \n        <button mat-button routerLink=\"/\">Sales</button>  \n        <button mat-button routerLink=\"/about\">Winter Collection</button>\n        <button mat-button routerLink=\"/about\">New Designs</button>\n        <button mat-button routerLink=\"/about\">UnStitched</button>\n        <button mat-button routerLink=\"/about\">Stitched</button>\n        </span>\n        <span fxFlex=\"15\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <mat-icon>account_circle</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item routerLink=\"/login\">\n                  <span>Login</span>\n                </button>\n                <button mat-menu-item routerLink=\"/register\">\n                  <span>Sign Up</span>\n                </button>\n              </mat-menu>\n              <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n                <mat-icon>shopping_cart</mat-icon>\n              </button>\n              \n        </span>\n    </mat-toolbar> -->\n    \n    <!-- <div class=\"productPage\" fxLayout=\"row\">\n        <div fxFlex=\"50\">\n            <img class=\"img\" src=\"{{imageLink}}\">\n        </div>\n        <div fxFlex=\"50\">\n            <div fxLayout=\"column\">\n\n            </div>\n        </div>\n    </div> -->\n    <div class=\"pagePath\">\n        RightWay<span class=\"sign\">></span>Home<span class=\"sign\">></span>Product\n    </div>\n    <div class=\"productPage\" *ngIf=\"isMobileScreen\">\n        <!-- <div fxLayout=\"row\">\n            <a id=\"right\">Right Way</a>\n            <label class=\"prodLabel\">{{obj.description}}</label>\n        </div> -->\n        <mat-card fxLayout=\"column\" class=\"matcard\">\n            <mat-card fxFlex=\"100\" class=\"imageMatCard\">\n                <img class=\"img\" src=\"{{image}}\">\n                <!-- <div class=\"text\">\n                    <h2>{{obj.name}}</h2>\n                    <p>\n                        This kurta is designed by right way.\n                    </p>\n                </div> -->\n                <div class=\"sliderText\">\n                    <h1 class=\"offHeading\">{{obj.discount}}% OFF</h1>\n                </div>\n            </mat-card>\n            <div fxFlex=\"100\">\n                <div fxLayout=\"column\" class=\"descriptionClass\">\n                    <h3>{{obj.name}}</h3>\n                    <h4 >{{stockAvailability}}</h4>\n                    <div fxLayout=\"row\" class=\"pkr\" *ngIf=\"obj.price != obj.discountedPrice\">\n                        <label>PKR</label>\n                        <label class=\"PKRHeading\">{{obj.discountedPrice}}</label>\n                        <label><span class=\"PKRHeadingLine\">{{obj.price}}</span>({{obj.discount}}% Off)</label>\n                        \n                    </div>\n                    <div fxLayout=\"row\" class=\"pkr\" *ngIf=\"obj.price == obj.discountedPrice\">\n                        <label>PKR</label>\n                        <label class=\"PKRHeading\">{{obj.price}}</label>\n                    </div>\n                    <div fxLayout=\"column\" >\n                        <label class=\"colorHeading\">Color: {{color}} \n                            <span class=\"msgColor\">{{colorMsg}}</span>\n                        </label>\n                        <span fxLayout=\"row\">\n                            <span *ngFor=\"let color of colorArray; let i = index\">\n                                <button mat-mini-fab class=\"colorButton\" (click)=\"changeColor(color)\"\n                                [style.background-color]=\"color.color\"></button>\n                            </span>\n                        </span>\n                    </div>\n                    <span class=\"quantityHeading\">\n                        <label>Quantity: </label>\n                    </span>\n                    <div fxLayout=\"row\">\n                        <a class=\"btn-qty\" (click)=\"minusQuantity()\">-</a>\n                        <mat-form-field appearance=\"outline\" class=\"matField\">\n                            <input matInput value=\"{{quantity}}\" class=\"matInput\">\n                          </mat-form-field>\n                        <a class=\"btn-qty\" (click)=\"addQuantity()\">+</a>\n                    </div>\n                    <div fxLayout=\"column\" >\n                        <label class=\"sizeHeading\">SIZE: {{size}} <span class=\"msgColor\">{{sizeMsg}}</span></label>\n                        <span fxLayout=\"row\" class=\"sizeButtons\">\n                            <span *ngFor=\"let size of sizeArray; let i = index\">\n                                <button mat-mini-fab class=\"sizeButton\" (click)=\"changeSize(size)\">\n                                    {{size.text}}</button>\n                            </span>\n                        </span>\n                    </div>\n                    <button mat-raised-button class=\"addCartButton\" (click)=\"addToCart()\">ADD TO CART</button>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n\n    <div class=\"productPage\" *ngIf=\"!isMobileScreen\">\n        <!-- <div fxLayout=\"row\">\n            <a id=\"right\">Right Way</a>\n            <label class=\"prodLabel\">{{obj.description}}</label>\n        </div> -->\n        <mat-card fxLayout=\"row\">\n            <mat-card fxFlex=\"50\" class=\"imageMatCard\">\n                <img class=\"img\" src=\"{{image}}\">\n                <!-- <div class=\"text\">\n                    <h2>{{obj.name}}</h2>\n                    <p>\n                        This kurta is designed by right way.\n                    </p>\n                </div> -->\n                <div class=\"sliderText\">\n                    <h1 class=\"offHeading\">{{obj.discount}}% OFF</h1>\n                </div>\n            </mat-card>\n            <div fxFlex=\"50\">\n                <div fxLayout=\"column\" class=\"descriptionClass\">\n                    <h3>{{obj.name}}</h3>\n                    <h4 >{{stockAvailability}}</h4>\n                    <div fxLayout=\"row\" class=\"pkr\" *ngIf=\"obj.price != obj.discountedPrice\">\n                        <label>PKR</label>\n                        <label class=\"PKRHeading\">{{obj.discountedPrice}}</label>\n                        <label><span class=\"PKRHeadingLine\">{{obj.price}}</span>({{obj.discount}}% Off)</label>\n                        \n                    </div>\n                    <div fxLayout=\"row\" class=\"pkr\" *ngIf=\"obj.price == obj.discountedPrice\">\n                        <label>PKR</label>\n                        <label class=\"PKRHeading\">{{obj.price}}</label>\n                    </div>\n                    <div fxLayout=\"column\" >\n                        <label class=\"colorHeading\">Color: {{color}} \n                            <span class=\"msgColor\">{{colorMsg}}</span>\n                        </label>\n                        <span fxLayout=\"row\">\n                            <span *ngFor=\"let color of colorArray; let i = index\">\n                                <button mat-mini-fab class=\"colorButton\" (click)=\"changeColor(color)\"\n                                [style.background-color]=\"color.color\"></button>\n                            </span>\n                        </span>\n                    </div>\n                    <span class=\"quantityHeading\">\n                        <label>Quantity: </label>\n                    </span>\n                    <div fxLayout=\"row\">\n                        <a class=\"btn-qty\" (click)=\"minusQuantity()\">-</a>\n                        <mat-form-field appearance=\"outline\" class=\"matField\">\n                            <input matInput value=\"{{quantity}}\" class=\"matInput\">\n                          </mat-form-field>\n                        <a class=\"btn-qty\" (click)=\"addQuantity()\">+</a>\n                    </div>\n                    <div fxLayout=\"column\" >\n                        <label class=\"sizeHeading\">SIZE: {{size}} <span class=\"msgColor\">{{sizeMsg}}</span></label>\n                        <span fxLayout=\"row\" class=\"sizeButtons\">\n                            <span *ngFor=\"let size of sizeArray; let i = index\">\n                                <button mat-mini-fab class=\"sizeButton\" (click)=\"changeSize(size)\">\n                                    {{size.text}}</button>\n                            </span>\n                        </span>\n                    </div>\n                    <button mat-raised-button class=\"addCartButton\" (click)=\"addToCart()\">ADD TO CART</button>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n    <app-footer></app-footer>\n<!-- <div class=\"homePage\" fxLayout=\"column\">\n    <span *ngFor=\"let product of products; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <span *ngFor=\"let prod of product; let j = index\" fxFlex=\"31.5\">\n            <img class=\"img\" src=\"{{prod.name}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <div class=\"middle\">\n                <div class=\"text\">John Doe</div>\n            </div>\n        </span>\n    </div>\n    </span>\n</div> -->\n\n<!-- <html>\n    <link href=\"https://fonts.googleapis.com/css?family=Playfair+Display&display=swap\" rel=\"stylesheet\">\n    <div class=\"image\">\n        <div class=\"heading\">\n            <p id=\"awesome\">Building Something Awesome</p>\n            <h1>Coming Soon!</h1>\n            <hr>\n            <p id=\"timer\"></p>\n            <form novalidate [formGroup]=\"fg\" fxLayout=\"row\" fxLayoutGap=\"10px\" (ngSubmit)=\"onSave(fg.value)\">\n\n            <mat-form-field fxFlex=\"70%\">\n                <input class=\"emailInput\" matInput placeholder=\"Get Notify by Email\" formControlName=\"email\" required>\n                <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n                <mat-error *ngIf=\"fg.get('email').hasError('required')\">Enter Email</mat-error>\n              </mat-form-field>\n              <button fxFlex=\"30%\" class=\"saveButton\" type=\"submit\" [disabled]=\"fg.invalid\" mat-raised-button color=\"primary\">Notify Me!</button>\n            </form>\n        </div>\n    </div>\n</html> -->\n\n  <!-- <router-outlet></router-outlet> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/products/form/product-form.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/products/form/product-form.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsProductsFormProductFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>Products<span class=\"sign\">></span>{{page}}\n</div>\n<div *ngIf=\"loaded\">\n    <mat-card class=\"matCard\">\n            <div fxLayout=\"row\">\n                <mat-card-title fxFlex=\"80\" class=\"titleHeading\">{{page}} Product</mat-card-title>\n\n                <div class=\"optionButtons\" fxLayoutAlign=\"end\" *ngIf=\"pageAct == pageActions.view\">\n                    <a [routerLink]=\"['/products']\" mat-icon-button>\n                        <mat-icon matTooltip=\"List\">list</mat-icon>\n                    </a>\n                    <a [routerLink]=\"['/products/update', productModel.id]\" mat-icon-button >\n                        <mat-icon matTooltip=\"Edit\">edit</mat-icon>\n                    </a>\n                    <a mat-icon-button (click)=\"delete(productModel.id)\" matTooltip=\"delete\">\n                        <mat-icon>delete</mat-icon>\n                    </a>\n                </div>\n            </div>\n            <mat-card-content *ngIf=\"!isMobileScreen\">\n                <form novalidate [formGroup]=\"fg\" fxLayout=\"column\" fxLayoutGap=\"10px\" (ngSubmit)=\"saveData(fg.value)\">\n\n                    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                            <mat-label>{{componentLabels.name}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.name\" formControlName=\"name\" required>\n                            <mat-error *ngIf=\"fg.get('name').hasError('required')\">Product Name is required.</mat-error>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                            <mat-label>{{componentLabels.categoryId}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.categoryId\" formControlName=\"categoryId\" required>\n                                <mat-option *ngFor=\"let category of categoryList\" [value]=\"category.id\">\n                                    <!-- {{ educationLevel.instituteType.name }} -  -->\n                                    {{ category.category }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('categoryId').hasError('required')\">Select Category</mat-error>\n                        </mat-form-field>\n\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.available}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.available\" formControlName=\"available\" type=\"number\" required>\n                            <mat-error *ngIf=\"fg.get('available').hasError('required')\">Enter Available Itema</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.price}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.price\" formControlName=\"price\" type=\"number\" required>\n                            <mat-error *ngIf=\"fg.get('price').hasError('required')\">Enter Product Price.</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.colorId}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.colorId\" formControlName=\"colorId\" required>\n                                <mat-option *ngFor=\"let color of colorList\" [value]=\"color.id\">\n                                    {{ color.color }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('colorId').hasError('required')\">Select Color</mat-error>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.code}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.code\" formControlName=\"code\" required>\n                            <mat-error *ngIf=\"fg.get('code').hasError('required')\">Enter Product Code</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.sizeId}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.sizeId\" formControlName=\"sizeId\" required>\n                                <mat-option *ngFor=\"let size of sizeList\" [value]=\"size.id\">\n                                    <!-- {{ educationLevel.instituteType.name }} -  -->\n                                    {{ size.size }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('sizeId').hasError('required')\">Select Size</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.discount}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.discount\" formControlName=\"discount\" type=\"number\" required>\n                            <mat-error *ngIf=\"fg.get('discount').hasError('required')\">Enter Discount Percentage.</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.type}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.type\" formControlName=\"type\">\n                            <!-- <mat-error *ngIf=\"fg.get('discount').hasError('required')\">Enter Discount Percentage.</mat-error> -->\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.season}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.season\" formControlName=\"season\" required>\n                                <mat-option *ngFor=\"let season of seasonList\" [value]=\"season\">\n                                    <!-- {{ educationLevel.instituteType.name }} -  -->\n                                    {{ season }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('season').hasError('required')\">Select Season</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"100\">\n                            <mat-label>{{componentLabels.description}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.description\" formControlName=\"description\" required>\n                            <mat-error *ngIf=\"fg.get('description').hasError('required')\">Enter Description</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    </div>\n                    <div *ngIf=\"pageAct != pageActions.view\">\n                        <div>\n                            <button mat-raised-button class=\"saveButton\" type=\"submit\" [disabled]=\"fg.invalid\" color=\"primary\">Save</button>\n                            <a *ngIf=\"pageAct == 'create'\" class=\"cancelButton\" mat-raised-button [routerLink]=\"['/add-product']\">Cancel</a>\n                            <a *ngIf=\"pageAct == 'update'\" class=\"cancelButton\" mat-raised-button [routerLink]=\"['/products/view', productModel.id]\">Cancel</a>\n                        </div>\n                    </div>\n                </form>\n\n            </mat-card-content>\n            <mat-card-content *ngIf=\"isMobileScreen\">\n                <form novalidate [formGroup]=\"fg\" fxLayout=\"column\" fxLayoutGap=\"10px\" (ngSubmit)=\"saveData(fg.value)\">\n\n                    <!-- <div fxLayout=\"row\" fxLayoutGap=\"10px\"> -->\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.name}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.name\" formControlName=\"name\" required>\n                            <mat-error *ngIf=\"fg.get('name').hasError('required')\">Product Name is required.</mat-error>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.categoryId}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.categoryId\" formControlName=\"categoryId\" required>\n                                <mat-option *ngFor=\"let category of categoryList\" [value]=\"category.id\">\n                                    <!-- {{ educationLevel.instituteType.name }} -  -->\n                                    {{ category.category }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('categoryId').hasError('required')\">Select Category</mat-error>\n                        </mat-form-field>\n\n                    <!-- </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\"> -->\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.available}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.available\" formControlName=\"available\" type=\"number\" required>\n                            <mat-error *ngIf=\"fg.get('available').hasError('required')\">Enter Available Itema</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.price}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.price\" formControlName=\"price\" type=\"number\" required>\n                            <mat-error *ngIf=\"fg.get('price').hasError('required')\">Enter Product Price.</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    <!-- </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\"> -->\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.colorId}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.colorId\" formControlName=\"colorId\" required>\n                                <mat-option *ngFor=\"let color of colorList\" [value]=\"color.id\">\n                                    {{ color.color }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('colorId').hasError('required')\">Select Color</mat-error>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.code}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.code\" formControlName=\"code\" required>\n                            <mat-error *ngIf=\"fg.get('code').hasError('required')\">Enter Product Code</mat-error>\n                        </mat-form-field>\n                    <!-- </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\"> -->\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.sizeId}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.sizeId\" formControlName=\"sizeId\" required>\n                                <mat-option *ngFor=\"let size of sizeList\" [value]=\"size.id\">\n                                    <!-- {{ educationLevel.instituteType.name }} -  -->\n                                    {{ size.size }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('sizeId').hasError('required')\">Select Size</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.discount}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.discount\" formControlName=\"discount\" type=\"number\" required>\n                            <mat-error *ngIf=\"fg.get('discount').hasError('required')\">Enter Discount Percentage.</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    <!-- </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\"> -->\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.type}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.type\" formControlName=\"type\">\n                            <!-- <mat-error *ngIf=\"fg.get('discount').hasError('required')\">Enter Discount Percentage.</mat-error> -->\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>{{componentLabels.season}}</mat-label>\n                            <mat-select [placeholder]=\"componentLabels.season\" formControlName=\"season\" required>\n                                <mat-option *ngFor=\"let season of seasonList\" [value]=\"season\">\n                                    <!-- {{ educationLevel.instituteType.name }} -  -->\n                                    {{ season }}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"fg.get('season').hasError('required')\">Select Season</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    <!-- </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\"> -->\n                        <mat-form-field appearance=\"outline\" fxFlex=\"100\">\n                            <mat-label>{{componentLabels.description}}</mat-label>\n                            <textarea matInput [placeholder]=\"componentLabels.description\" formControlName=\"description\" required></textarea>\n                            <mat-error *ngIf=\"fg.get('description').hasError('required')\">Enter Description</mat-error>\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                        </mat-form-field>\n                    <!-- </div> -->\n                    <div *ngIf=\"pageAct != pageActions.view\">\n                        <div>\n                            <button mat-raised-button class=\"saveButton\" type=\"submit\" [disabled]=\"fg.invalid\" color=\"primary\">Save</button>\n                            <a *ngIf=\"pageAct == 'create'\" class=\"cancelButton\" mat-raised-button [routerLink]=\"['/add-product']\">Cancel</a>\n                            <a *ngIf=\"pageAct == 'update'\" class=\"cancelButton\" mat-raised-button [routerLink]=\"['/products/view', productModel.id]\">Cancel</a>\n                        </div>\n                    </div>\n                </form>\n\n            </mat-card-content>\n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/products/list/product-list.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/products/list/product-list.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsProductsListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div *ifPermitted=\"'educationLevels.index'\"> -->\n  <!-- <shared-page-loader *ngIf=\"!loaded\"> </shared-page-loader> -->\n\n  <div class=\"pagePath\">\n    RightWay<span class=\"sign\">></span>Products\n</div>\n  <div class=\"ordersCard\">\n      <label class=\"productHeading\">Products List</label>\n      <div>\n          <mat-form-field fxFlex class=\"dgSearchBar\">\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n          </mat-form-field>\n      </div>\n\n      <mat-table class=\"matTable\" #table [dataSource]=\"dataSource\" matSort (matSortChange)=\"sortData()\" matSortDisableClear *ngIf=\"!isMobileScreen\">\n\n          <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['name']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"price\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['price']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"discount\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['discount']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.discount}}% </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"available\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['available']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.available}} </mat-cell>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"options\">\n              <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" class=\"options\">\n                  <a [routerLink]=\"['/products/view', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"View\" class=\"viewIcon\">visibility</mat-icon>\n                  </a>\n                  <a [routerLink]=\"['/products/update', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"Edit\" class=\"editIcon\">edit</mat-icon>\n                  </a>\n                  <!-- <a mat-icon-button (click)=\"delete(element.id)\" matTooltip=\"Delete\">\n                      <mat-icon class=\"delete-icon\">delete</mat-icon>\n                  </a> -->\n              </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row class=\"hover-effect\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n      <mat-table class=\"matTable\" #table [dataSource]=\"dataSource\" matSort (matSortChange)=\"sortData()\" matSortDisableClear *ngIf=\"isMobileScreen\">\n\n          <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{attrLabels['name']}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"available\">\n              <mat-header-cell class=\"amountColumn\" *matHeaderCellDef mat-sort-header> {{attrLabels['available']}} </mat-header-cell>\n              <mat-cell class=\"amountColumn\" *matCellDef=\"let element\"> {{element.available}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"options\">\n              <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" class=\"options\">\n                  <a [routerLink]=\"['/products/view', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"View\" class=\"viewIcon\">visibility</mat-icon>\n                  </a>\n                  <a [routerLink]=\"['/products/update', element.id]\" mat-icon-button>\n                      <mat-icon matTooltip=\"Edit\" class=\"editIcon\">edit</mat-icon>\n                  </a>\n                  <!-- <a mat-icon-button (click)=\"delete(element.id)\" matTooltip=\"Delete\">\n                      <mat-icon class=\"delete-icon\">delete</mat-icon>\n                  </a> -->\n              </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedMobileColumns\"></mat-header-row>\n          <mat-row class=\"hover-effect\" *matRowDef=\"let row; columns: displayedMobileColumns;\"></mat-row>\n      </mat-table>\n\n      <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\"></mat-paginator>\n\n  </div>\n  <!-- <div class=\"right-bottom-button\">\n      <a mat-fab color=\"primary\" [routerLink]=\"['/orders/create']\">\n          <mat-icon>add</mat-icon>\n      </a>\n  </div> -->\n<!-- </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/register/register.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/register/register.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <!-- <mat-toolbar color=\"primary\" class=\"matCard\">\n        <span fxLayout=\"row\" fxFlex=\"90\" class=\"matCardButtons\">\n        <h1 class=\"matHeading\">  Right Way  </h1>  \n        <button mat-button routerLink=\"/\">Sales</button>  \n        <button mat-button routerLink=\"/about\">Winter Collection</button>\n        <button mat-button routerLink=\"/about\">New Designs</button>\n        <button mat-button routerLink=\"/about\">UnStitched</button>\n        <button mat-button routerLink=\"/about\">Stitched</button>\n        </span>\n        <span fxFlex=\"15\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <mat-icon>account_circle</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item routerLink=\"/login\">\n                  <span>Login</span>\n                </button>\n                <button mat-menu-item routerLink=\"/register\">\n                  <span>Sign Up</span>\n                </button>\n              </mat-menu>\n              <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n                <mat-icon>shopping_cart</mat-icon>\n              </button>\n              \n        </span>\n    </mat-toolbar> -->\n    \n    \n    \n    <div class=\"image\">\n      <div class=\"pagePath\">\n        RightWay<span class=\"sign\">></span>Registration\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"{{flexSize}}\" class=\"login-form\">\n            <mat-card class=\"example-card\" >\n                <mat-card-header>\n                  <mat-card-title>Registration Form</mat-card-title>\n                </mat-card-header>\n                <mat-card-content>\n                    <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"onSave(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n    \n                        <mat-form-field>\n                            <input class=\"nameInput\" matInput [placeholder]=\"componentLabels.name\" formControlName=\"name\" required>\n                            <mat-error *ngIf=\"fg.get('name').hasError('required')\">Name is required.</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input class=\"emailInput\" matInput [placeholder]=\"componentLabels.email\" formControlName=\"email\" required>\n                            <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n                            <mat-error *ngIf=\"fg.get('email').hasError('required')\">Email is required.</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input class=\"mobileNumberInput\" matInput [placeholder]=\"componentLabels.mobileNumber\" formControlName=\"mobileNumber\" [textMask]=\"{mask: mobileMask}\" required>\n                            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('required')\">Mobile Number is required.</mat-error>\n                            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('pattern')\">Invalid Mobile Number.</mat-error>                        \n                        </mat-form-field>\n                        <mat-form-field>\n                            <input class=\"addressInput\" matInput [placeholder]=\"componentLabels.address\" formControlName=\"address\" required>\n                            <mat-error *ngIf=\"fg.get('address').hasError('required')\">Address is required.</mat-error>\n                            <!-- <mat-error *ngIf=\"fg.get('mobileNumber').hasError('pattern')\">Invalid Mobile Number.</mat-error>                         -->\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input type=\"password\" class=\"passwordInput\" matInput [placeholder]=\"componentLabels.password\" formControlName=\"password\" required>\n                            <mat-error *ngIf=\"fg.get('password').hasError('required')\">Password is required</mat-error>\n                            <mat-error *ngIf=\"fg.get('password').hasError('equalTo') && !fg.get('password').hasError('required') \">Password did not match</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input type=\"password\" class=\"confirmPasswordInput\" matInput [placeholder]=\"componentLabels.confirmPassword\" formControlName=\"confirmPassword\" required>\n                            <mat-error *ngIf=\"fg.get('confirmPassword').hasError('required')\">Confirm Password is required</mat-error>\n                            <mat-error *ngIf=\"fg.get('confirmPassword').hasError('equalTo') && !fg.get('confirmPassword').hasError('required') \">Password did not match</mat-error>\n                        </mat-form-field>\n                        <div fxLayout=\"row\" *ngIf=\"innerWidth>450\">\n                          <button class=\"saveButton\" mat-raised-button type=\"submit\" [disabled]=\"fg.invalid\">Register</button>\n                          <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/login']\">Already have Account</button>\n                        </div>\n                        <div fxLayout=\"column\" *ngIf=\"innerWidth<=450\">\n                          <button class=\"saveButton\" mat-raised-button type=\"submit\" [disabled]=\"fg.invalid\">Register</button>\n                          <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/login']\">Already have Account</button>\n                        </div>\n                        <label class=\"label\" [routerLink]=\"['/home']\">Return to Store</label>\n                    </form>\n                </mat-card-content>\n              </mat-card>\n            </div>\n    </div>\n    </div>\n    \n    <!-- <div class=\"login\">\n        <h1>Login Form</h1>\n        <div fxLayout=\"row\">\n        <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"onSave(fg.value)\" fxLayout=\"column\" fxFlex=\"50\" fxLayoutGap=\"10px\">\n          <mat-form-field>\n            <input class=\"nameInput\" matInput [placeholder]=\"componentLabels.name\" formControlName=\"name\" required>\n            <mat-error *ngIf=\"fg.get('name').hasError('required')\">Name is required.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <input class=\"emailInput\" matInput [placeholder]=\"componentLabels.email\" formControlName=\"email\" required>\n            <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n            <mat-error *ngIf=\"fg.get('email').hasError('required')\">Email is required.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <input class=\"mobileNumberInput\" matInput [placeholder]=\"componentLabels.mobileNumber\" formControlName=\"mobileNumber\" [textMask]=\"{mask: mobileMask}\" required>\n            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('required')\">Mobile Number is required.</mat-error>\n            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('pattern')\">Invalid Mobile Number.</mat-error>                        </mat-form-field>\n        <mat-form-field>\n            <input type=\"password\" class=\"passwordInput\" matInput [placeholder]=\"componentLabels.password\" formControlName=\"password\" required>\n            <mat-error *ngIf=\"fg.get('password').hasError('required')\">Password is required</mat-error>\n            <mat-error *ngIf=\"fg.get('password').hasError('equalTo') && !fg.get('password').hasError('required') \">Password did not match</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"password\" class=\"confirmPasswordInput\" matInput [placeholder]=\"componentLabels.confirmPassword\" formControlName=\"confirmPassword\" required>\n            <mat-error *ngIf=\"fg.get('confirmPassword').hasError('required')\">Confirm Password is required</mat-error>\n            <mat-error *ngIf=\"fg.get('confirmPassword').hasError('equalTo') && !fg.get('confirmPassword').hasError('required') \">Password did not match</mat-error>\n        </mat-form-field>\n        <div fxLayout=\"row\">\n            <button class=\"saveButton\" mat-raised-button type=\"submit\" [disabled]=\"fg.invalid\">Register</button>\n            <button class=\"cancelButton\" mat-raised-button [routerLink]=\"['/login']\">Already have Account</button>\n\n          </div>\n          <label class=\"label\" [routerLink]=\"['/home']\">Return to Store</label>\n        </form>\n    </div>\n    </div> -->\n        <!-- <router-outlet></router-outlet> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/shipping/shipping.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/shipping/shipping.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsShippingShippingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div > -->\n    <!-- <mat-spinner class=\"spinner\" *ngIf=\"!loaded\"></mat-spinner> -->\n    <!-- <mat-toolbar color=\"primary\" class=\"matCard\">\n        <span fxLayout=\"row\" fxFlex=\"90\" class=\"matCardButtons\">\n        <h1 class=\"matHeading\">  Right Way  </h1>  \n        <button mat-button routerLink=\"/\">Sales</button>  \n        <button mat-button routerLink=\"/about\">Winter Collection</button>\n        <button mat-button routerLink=\"/about\">New Designs</button>\n        <button mat-button routerLink=\"/about\">UnStitched</button>\n        <button mat-button routerLink=\"/about\">Stitched</button>\n        </span>\n        <span fxFlex=\"15\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <mat-icon>account_circle</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item routerLink=\"/login\">\n                  <span>Login</span>\n                </button>\n                <button mat-menu-item routerLink=\"/register\">\n                  <span>Sign Up</span>\n                </button>\n              </mat-menu>\n              <button mat-icon-button aria-label=\"Example icon-button with a menu\">\n                <mat-icon>shopping_cart</mat-icon>\n              </button>\n              \n        </span>\n    </mat-toolbar> -->\n    \n    <!-- <div class=\"productPage\" fxLayout=\"row\">\n        <div fxFlex=\"50\">\n            <img class=\"img\" src=\"{{imageLink}}\">\n        </div>\n        <div fxFlex=\"50\">\n            <div fxLayout=\"column\">\n\n            </div>\n        </div>\n    </div> -->\n    <div class=\"pagePath\">\n        RightWay<span class=\"sign\">></span>Home<span class=\"sign\">></span>Add To Cart\n        <span class=\"sign\">></span>Shipping\n    </div>\n    <div class=\"shippingPage\" *ngIf=\"isMobileScreen\">\n        <mat-card fxLayout=\"column\" style=\"margin-top:20px\" class=\"amountCard\">\n            <label class=\"orderLabel\">Order Summary</label>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"50\">Total Amount</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{amount}}</label>\n            </span>\n            <label class=\"itemLabel\">For Lahore users, delivery charges will be zero.</label>\n        </mat-card>\n        <mat-card class=\"formClass\">\n            <span class=\"shippingLabel\">\n                <label>Shipping Details</label>\n            </span>\n            <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"addCustomerDetails(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"0px\">\n                \n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"96\">\n                            <mat-label>{{componentLabels.fname}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.fname\" formControlName=\"fname\" required>\n                            <mat-error *ngIf=\"fg.get('fname').hasError('required')\">First Name is required.</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"96\">\n                            <mat-label>{{componentLabels.lname}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.lname\" formControlName=\"lname\" required>\n                            <mat-error *ngIf=\"fg.get('lname').hasError('required')\">Last Name is required.</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"96\">\n                            <mat-label>{{componentLabels.email}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.email\" formControlName=\"email\" required>\n                            <mat-error *ngIf=\"fg.get('email').hasError('required')\">Email is required.</mat-error>\n                            <mat-error *ngIf=\"fg.get('email').hasError('email')\">Email is not valid.</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"96\">\n                            <mat-label>{{componentLabels.mobileNumber}}</mat-label>\n                            <input class=\"mobileNumberInput\" matInput [placeholder]=\"componentLabels.mobileNumber\" formControlName=\"mobileNumber\" required>\n                            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('required')\">Mobile Number is required.</mat-error>\n                            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('pattern')\">Pattern should be 0300-1234567</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"97\">\n                            <mat-label>{{componentLabels.address}}</mat-label>\n                            <textarea matInput [placeholder]=\"componentLabels.address\" formControlName=\"address\" required></textarea>\n                            <mat-error *ngIf=\"fg.get('address').hasError('required')\">Address is required.</mat-error>\n                            <mat-error *ngIf=\"fg.get('address').hasError('minLength')\">Address is exceeding.</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"97\">\n                            <mat-label>{{componentLabels.instruction}}</mat-label>\n                            <textarea matInput [placeholder]=\"componentLabels.instruction\" formControlName=\"instruction\"></textarea>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" class=\"buttons\">\n                        <button mat-raised-button class=\"paymentButton\" type=\"submit\" [disabled]=\"fg.invalid\">Go For Payment</button>\n                        <button class=\"cancelButton\" mat-raised-button (click)=\"cancelClick()\">Cancel</button>\n                    </div>\n                </form>\n        </mat-card>\n    </div>\n\n    <div class=\"shippingPage\" *ngIf=\"!isMobileScreen\">\n        <mat-card fxLayout=\"column\" style=\"margin-top:20px\" class=\"amountCard\">\n            <label class=\"orderLabel\">Order Summary</label>\n            <span fxLayout=\"row\">\n                <label class=\"itemLabel\" fxFlex=\"40\">Total Amount</label>\n                <label class=\"totalLabel\" fxFlex=\"40\">PKR {{amount}}</label>\n            </span>\n            <label class=\"itemLabel\">For Lahore users, delivery charges will be zero.</label>\n        </mat-card>\n        <mat-card class=\"formClass\">\n            <span class=\"shippingLabel\">\n                <label>Shipping Details</label>\n            </span>\n            <form novalidate [formGroup]=\"fg\" (ngSubmit)=\"addCustomerDetails(fg.value)\" fxLayout=\"column\" fxLayoutGap=\"0px\">\n                \n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.fname}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.fname\" formControlName=\"fname\" required>\n                            <mat-error *ngIf=\"fg.get('fname').hasError('required')\">First Name is required.</mat-error>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.lname}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.lname\" formControlName=\"lname\" required>\n                            <mat-error *ngIf=\"fg.get('lname').hasError('required')\">Last Name is required.</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.email}}</mat-label>\n                            <input matInput [placeholder]=\"componentLabels.email\" formControlName=\"email\" required>\n                            <mat-error *ngIf=\"fg.get('email').hasError('required')\">Email is required.</mat-error>\n                            <mat-error *ngIf=\"fg.get('email').hasError('email')\">Email is not valid.</mat-error>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" fxFlex=\"48\">\n                            <mat-label>{{componentLabels.mobileNumber}}</mat-label>\n                            <input class=\"mobileNumberInput\" matInput [placeholder]=\"componentLabels.mobileNumber\" formControlName=\"mobileNumber\" required>\n                            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('required')\">Mobile Number is required.</mat-error>\n                            <mat-error *ngIf=\"fg.get('mobileNumber').hasError('pattern')\">Pattern should be 0300-1234567</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"97\">\n                            <mat-label>{{componentLabels.address}}</mat-label>\n                            <textarea matInput [placeholder]=\"componentLabels.address\" formControlName=\"address\" required></textarea>\n                            <mat-error *ngIf=\"fg.get('address').hasError('required')\">Address is required.</mat-error>\n                            <mat-error *ngIf=\"fg.get('address').hasError('minLength')\">Address is exceeding.</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"fname-margin\">\n                        <mat-form-field appearance=\"outline\" fxFlex=\"97\">\n                            <mat-label>{{componentLabels.instruction}}</mat-label>\n                            <textarea matInput [placeholder]=\"componentLabels.instruction\" formControlName=\"instruction\"></textarea>\n                        </mat-form-field>\n                    </div>\n                    <div fxLayout=\"row\">\n                        <button mat-raised-button class=\"paymentButton\" type=\"submit\" [disabled]=\"fg.invalid\">Go For Payment</button>\n                        <button class=\"cancelButton\" mat-raised-button (click)=\"cancelClick()\">Cancel</button>\n                    </div>\n                </form>\n        </mat-card>\n    </div>\n    <app-footer></app-footer>\n<!-- <div class=\"homePage\" fxLayout=\"column\">\n    <span *ngFor=\"let product of products; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <span *ngFor=\"let prod of product; let j = index\" fxFlex=\"31.5\">\n            <img class=\"img\" src=\"{{prod.name}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <div class=\"middle\">\n                <div class=\"text\">John Doe</div>\n            </div>\n        </span>\n    </div>\n    </span>\n</div> -->\n\n<!-- <html>\n    <link href=\"https://fonts.googleapis.com/css?family=Playfair+Display&display=swap\" rel=\"stylesheet\">\n    <div class=\"image\">\n        <div class=\"heading\">\n            <p id=\"awesome\">Building Something Awesome</p>\n            <h1>Coming Soon!</h1>\n            <hr>\n            <p id=\"timer\"></p>\n            <form novalidate [formGroup]=\"fg\" fxLayout=\"row\" fxLayoutGap=\"10px\" (ngSubmit)=\"onSave(fg.value)\">\n\n            <mat-form-field fxFlex=\"70%\">\n                <input class=\"emailInput\" matInput placeholder=\"Get Notify by Email\" formControlName=\"email\" required>\n                <mat-error *ngIf=\"fg.get('email').hasError('email')\">Invalid Email</mat-error>\n                <mat-error *ngIf=\"fg.get('email').hasError('required')\">Enter Email</mat-error>\n              </mat-form-field>\n              <button fxFlex=\"30%\" class=\"saveButton\" type=\"submit\" [disabled]=\"fg.invalid\" mat-raised-button color=\"primary\">Notify Me!</button>\n            </form>\n        </div>\n    </div>\n</html> -->\n\n  <!-- <router-outlet></router-outlet> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/snack-bar/snack-bar.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/snack-bar/snack-bar.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsSnackBarSnackBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<span class=\"example-pizza-party\">Image Uploaded Successfully</span>\n<span class=\"dismiss\">Dismiss</span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/unstitch/unstitch.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/unstitch/unstitch.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppComponentsUnstitchUnstitchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"pagePath\">\n      RightWay<span class=\"sign\">></span>UnStitch\n  </div>\n\n  <div class=\"comingSoon\">COMING SOON</div>\n<!-- <mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth<600\">\n  <span fxLayout=\"row\">\n    <mat-card class=\"sliderMatCard\">\n        <img class=\"imgSlider\" fxFlex=\"100\" src={{url}}>\n            <div class=\"sliderText\">\n                <h2>LAWN KURTA</h2>\n                <p>\n                </p>\n            </div>\n    </mat-card>\n  </span>\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\" *ngFor=\"let prod of products; let j = index\">\n        <mat-card class=\"homeMatCard\" fxFlex=\"100\">\n          <div class=\"imgOverflow\">\n            <img class=\"img\" src=\"{{prod.name}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <div class=\"hoverTextbox\">\n              <h2>LAWN KURTA</h2>\n              <p>\n                  This kurta is designed by right way.\n              </p>\n            </div>\n          </div>\n\n            <div class=\"middle\">\n                <div class=\"text\">EMBROIDED SHIRT</div>\n                <P class=\"paragraph\">Revel in joy this season with our exquisitely pret collection, \n                  featuring a rich\n                  color palette</P>\n                  <label class=\"label\">SHOP NOW</label>\n            </div>\n        </mat-card>\n    </div>\n</mat-card>\n<mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth>=600 && innerWidth<750\">\n  <span *ngFor=\"let product of imageInterval1; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-card class=\"homeMatCard\" *ngFor=\"let prod of product; let j = index\" fxFlex=\"50\">\n          <div class=\"imgOverflow\">\n            <img class=\"img\" src=\"{{prod}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <div class=\"hoverTextbox\">\n              <h2>LAWN KURTA</h2>\n              <p>\n                  This kurta is designed by right way.\n              </p>\n            </div>\n          </div>\n          <div class=\"middle\">\n            <div class=\"text\">EMBROIDED SHIRT</div>\n            <P class=\"paragraph\">Revel in joy this season with our exquisitely pret collection, \n              featuring a rich\n              color palette</P>\n            <label class=\"label\">SHOP NOW</label>\n          </div>\n        </mat-card>\n    </div>\n  </span>\n</mat-card>\n<mat-card class=\"homePage\" fxLayout=\"column\" *ngIf=\"innerWidth>=750\">\n  <span *ngFor=\"let product of imageInterval2; let i = index\">\n    <div class=\"imageRow\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-card class=\"homeMatCard\" *ngFor=\"let prod of product; let j = index\" fxFlex=\"33\">\n          <div class=\"imgOverflow\">\n            <img class=\"img\" src=\"{{prod}}\" [routerLink]=\"['/home/product', prod.id]\">\n            <div class=\"hoverTextbox\">\n              <h2>LAWN KURTA</h2>\n              <p>\n                  This kurta is designed by right way.\n              </p>\n            </div>\n          </div>\n          <div class=\"middle\">\n            <div class=\"text\">EMBROIDED SHIRT</div>\n            <P class=\"paragraph\">Revel in joy this season with our exquisitely pret collection, \n              featuring a rich\n              color palette</P>\n            <label class=\"label\">SHOP NOW</label>\n          </div>\n        </mat-card>\n    </div>\n  </span>\n</mat-card>\n  <app-footer></app-footer> -->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      apiBaseUrl: 'http://localhost:3000/',
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _modules_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/app/app.module */
    "./src/modules/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_modules_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/modules/app/app-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/modules/app/app-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcModulesAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/modules/app/components/index.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config */
    "./src/modules/app/config/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services */
    "./src/modules/app/services/index.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      data: {
        act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.home
      },
      children: [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
          act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.home
        }
      }, {
        path: 'product/:id',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
      }, {
        path: 'addToCart',
        children: [{
          path: '',
          component: _components__WEBPACK_IMPORTED_MODULE_3__["AddToCartComponent"]
        }, {
          path: 'shipping',
          component: _components__WEBPACK_IMPORTED_MODULE_3__["ShippingComponent"]
        }, {
          path: 'payment',
          component: _components__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"]
        }]
      }]
    }, {
      path: 'about-us',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'contact-us',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
    }, {
      path: 'login',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'addProduct',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"],
      canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]]
    }, {
      path: 'addCategory',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"],
      canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]]
    }, {
      path: 'addColor',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["ColorComponent"],
      canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]]
    }, {
      path: 'unstitch',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["UnStitchComponent"]
    }, {
      path: 'sale',
      // canActivate: [AuthGuardService],
      component: _components__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      data: {
        act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.sale
      }
    }, {
      path: 'newArrival',
      // canActivate: [AuthGuardService],
      component: _components__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      data: {
        act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.newArrival
      }
    }, {
      path: 'summerCollection',
      // canActivate: [AuthGuardService],
      component: _components__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      data: {
        act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.summerCollection
      }
    }, {
      path: 'orders',
      children: [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["OrderListComponent"],
        canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]]
      }, {
        path: 'view/:id',
        canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]],
        component: _components__WEBPACK_IMPORTED_MODULE_3__["OrderFormComponent"],
        data: {
          act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.view
        }
      }, {
        path: 'update/:id',
        canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]],
        component: _components__WEBPACK_IMPORTED_MODULE_3__["OrderFormComponent"],
        data: {
          act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.update
        }
      }]
    }, {
      path: 'products',
      children: [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: 'view/:id',
        canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]],
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ProductFormComponent"],
        data: {
          act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.view
        }
      }, {
        path: 'update/:id',
        canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]],
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ProductFormComponent"],
        data: {
          act: _config__WEBPACK_IMPORTED_MODULE_4__["GLOBALS"].pageActions.update
        }
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/modules/app/app.component.css":
  /*!*******************************************!*\
    !*** ./src/modules/app/app.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".margin {\n    margin-top: 0%;\n    padding-top: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIHBhZGRpbmctdG9wOiAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/app.component.ts":
  /*!******************************************!*\
    !*** ./src/modules/app/app.component.ts ***!
    \******************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcModulesAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'frontend';
      }

      _createClass(AppComponent, [{
        key: "onActivate",
        value: function onActivate(event, outlet) {
          outlet.scrollTop = 0; // window.scrollTo(0,0);
          // let scrollToTop = window.setInterval(() => {
          //     let pos = window.pageYOffset;
          //     if (pos > 0) {
          //         window.scrollTo(0, pos - 20); // how far to scroll on each step
          //     } else {
          //         window.clearInterval(scrollToTop);
          //     }
          // }, 16);
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/modules/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/modules/app/app.module.ts":
  /*!***************************************!*\
    !*** ./src/modules/app/app.module.ts ***!
    \***************************************/

  /*! exports provided: AppModule */

  /***/
  function srcModulesAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/modules/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/modules/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components */
    "./src/modules/app/components/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/main-nav/main-nav.component */
    "./src/modules/app/components/main-nav/main-nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js"); // import { Routes, RouterModule } from '@angular/router';
    // import {MatProgressBarModule} from '@angular/material/progress-bar'; 


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["ProductComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["AddCategoryComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["AddToCartComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["ShippingComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["ColorComponent"], _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_15__["MainNavComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["SnackBarComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["UnStitchComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["OrderListComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["OrderFormComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["ProductFormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__["TextMaskModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_11__["NgImageSliderModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"]],
      providers: [_services__WEBPACK_IMPORTED_MODULE_14__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_14__["AboutService"], _services__WEBPACK_IMPORTED_MODULE_14__["LoginService"], _services__WEBPACK_IMPORTED_MODULE_14__["RegisterService"], _services__WEBPACK_IMPORTED_MODULE_14__["ProductService"], _services__WEBPACK_IMPORTED_MODULE_14__["AddCategoryService"], _services__WEBPACK_IMPORTED_MODULE_14__["SizeService"], _services__WEBPACK_IMPORTED_MODULE_14__["SharedDataService"], _services__WEBPACK_IMPORTED_MODULE_14__["CustomerService"], _services__WEBPACK_IMPORTED_MODULE_14__["ColorService"], _services__WEBPACK_IMPORTED_MODULE_14__["OrderService"], _services__WEBPACK_IMPORTED_MODULE_14__["AuthorizationService"]],
      entryComponents: [_components__WEBPACK_IMPORTED_MODULE_13__["SnackBarComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/modules/app/components/about/about.component.css":
  /*!**************************************************************!*\
    !*** ./src/modules/app/components/about/about.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.about{\n    font-family: \"Montserrat\";\n}\n.pagePath{\n    margin: 15px;\n    font-size: 12px;\n    font-family: \"Montserrat\";\n    background-color: whitesmoke;\n}\n.sign{\n    font-size: 10px;\n    margin-left: 3px;\n    margin-right: 6px;\n}\n.aboutHeading{\n    font-size: 24px;\n    font-family: \"Montserrat\";\n    padding-top: 25px !important;\n    margin-left: 20px;\n    font-weight: bold;\n    text-align: center;\n}\n.aboutMatcard{\n    margin-top: 30px;\n    overflow: hidden;\n}\n.imageMatCard{\n    overflow: hidden;\n    /* padding: 0px !important; */\n}\n.aboutToolbar{\n    margin: 10px;\n    font-size: 12px;\n    font-family: \"Montserrat\";\n    background-color: whitesmoke;\n}\n.sign{\n    font-size: 10px;\n    margin-left: 5px;\n    margin-right: 10px;\n}\np{\n    font-size: 16px;\n    font-family: \"Montserrat\";\n    line-height: 18px;\n    color: rgb(46, 45, 45);\n    margin-left: 10%;\n    margin-right: 10%;\n}\nlabel{\n    font-size: 20px;\n    font-family: \"Montserrat\";\n    font-weight: bold;\n}\n.sliderText{\n    position: absolute;\n\tbottom: 0px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 60px;\n    width: 100% !important;\n    font-family: \"Montserrat\";\n    font-size: 12px;\n\topacity: 0.7;\n  }\n/**\n  CSS FOR IMAGE SLIDER ANIMATION\n  **/\n.imgSlider{\n      height: 400px;\n      /* width: 100%; */\n      margin-left: 10%;\n      margin-right: 10%;\n    /* animation: myfirst 3s linear infinite; */\n  }\n/* @keyframes myfirst {\n      0% {\n          transform: scale(1,1);\n      }\n      80% {\n          transform: scale(1.2,1.2);\n      }\n      100% {\n          transform: scale(1,1);\n      }\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7Q0FDckIsV0FBVztJQUNSLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixlQUFlO0NBQ2xCLFlBQVk7RUFDWDtBQUNBOztJQUVFO0FBQ0Y7TUFDSSxhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixpQkFBaUI7SUFDbkIsMkNBQTJDO0VBQzdDO0FBQ0E7Ozs7Ozs7Ozs7S0FVRyIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYWJvdXR7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuLnBhZ2VQYXRoe1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4uc2lnbntcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5hYm91dEhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICBwYWRkaW5nLXRvcDogMjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dE1hdGNhcmR7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltYWdlTWF0Q2FyZHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyAqL1xufVxuLmFib3V0VG9vbGJhcntcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnNpZ257XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxucHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiByZ2IoNDYsIDQ1LCA0NSk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2xpZGVyVGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ5LCA0Nyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG5cdG9wYWNpdHk6IDAuNztcbiAgfVxuICAvKipcbiAgQ1NTIEZPUiBJTUFHRSBTTElERVIgQU5JTUFUSU9OXG4gICoqL1xuICAuaW1nU2xpZGVye1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIC8qIGFuaW1hdGlvbjogbXlmaXJzdCAzcyBsaW5lYXIgaW5maW5pdGU7ICovXG4gIH1cbiAgLyogQGtleWZyYW1lcyBteWZpcnN0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICB9XG4gICAgICA4MCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICB9XG4gIH0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/components/about/about.component.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/app/components/about/about.component.ts ***!
    \*************************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcModulesAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(router) {
        _classCallCheck(this, AboutComponent);

        this.router = router;
        this.image = 'assets/img1.jpg';
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AboutComponent.prototype, "onResize", null);
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/modules/app/components/about/about.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AboutComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/add-category/add-category.component.css":
  /*!****************************************************************************!*\
    !*** ./src/modules/app/components/add-category/add-category.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsAddCategoryAddCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/**  \n    These are the design implementation for Top bar.\n**/\n.matCard {\n    background-color: black;\n  }\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n  }\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n  }\n.right-way {\n          color: rgb(226, 202, 62);\n          font-size: 25px;\n          font-family: 'Playfair Display', serif;\n          text-align: center;\n    }\n/**\n    These are the other designs for the page\n    **/\n.productPage{\n        margin: 30px;\n    }\n#right{\n        font-size: 12px;\n    }\n.prodLabel{\n        padding-bottom: 10px;\n        margin-left: 20px;\n        font-size: 12px;\n    }\n.img{\n        width: 100%;\n        height: 500px;\n    }\n.formClass{\n        margin-left: 25px;\n    }\n.addCategoryButton{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n    }\n/* .addCategoryButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    } */\n.cancelButton{\n        margin-left: 20px;\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n.cancelButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n@media(max-width:600px){\n        .formClass{\n            margin-left: 15px;\n            margin-right: 15px;\n        }\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGO0lBQ0ksdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7QUFJRTtVQUNNLHdCQUF3QjtVQUN4QixlQUFlO1VBQ2Ysc0NBQXNDO1VBQ3RDLGtCQUFrQjtJQUN4QjtBQUVBOztNQUVFO0FBRUY7UUFDSSxZQUFZO0lBQ2hCO0FBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUVBOzs7T0FHRztBQUVIO1FBQ0ksaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUVBO1FBQ0ksa0NBQWtDO1FBQ2xDLFlBQVk7SUFDaEI7QUFFQTtRQUNJO1lBQ0ksaUJBQWlCO1lBQ2pCLGtCQUFrQjtRQUN0QjtJQUNKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiAgXG4gICAgVGhlc2UgYXJlIHRoZSBkZXNpZ24gaW1wbGVtZW50YXRpb24gZm9yIFRvcCBiYXIuXG4qKi9cbi5tYXRDYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLm1hdENhcmRCdXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gIH1cbiAgXG4gIC5tYXRIZWFkaW5nIHtcbiAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9ICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgIC5yaWdodC13YXkge1xuICAgICAgICAgIGNvbG9yOiByZ2IoMjI2LCAyMDIsIDYyKTtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgIFRoZXNlIGFyZSB0aGUgb3RoZXIgZGVzaWducyBmb3IgdGhlIHBhZ2VcbiAgICAqKi9cblxuICAgIC5wcm9kdWN0UGFnZXtcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgIH1cblxuICAgICNyaWdodHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAucHJvZExhYmVse1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG5cbiAgICAuZm9ybUNsYXNze1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB9XG5cbiAgICAuYWRkQ2F0ZWdvcnlCdXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIC5hZGRDYXRlZ29yeUJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH0gKi9cblxuICAgIC5jYW5jZWxCdXR0b257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLmNhbmNlbEJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xuICAgICAgICAuZm9ybUNsYXNze1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG4iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/components/add-category/add-category.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/app/components/add-category/add-category.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AddCategoryComponent */

  /***/
  function srcModulesAppComponentsAddCategoryAddCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
      return AddCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddCategoryComponent = /*#__PURE__*/function () {
      function AddCategoryComponent( // private route: ActivatedRoute,
      router, fb, addCategoryService) {
        _classCallCheck(this, AddCategoryComponent);

        this.router = router;
        this.fb = fb;
        this.addCategoryService = addCategoryService;
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_4__["CategoryModel"].attributesLabels;
        this.im = {
          "id": 1,
          "name": "../../assets/img4.jpg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        };
        this.imageLink = this.im.name;
        this.quantity = 1;
        this.stockAvailability = 'IN STOCK';
        this.obj = {};
        this.loaded = false;
      }

      _createClass(AddCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.categoryModel = new _models__WEBPACK_IMPORTED_MODULE_4__["CategoryModel"]();
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_4__["CategoryModel"]().validationRules());
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "addCategory",
        value: function addCategory(category) {
          var _this = this;

          this.categoryModel = category;
          this.addCategoryService.create(this.categoryModel).subscribe(function (response) {
            _this.router.navigate(['home']);
          }, function (error) {
            console.log('error in add category ' + error);
          }, function () {});
        }
      }]);

      return AddCategoryComponent;
    }();

    AddCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["AddCategoryService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AddCategoryComponent.prototype, "onResize", null);
    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-category/add-category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.component.css */
      "./src/modules/app/components/add-category/add-category.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["AddCategoryService"]])], AddCategoryComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/add-product/add-product.component.css":
  /*!**************************************************************************!*\
    !*** ./src/modules/app/components/add-product/add-product.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsAddProductAddProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/**  \n    These are the design implementation for Top bar.\n**/\n.matCard {\n    background-color: black;\n  }\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n  }\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n  }\n.right-way {\n          color: rgb(226, 202, 62);\n          font-size: 25px;\n          font-family: 'Playfair Display', serif;\n          text-align: center;\n          /* background-image: url(../../../../assets/logo);  */\n          /* height: 64px;\n          padding-left: 0px;\n          margin-left: 0px;\n          overflow: hidden;\n          background-position: center;\n          background-size: cover; */\n    }\n/**\n    These are the other designs for the page\n    **/\n.productPage{\n        margin: 30px;\n    }\n.matClass{\n        margin-top: 10px;\n    }\n#right{\n        font-size: 12px;\n    }\n.prodLabel{\n        padding-bottom: 10px;\n        margin-left: 20px;\n        font-size: 12px;\n    }\n.img{\n        width: 100%;\n        height: 500px;\n    }\n.formClass{\n        margin-left: 25px;\n        font-family: 'Playfair Display', serif;\n    }\n.imageButton{\n        background-color: black;\n        color: white;\n        height: 40px;\n        margin-top: 10px;\n        margin-bottom: 15px;\n    }\n.imageButton:hover{\n        background-color: rgb(232, 235, 84);\n        color: black;\n        height: 40px;\n        margin-top: 10px;\n    }\n.done-status{\n          color: rgb(113, 185, 18);\n          margin-top: 20px;\n          font-weight: bold;\n      }\n.removeButton{\n          height: 40px;\n          margin-top: 10px;\n      }\n.uploadButton{\n        background-color: rgb(113, 185, 18);\n        color: white;\n        height: 40px;\n        margin-top: 10px;\n        margin-left: 15px;\n      }\n.progress-bar {\n        /* padding: 10px; */\n        margin-top: 10px;\n        margin-bottom: 20px;\n      }\n.removeAllButton{\n          margin-bottom: 15px!important;\n      }\n.addProductButton{\n        background-color: rgb(232, 235, 84);\n        color: black;\n        height: 40px;\n    }\n.cancelButton{\n        background-color: black;\n        color: white;\n        margin-left: 25px;\n        height: 40px;\n    }\n.cancelButton:hover{\n        background-color: rgb(232, 235, 84);\n        color: black;\n    }\n.hidden-file {\n        visibility: hidden; \n        position: absolute;\n        overflow: hidden; \n        width: 0px; \n        height:0px;\n        border:none;\n        margin:0; \n        padding:0\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjtJQUNJLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0FBSUU7VUFDTSx3QkFBd0I7VUFDeEIsZUFBZTtVQUNmLHNDQUFzQztVQUN0QyxrQkFBa0I7VUFDbEIscURBQXFEO1VBQ3JEOzs7OzttQ0FLeUI7SUFDL0I7QUFFQTs7TUFFRTtBQUVGO1FBQ0ksWUFBWTtJQUNoQjtBQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBRUE7UUFDSSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBRUE7UUFDSSxpQkFBaUI7UUFDakIsc0NBQXNDO0lBQzFDO0FBRUE7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0E7UUFDSSxtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7QUFFRTtVQUNJLHdCQUF3QjtVQUN4QixnQkFBZ0I7VUFDaEIsaUJBQWlCO01BQ3JCO0FBRUE7VUFDSSxZQUFZO1VBQ1osZ0JBQWdCO01BQ3BCO0FBRUE7UUFDRSxtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsaUJBQWlCO01BQ25CO0FBRUE7UUFDRSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtNQUNyQjtBQUVBO1VBQ0ksNkJBQTZCO01BQ2pDO0FBRUY7UUFDSSxtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFFQTtRQUNJLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7QUFFQTtRQUNJLG1DQUFtQztRQUNuQyxZQUFZO0lBQ2hCO0FBRUU7UUFDRSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxRQUFRO1FBQ1I7TUFDRiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqICBcbiAgICBUaGVzZSBhcmUgdGhlIGRlc2lnbiBpbXBsZW1lbnRhdGlvbiBmb3IgVG9wIGJhci5cbioqL1xuLm1hdENhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAubWF0Q2FyZEJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgfVxuICBcbiAgLm1hdEhlYWRpbmcge1xuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH0gICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgLnJpZ2h0LXdheSB7XG4gICAgICAgICAgY29sb3I6IHJnYigyMjYsIDIwMiwgNjIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9sb2dvKTsgICovXG4gICAgICAgICAgLyogaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgICB9XG5cbiAgICAvKipcbiAgICBUaGVzZSBhcmUgdGhlIG90aGVyIGRlc2lnbnMgZm9yIHRoZSBwYWdlXG4gICAgKiovXG5cbiAgICAucHJvZHVjdFBhZ2V7XG4gICAgICAgIG1hcmdpbjogMzBweDtcbiAgICB9XG5cbiAgICAubWF0Q2xhc3N7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgI3JpZ2h0e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLnByb2RMYWJlbHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxuXG4gICAgLmZvcm1DbGFzc3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIH1cblxuICAgIC5pbWFnZUJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAuaW1hZ2VCdXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAgIC5kb25lLXN0YXR1c3tcbiAgICAgICAgICBjb2xvcjogcmdiKDExMywgMTg1LCAxOCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLnJlbW92ZUJ1dHRvbntcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnVwbG9hZEJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMTg1LCAxOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yZW1vdmVBbGxCdXR0b257XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAuYWRkUHJvZHVjdEJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5jYW5jZWxCdXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLmNhbmNlbEJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAgIC5oaWRkZW4tZmlsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgIHdpZHRoOiAwcHg7IFxuICAgICAgICBoZWlnaHQ6MHB4O1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgbWFyZ2luOjA7IFxuICAgICAgICBwYWRkaW5nOjBcbiAgICAgIH0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/components/add-product/add-product.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/app/components/add-product/add-product.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcModulesAppComponentsAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../snack-bar/snack-bar.component */
    "./src/modules/app/components/snack-bar/snack-bar.component.ts"); // import {MatDialog} from '@angular/material';


    var uploadAPI = 'http://localhost:3000/product/uploadImage';

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent( // private route: ActivatedRoute,
      router, fb, productService, categoryService, sizeService, sharedDataService, colorService, snackBar // public dialog: MatDialog,
      // public matDialog: MatDialog,
      ) {
        _classCallCheck(this, AddProductComponent);

        this.router = router;
        this.fb = fb;
        this.productService = productService;
        this.categoryService = categoryService;
        this.sizeService = sizeService;
        this.sharedDataService = sharedDataService;
        this.colorService = colorService;
        this.snackBar = snackBar;
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_4__["ProductModel"].attributesLabels;
        this.seasonList = ['Summer', 'Winter', 'Autum', 'Spring'];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({
          url: uploadAPI
        });
        this.im = {
          "id": 1,
          "name": "../../assets/im8.jpeg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        };
        this.imageLink = this.im.name;
        this.quantity = 1;
        this.stockAvailability = 'IN STOCK';
        this.obj = {};
        this.loaded = false;
      } // File Uploader
      // public uploader: FileUploader = new FileUploader({ 
      //   url: uploadAPI, 
      //   itemAlias: 'file',
      //   allowedFileType: ['image']
      // });


      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // File Upload Code
          // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = true; };
          // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          //      console.log('FileUpload:uploaded successfully:', item, status, response);
          //      alert('Your file has been uploaded successfully');
          // };
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.getCategoryList();
          this.getSizeList();
          this.getColorList();
          this.productModel = new _models__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]();
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]().validationRules());
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this2 = this;

          this.categoryService.findAll().subscribe(function (response) {
            _this2.categoryList = response;
            console.log('category List -->>' + _this2.categoryList);
          }, function (error) {
            return console.log(error);
          }, function () {});
        }
      }, {
        key: "getSizeList",
        value: function getSizeList() {
          var _this3 = this;

          this.sizeService.findAll().subscribe(function (response) {
            _this3.sizeList = response;
          }, function (error) {
            return console.log(error);
          }, function () {});
        }
      }, {
        key: "getColorList",
        value: function getColorList() {
          var _this4 = this;

          this.colorService.findAll().subscribe(function (response) {
            _this4.colorList = response;
          }, function (error) {
            return console.log(error);
          }, function () {});
        }
      }, {
        key: "addProduct",
        value: function addProduct(product) {
          var _this5 = this;

          this.productModel = product;
          this.productModel.url = this.imageURL; // No need of url now. we will work on it if needed.

          if (this.uploader.queue.length == 0) {
            this.productModel.url = null;
          } // No need of type now. we will work on it if needed.


          if (this.productModel.type == null) {
            this.productModel.type = this.productModel.name;
          }

          this.productModel.sold = 0;

          if (this.productModel.url != null) {
            this.productService.create(this.productModel).subscribe(function (response) {
              if (response['error']) {
                _this5.snackBar.open('Product Already exist.', 'Dismiss', {
                  duration: 3000
                });
              } else {
                _this5.snackBar.open('Product Added Successfully.', 'Dismiss', {
                  duration: 3000
                });

                _this5.router.navigate(['home']);
              }
            }, function (error) {
              _this5.snackBar.open('Error Occured.', 'Dismiss', {
                duration: 3000
              });
            }, function () {});
          } else {
            this.snackBar.open('Upload Image First.', 'Dismiss', {
              duration: 3000
            }); // alert('Your have to upload image first.');
          }
        }
      }, {
        key: "uploadImage",
        value: function uploadImage() {
          var _this6 = this;

          var res = this.uploader.uploadAll();

          this.uploader.onCompleteItem = function (item, response, status, headers) {
            var resp = JSON.parse(response);

            if (resp['success'] == true) {
              _this6.snackBar.openFromComponent(_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_8__["SnackBarComponent"], {
                duration: 3 * 1000
              });

              _this6.imageURL = resp['file']['filename'];
            }
          };
        }
      }, {
        key: "checkItem",
        value: function checkItem(item) {
          item.upload(); // this.isReady = true;
          // console.log('item  =>>>', item)
        }
      }, {
        key: "cancelClick",
        value: function cancelClick() {}
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AddCategoryService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["SizeService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["ColorService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AddProductComponent.prototype, "onResize", null);
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-product/add-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-product.component.css */
      "./src/modules/app/components/add-product/add-product.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _services__WEBPACK_IMPORTED_MODULE_5__["AddCategoryService"], _services__WEBPACK_IMPORTED_MODULE_5__["SizeService"], _services__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _services__WEBPACK_IMPORTED_MODULE_5__["ColorService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] // public dialog: MatDialog,
    // public matDialog: MatDialog,
    ])], AddProductComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/add-to-cart/add-to-cart.component.css":
  /*!**************************************************************************!*\
    !*** ./src/modules/app/components/add-to-cart/add-to-cart.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsAddToCartAddToCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/**  \n    These are the design implementation for Top bar.\n**/\n.matCard {\n    background-color: black;\n  }\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n  }\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n  }\n.right-way {\n          color: rgb(226, 202, 62);\n          font-size: 25px;\n          font-family: 'Playfair Display', serif;\n          text-align: center;\n    }\n/**\n    These are the other designs for the page\n    **/\n.productPage{\n        margin: 30px;\n    }\n/* .pagePath{\n        margin: 15px;\n        font-size: 12px;\n        font-family: \"Montserrat\";\n        background-color: whitesmoke;\n    }\n    .sign{\n        font-size: 10px;\n        margin-left: 3px;\n        margin-right: 6px;\n    } */\n.text-style{\n        color: #696666;\n        font-family: \"Montserrat\";\n        font-size: 16px;\n    }\n.cartLabel{\n        font-family: \"Montserrat\";\n        font-size: 22px;\n        margin-bottom: 15px;\n    }\n.margin-top {\n        margin-top: 20px;\n        font-family: \"Montserrat\";\n        color: #494848;\n    }\n.img{\n        width: 80%;\n        height: 100px;\n    }\n.margin-left {\n        margin-left: 20px;\n    }\n.removeButton{\n        height: 40px;\n        /* margin-top: 10px; */\n    }\n.button-style{\n        margin-top: 25px;\n    }\n.continueShopping{\n        background-color: black;\n        color: white;\n        height: 40px;\n        margin-right: 20px;\n    }\n.continueShopping:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n.removeItems{\n        background-color: black;\n        color: white;\n        height: 40px;\n        margin-right: 20px;\n    }\n.removeItems:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n/*\n    * Order Portion CSS\n    */\n.orderLabel{\n        font-family: \"Montserrat\";\n        font-size: 22px;\n        margin-bottom: 15px;\n    }\n.totalLabel{\n        margin-top: 35px;\n        font-family: \"Montserrat\";\n        color: #696666;\n    }\n.itemLabel{\n        margin-top: 35px;\n        font-family: \"Montserrat\";\n        color: #494848;\n    }\n.proceed{\n        background-color: black;\n        margin-top: 30px;\n        font-size: 18px;\n        color: white;\n        font-family: \"Montserrat\";\n        height: 40px;\n        margin-right: 20px;\n    }\n.proceed:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n@media(max-width:680px){\n        .totalLabel{\n            margin-top: 30px;\n            font-family: \"Montserrat\";\n            color: #696666;\n            font-size: 14px;\n        }\n    \n        .itemLabel{\n            margin-top: 30px;\n            font-family: \"Montserrat\";\n            color: #494848;\n            font-size: 14px;\n        }\n        .orderLabel{\n            font-family: \"Montserrat\";\n            font-size: 22px;\n            margin-bottom: 5px;\n        }\n        .cartLabel{\n            font-family: \"Montserrat\";\n            font-size: 22px;\n            margin-bottom: 15px;\n            margin-top: 20px;\n        }\n        .img{\n            height: 150px;\n            width: 75px;\n            margin-top: 15px;\n            /* margin-left: 50%;\n            margin-right: 50%; */\n        }\n        .productPage{\n            margin: 15px;\n        }\n        .removeButton{\n            height: 40px;\n            width: 120px;\n            margin-top: 10px;\n        }\n        .continueShopping{\n            margin-bottom: 10px;\n        }\n        .nameLabel{\n            font-weight: bold;\n            font-size: 18px;\n            text-align: center;\n        }\n        .marginColor{\n            margin-bottom: 6px;\n            margin-right: 30px;\n            color: #494848;\n            font-size: 14px;\n\n        }\n        .marginColor1{\n            margin-bottom: 6px;\n            color: #696666;\n            font-size: 14px;\n        }\n        .margin-left{\n            margin-left: 20px;\n            margin-top: 20px;\n        }\n    }\n/*#right{\n        font-size: 12px;\n    }\n\n    .prodLabel{\n        padding-bottom: 10px;\n        margin-left: 20px;\n        font-size: 12px;\n    }\n\n\n    .formClass{\n        margin-left: 25px;\n        font-family: 'Playfair Display', serif;\n    }\n\n    .addCategoryButton{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n    }\n\n    .cancelButton{\n        margin-left: 20px;\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n\n    .cancelButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2FkZC10by1jYXJ0L2FkZC10by1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjtJQUNJLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0FBSUU7VUFDTSx3QkFBd0I7VUFDeEIsZUFBZTtVQUNmLHNDQUFzQztVQUN0QyxrQkFBa0I7SUFDeEI7QUFFQTs7TUFFRTtBQUVGO1FBQ0ksWUFBWTtJQUNoQjtBQUNBOzs7Ozs7Ozs7O09BVUc7QUFDSDtRQUNJLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsZUFBZTtJQUNuQjtBQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7QUFFQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtBQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7SUFDakI7QUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksWUFBWTtRQUNaLHNCQUFzQjtJQUMxQjtBQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBRUE7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7QUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO0lBQ2hCO0FBRUE7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7QUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO0lBQ2hCO0FBRUE7O0tBRUM7QUFFRDtRQUNJLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0FBRUE7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7QUFFQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtBQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0FBRUE7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtJQUNoQjtBQUVBO1FBQ0k7WUFDSSxnQkFBZ0I7WUFDaEIseUJBQXlCO1lBQ3pCLGNBQWM7WUFDZCxlQUFlO1FBQ25COztRQUVBO1lBQ0ksZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6QixjQUFjO1lBQ2QsZUFBZTtRQUNuQjtRQUNBO1lBQ0kseUJBQXlCO1lBQ3pCLGVBQWU7WUFDZixrQkFBa0I7UUFDdEI7UUFDQTtZQUNJLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLGdCQUFnQjtRQUNwQjtRQUNBO1lBQ0ksYUFBYTtZQUNiLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEI7Z0NBQ29CO1FBQ3hCO1FBQ0E7WUFDSSxZQUFZO1FBQ2hCO1FBQ0E7WUFDSSxZQUFZO1lBQ1osWUFBWTtZQUNaLGdCQUFnQjtRQUNwQjtRQUNBO1lBQ0ksbUJBQW1CO1FBQ3ZCO1FBQ0E7WUFDSSxpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGtCQUFrQjtRQUN0QjtRQUNBO1lBQ0ksa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTs7UUFFbkI7UUFDQTtZQUNJLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtRQUNuQjtRQUNBO1lBQ0ksaUJBQWlCO1lBQ2pCLGdCQUFnQjtRQUNwQjtJQUNKO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0NHIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2FkZC10by1jYXJ0L2FkZC10by1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogIFxuICAgIFRoZXNlIGFyZSB0aGUgZGVzaWduIGltcGxlbWVudGF0aW9uIGZvciBUb3AgYmFyLlxuKiovXG4ubWF0Q2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5tYXRDYXJkQnV0dG9ucyBidXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICB9XG4gIFxuICAubWF0SGVhZGluZyB7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfSAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAucmlnaHQtd2F5IHtcbiAgICAgICAgICBjb2xvcjogcmdiKDIyNiwgMjAyLCA2Mik7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICBUaGVzZSBhcmUgdGhlIG90aGVyIGRlc2lnbnMgZm9yIHRoZSBwYWdlXG4gICAgKiovXG5cbiAgICAucHJvZHVjdFBhZ2V7XG4gICAgICAgIG1hcmdpbjogMzBweDtcbiAgICB9XG4gICAgLyogLnBhZ2VQYXRoe1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIH1cbiAgICAuc2lnbntcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9ICovXG4gICAgLnRleHQtc3R5bGV7XG4gICAgICAgIGNvbG9yOiAjNjk2NjY2O1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAuY2FydExhYmVse1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAubWFyZ2luLXRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgfVxuXG4gICAgLmltZ3tcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAubWFyZ2luLWxlZnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gICAgLnJlbW92ZUJ1dHRvbntcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xuICAgIH1cblxuICAgIC5idXR0b24tc3R5bGV7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRpbnVlU2hvcHBpbmd7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5jb250aW51ZVNob3BwaW5nOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxODksIDgpO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLnJlbW92ZUl0ZW1ze1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAucmVtb3ZlSXRlbXM6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAvKlxuICAgICogT3JkZXIgUG9ydGlvbiBDU1NcbiAgICAqL1xuXG4gICAgLm9yZGVyTGFiZWx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIC50b3RhbExhYmVse1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGNvbG9yOiAjNjk2NjY2O1xuICAgIH1cblxuICAgIC5pdGVtTGFiZWx7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgfVxuXG4gICAgLnByb2NlZWR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAucHJvY2VlZDpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6NjgwcHgpe1xuICAgICAgICAudG90YWxMYWJlbHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgICAgICBjb2xvcjogIzY5NjY2NjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaXRlbUxhYmVse1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgICAgIGNvbG9yOiAjNDk0ODQ4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcmRlckxhYmVse1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJ0TGFiZWx7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIC8qIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwJTsgKi9cbiAgICAgICAgfVxuICAgICAgICAucHJvZHVjdFBhZ2V7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlbW92ZUJ1dHRvbntcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRpbnVlU2hvcHBpbmd7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lTGFiZWx7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWFyZ2luQ29sb3J7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzQ5NDg0ODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICB9XG4gICAgICAgIC5tYXJnaW5Db2xvcjF7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzY5NjY2NjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAubWFyZ2luLWxlZnR7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuXG4gICAgIFxuXG4gICAgLyojcmlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAucHJvZExhYmVse1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cblxuICAgIC5mb3JtQ2xhc3N7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICB9XG5cbiAgICAuYWRkQ2F0ZWdvcnlCdXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5jYW5jZWxCdXR0b257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLmNhbmNlbEJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH0gKi9cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/add-to-cart/add-to-cart.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/app/components/add-to-cart/add-to-cart.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddToCartComponent */

  /***/
  function srcModulesAppComponentsAddToCartAddToCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function () {
      return AddToCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../main-nav/main-nav.component */
    "./src/modules/app/components/main-nav/main-nav.component.ts");

    var AddToCartComponent = /*#__PURE__*/function () {
      function AddToCartComponent( // private route: ActivatedRoute,
      fb, sharedDataService) {
        _classCallCheck(this, AddToCartComponent);

        this.fb = fb;
        this.sharedDataService = sharedDataService;
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_4__["CartItemModel"].attributesLabels;
        this.im = {
          "id": 1,
          "name": "../../assets/im8.jpeg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        };
        this.imageLink = this.im.name;
        this.quantity = 1;
        this.stockAvailability = 'IN STOCK';
        this.obj = {};
        this.loaded = false;
        this.taxAmount = 0;
        this.itemsInCart = 0;
        this.deliveryCharges = 0;
        this.cart = [];
      }

      _createClass(AddToCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 680) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.addInCart();
          this.sharedDataService.currentMessage.subscribe(function (amount) {
            return _this7.amount = amount;
          });
          this.sharedDataService.currentItemsInCart.subscribe(function (items) {
            return _this7.itemsInCart = items;
          }); // console.log('add to cart message', this.message);
          // this.categoryModel = new CategoryModel();
          // this.fg = this.fb.group(new CategoryModel().validationRules());
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 680) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        } // Change total amount of the order

      }, {
        key: "newMessage",
        value: function newMessage() {
          this.sharedDataService.changeAmount(this.total);
        } // change number of items added in Shopping Cart

      }, {
        key: "changeItemsTotal",
        value: function changeItemsTotal() {
          this.sharedDataService.changeItemsInCart(this.itemsInCart);
        }
      }, {
        key: "addInCart",
        value: function addInCart() {
          var item = JSON.parse(sessionStorage.getItem('product'));

          if (item == undefined) {
            this.loadCart();
          } else {
            if (sessionStorage.getItem('cart') == null) {
              this.cart.push(JSON.stringify(item));
              sessionStorage.setItem('cart', JSON.stringify(this.cart));
              this.loadCart();
            } else {
              this.cart = JSON.parse(sessionStorage.getItem('cart'));
              this.cart.push(JSON.stringify(item));
              sessionStorage.setItem('cart', JSON.stringify(this.cart));
              this.loadCart();
            }

            sessionStorage.removeItem('product');
          }
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          this.totalAmount = 0;
          this.taxAmount = 0;
          this.total = 0;
          this.itemsInCart = 0;
          this.deliveryCharges = 0;
          this.items = [];

          if (sessionStorage.getItem('cart') != null) {
            this.cart = JSON.parse(sessionStorage.getItem('cart'));

            for (var i = 0; i < this.cart.length; i++) {
              this.item = JSON.parse(this.cart[i]);
              this.items.push(this.item);
              this.totalAmount += this.item.price * this.item.quantity;
              this.itemsInCart += 1 * this.item.quantity;
            }

            this.taxAmount = this.totalAmount * 0 / 100;

            if (this.totalAmount > 0) {
              this.deliveryCharges = 200;
            }

            this.total = this.totalAmount + this.taxAmount + this.deliveryCharges;
            this.total = Math.floor(this.total);
            this.newMessage();
            this.changeItemsTotal();
          }
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          this.cart = JSON.parse(sessionStorage.getItem('cart'));
          var index = -1;

          for (var i = 0; i < this.cart.length; i++) {
            var item = JSON.parse(this.cart[i]);

            if (item.id == id) {
              this.cart.splice(i, 1);
              break;
            }
          }

          sessionStorage.setItem("cart", JSON.stringify(this.cart));
          this.loadCart(); // this.mainNavComponent.ngOnInit();
        }
      }, {
        key: "removeItems",
        value: function removeItems() {
          sessionStorage.removeItem('cart');
          this.loadCart();
        }
      }]);

      return AddToCartComponent;
    }();

    AddToCartComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"])], AddToCartComponent.prototype, "mainNavComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AddToCartComponent.prototype, "onResize", null);
    AddToCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-to-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-to-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/add-to-cart/add-to-cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-to-cart.component.css */
      "./src/modules/app/components/add-to-cart/add-to-cart.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])], AddToCartComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/color/color.component.css":
  /*!**************************************************************!*\
    !*** ./src/modules/app/components/color/color.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsColorColorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/**  \n    These are the design implementation for Top bar.\n**/\n.matCard {\n    background-color: black;\n  }\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n  }\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n  }\n.right-way {\n          color: rgb(226, 202, 62);\n          font-size: 25px;\n          font-family: 'Playfair Display', serif;\n          text-align: center;\n    }\n/**\n    These are the other designs for the page\n    **/\n.productPage{\n        margin: 30px;\n    }\n#right{\n        font-size: 12px;\n    }\n.prodLabel{\n        padding-bottom: 10px;\n        margin-left: 20px;\n        font-size: 12px;\n    }\n.img{\n        width: 100%;\n        height: 500px;\n    }\n.formClass{\n        margin-left: 25px;\n    }\n.addCategoryButton{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n    }\n/* .addCategoryButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    } */\n.cancelButton{\n        margin-left: 20px;\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n.cancelButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n@media(max-width:600px){\n    .formClass{\n        margin-left: 15px;\n        margin-right: 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2NvbG9yL2NvbG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjtJQUNJLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0FBSUU7VUFDTSx3QkFBd0I7VUFDeEIsZUFBZTtVQUNmLHNDQUFzQztVQUN0QyxrQkFBa0I7SUFDeEI7QUFFQTs7TUFFRTtBQUVGO1FBQ0ksWUFBWTtJQUNoQjtBQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjtBQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBRUE7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFFQTs7O09BR0c7QUFFSDtRQUNJLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO0lBQ2hCO0FBQ0o7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9jb2xvci9jb2xvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqICBcbiAgICBUaGVzZSBhcmUgdGhlIGRlc2lnbiBpbXBsZW1lbnRhdGlvbiBmb3IgVG9wIGJhci5cbioqL1xuLm1hdENhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAubWF0Q2FyZEJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgfVxuICBcbiAgLm1hdEhlYWRpbmcge1xuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH0gICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgLnJpZ2h0LXdheSB7XG4gICAgICAgICAgY29sb3I6IHJnYigyMjYsIDIwMiwgNjIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgVGhlc2UgYXJlIHRoZSBvdGhlciBkZXNpZ25zIGZvciB0aGUgcGFnZVxuICAgICoqL1xuXG4gICAgLnByb2R1Y3RQYWdle1xuICAgICAgICBtYXJnaW46IDMwcHg7XG4gICAgfVxuXG4gICAgI3JpZ2h0e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLnByb2RMYWJlbHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxuXG4gICAgLmZvcm1DbGFzc3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLmFkZENhdGVnb3J5QnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxODksIDgpO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiAuYWRkQ2F0ZWdvcnlCdXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9ICovXG5cbiAgICAuY2FuY2VsQnV0dG9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5jYW5jZWxCdXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAuZm9ybUNsYXNze1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/components/color/color.component.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/app/components/color/color.component.ts ***!
    \*************************************************************/

  /*! exports provided: ColorComponent */

  /***/
  function srcModulesAppComponentsColorColorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorComponent", function () {
      return ColorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ColorComponent = /*#__PURE__*/function () {
      function ColorComponent( // private route: ActivatedRoute,
      router, fb, colorService) {
        _classCallCheck(this, ColorComponent);

        this.router = router;
        this.fb = fb;
        this.colorService = colorService;
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_4__["ColorModel"].attributesLabels;
        this.im = {
          "id": 1,
          "name": "../../assets/img4.jpg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        };
        this.imageLink = this.im.name;
        this.quantity = 1;
        this.stockAvailability = 'IN STOCK';
        this.obj = {};
        this.loaded = false;
      }

      _createClass(ColorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.colorModel = new _models__WEBPACK_IMPORTED_MODULE_4__["ColorModel"]();
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_4__["ColorModel"]().validationRules());
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "addColor",
        value: function addColor(color) {
          var _this8 = this;

          this.colorModel = color;
          this.colorService.create(this.colorModel).subscribe(function (response) {
            _this8.router.navigate(['home']);
          }, function (error) {
            console.log('error in add color ' + error);
          }, function () {});
        }
      }]);

      return ColorComponent;
    }();

    ColorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ColorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ColorComponent.prototype, "onResize", null);
    ColorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-color',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./color.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/color/color.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./color.component.css */
      "./src/modules/app/components/color/color.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["ColorService"]])], ColorComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/contact-us/contact-us.component.css":
  /*!************************************************************************!*\
    !*** ./src/modules/app/components/contact-us/contact-us.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsContactUsContactUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.contact{\n    font-family: \"Montserrat\";\n}\n.contactHeading{\n    font-size: 24px;\n    font-family: \"Montserrat\";\n    padding-top: 25px !important;\n    margin-left: 20px;\n    font-weight: bold;\n    text-align: center;\n}\n.contactMatcard{\n    margin-top: 30px;\n    overflow: hidden;\n    /* text-align: center; */\n}\n.imageMatCard{\n    overflow: hidden;\n    /* padding: 0px !important; */\n}\n.contactToolbar{\n    margin: 10px;\n    font-size: 12px;\n    font-family: \"Montserrat\";\n    background-color: whitesmoke;\n}\n.sign{\n    font-size: 10px;\n    margin-left: 5px;\n    margin-right: 10px;\n}\np{\n    font-size: 16px;\n    font-family: \"Montserrat\";\n    line-height: 18px;\n    color: rgb(46, 45, 45);\n    margin-left: 10%;\n    margin-right: 10%;\n}\nlabel{\n    font-size: 20px;\n    margin-bottom: 20px;\n    font-family: \"Montserrat\";\n    font-weight: bold;\n}\n.setMargin{\n    margin-left: 20px;\n    margin-bottom: 5px;\n}\n.setMargin span{\n    margin-left: 20px;\n    /* margin-bottom: 5px; */\n}\n.labelMargin{\n    margin-top: 30px;\n}\n.marginBottom{\n    margin-bottom: 25px;\n}\n.imgIcon{\n    height: 30px;\n    margin-right: 25px;\n\t  transform: scale(1);\n   transition: .3s ease-in-out;\n}\n.imgIcon:hover{\n    transform: scale(1.3);\n      opacity: 1;\n      cursor: pointer;\n    color: blue;\n}\n/**\n  CSS FOR IMAGE SLIDER ANIMATION\n  **/\n.imgSlider{\n      height: 400px;\n      /* width: 100%; */\n      margin-left: 10%;\n      margin-right: 10%;\n    /* animation: myfirst 3s linear infinite; */\n  }\n/* @keyframes myfirst {\n      0% {\n          transform: scale(1,1);\n      }\n      80% {\n          transform: scale(1.2,1.2);\n      }\n      100% {\n          transform: scale(1,1);\n      }\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtHQUVuQixtQkFBbUI7R0FFbEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFFTSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGVBQWU7SUFDakIsV0FBVztBQUNmO0FBQ0U7O0lBRUU7QUFDRjtNQUNJLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQiwyQ0FBMkM7RUFDN0M7QUFDQTs7Ozs7Ozs7OztLQVVHIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFjdHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG4uY29udGFjdEhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICBwYWRkaW5nLXRvcDogMjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0TWF0Y2FyZHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuLmltYWdlTWF0Q2FyZHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyAqL1xufVxuLmNvbnRhY3RUb29sYmFye1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4uc2lnbntcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5we1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6IHJnYig0NiwgNDUsIDQ1KTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxubGFiZWx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNldE1hcmdpbntcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc2V0TWFyZ2luIHNwYW57XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogNXB4OyAqL1xufVxuLmxhYmVsTWFyZ2lue1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubWFyZ2luQm90dG9te1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uaW1nSWNvbntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0ICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHQgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cbi5pbWdJY29uOmhvdmVye1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogYmx1ZTtcbn1cbiAgLyoqXG4gIENTUyBGT1IgSU1BR0UgU0xJREVSIEFOSU1BVElPTlxuICAqKi9cbiAgLmltZ1NsaWRlcntcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICAvKiBhbmltYXRpb246IG15Zmlyc3QgM3MgbGluZWFyIGluZmluaXRlOyAqL1xuICB9XG4gIC8qIEBrZXlmcmFtZXMgbXlmaXJzdCB7XG4gICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO1xuICAgICAgfVxuICAgICAgODAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwxLjIpO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO1xuICAgICAgfVxuICB9ICovIl19 */";
    /***/
  },

  /***/
  "./src/modules/app/components/contact-us/contact-us.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/app/components/contact-us/contact-us.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcModulesAppComponentsContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);

        this.image = 'assets/img1.jpg';
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }]);

      return ContactUsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ContactUsComponent.prototype, "onResize", null);
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/contact-us/contact-us.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us.component.css */
      "./src/modules/app/components/contact-us/contact-us.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ContactUsComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/footer/footer.component.css":
  /*!****************************************************************!*\
    !*** ./src/modules/app/components/footer/footer.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.footer{\n    background-color: whitesmoke;\n}\n.labelHeading{\n    font-size: 20px;\n    font-weight: bold;\n    margin: 30px;\n}\n.setMargin{\n    margin-left: 30px;\n    margin-bottom: 5px;\n}\n.imgIcon{\n    height: 30px;\n    margin-right: 25px;\n\t  transform: scale(1);\n   transition: .3s ease-in-out;\n}\n.imgIcon:hover{\n    transform: scale(1.3);\n      opacity: 1;\n      cursor: pointer;\n}\nlabel{\n    margin-left: 30px;\n    margin-bottom: 10px;\n}\nlabel:hover{\n    cursor: pointer;\n    opacity: 0.7;\n}\n@media(max-width:600px){\n    label{\n        margin-left: 50px;\n        margin-bottom: 10px;\n    }\n    .setMargin{\n        margin-left: 50px;\n        margin-bottom: 5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtHQUVuQixtQkFBbUI7R0FFbEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFFTSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGVBQWU7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5sYWJlbEhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMzBweDtcbn1cbi5zZXRNYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmltZ0ljb257XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0ICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaW1nSWNvbjpob3ZlcntcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5sYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxubGFiZWw6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNztcbn1cbkBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xuICAgIGxhYmVse1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLnNldE1hcmdpbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/app/components/footer/footer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/app/components/footer/footer.component.ts ***!
    \***************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcModulesAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }]);

      return FooterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FooterComponent.prototype, "onResize", null);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/modules/app/components/footer/footer.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/home/home.component.css":
  /*!************************************************************!*\
    !*** ./src/modules/app/components/home/home.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/**\n  CSS FOR TOOLBAR\n  **/\n.matCard {\n  background-color: #e2e2e2;\n}\n.matCardButtons button:hover{\n  color: rgb(232, 235, 84);\n}\n.matHeading {\n  color: rgb(7, 7, 7);\n  margin-right: 20px;\n}\n.right-way {\n        color: rgb(226, 202, 62);\n        font-size: 25px;\n        font-family: 'Playfair Display', serif;\n        text-align: center;\n  }\n/**\n  CSS FOR BODY OF HOME COMPONENT\n  **/\n.homePage{\n    /* background-color: black; */\n    padding-left: 50px;\n    padding-right: 50px;\n    font-family: \"Montserrat\", arial, tahoma;\n    /* margin-top: 50px; */\n  }\n.homeMatCard {\n    margin-top: 25px;\n    padding: 0px !important;\n  }\n/**\n  CSS FOR IMAGE AND HOVER IMAGE EFFECT\n  **/\n.img{\n    width: 100%;\n    height: 350px;\n\t  transform: scale(1);\n   transition: .3s ease-in-out;\n  }\n.img:hover {\n    transform: scale(1.3);\n      opacity: 1;\n      cursor: pointer;\n  }\n.img:hover+div {\n    bottom:20px;\n  }\n.imgOverflow{\n    overflow: hidden;\n    padding: 0px !important;\n  }\n/**  \n    FOR SHOWING UPTO 20% OFF ON IMAGE BUTTON\n**/\n.sliderText{\n  position: absolute;\n  bottom: 0px;\n  display: block;\n  text-align: center;\n  background-color: rgb(48, 49, 47);\n  color: white;\n  height: 60px;\n  /* margin-left: 10px ; */\n  width: 100% !important;\n  font-family: \"Montserrat\";\n  font-size: 12px;\n  transition: .3s ease-in-out;\n  opacity: 0.7;\n}\n.offHeading{\n  color: rgb(232, 235, 84);;\n}\n/**\n  CSS FOR TEXT BOX SHOW ON HOVER IMAGE\n  **/\n.hoverTextbox {\n    position: absolute;\n    bottom: -40px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 125px;\n    margin-left: 10px ;\n    width: 150px !important;\n    font-family: \"Montserrat\";\n    font-size: 12px;\n    transition: .3s ease-in-out;\n    opacity: 0;\n  }\n.img:hover+.hoverTextbox {\n    bottom: 200px;\n    opacity: 0.8;\n  }\n/**\n  CSS FOR TEXT BELOW THE IMAGES\n  **/\n.middle{\n    margin-right: 20%;\n    margin-left: 20%;\n    margin-bottom: 20px !important;\n    text-align: center;\n  }\n.text{\n    margin-top: 20%;\n    cursor: pointer;\n\t  transition: .3s ease-in-out;\n  }\n.text:hover{\n    margin-top: 20%;\n    font-weight: bold;\n    text-decoration: underline;\n  }\n.paragraph{\n    font-size: 12px;\n    line-height: 16px;\n  }\n.label{\n    font-size: 16px;\n    cursor: pointer;\n    text-decoration: underline;\n\t  transition: .3s ease-in-out;\n  }\n.label:hover{\n    font-weight: bold;\n    text-decoration: none;\n  }\n/**\n  CSS FOR IMAGE SLIDER ANIMATION\n  **/\n.imgSlider{\n    -webkit-animation: myfirst 3s linear infinite;\n            animation: myfirst 3s linear infinite;\n  }\n@-webkit-keyframes myfirst {\n      0% {\n          transform: scale(1,1);\n      }\n      80% {\n          transform: scale(1.2,1.2);\n      }\n      100% {\n          transform: scale(1,1);\n      }\n  }\n@keyframes myfirst {\n      0% {\n          transform: scale(1,1);\n      }\n      80% {\n          transform: scale(1.2,1.2);\n      }\n      100% {\n          transform: scale(1,1);\n      }\n  }\n.imgSlider:hover {\n      opacity: 1;\n  }\n.sliderMatCard{\n    padding: 0px;\n    overflow: hidden;\n  }\n.sliderText{\n    position: absolute;\n\t  bottom: 0px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 60px;\n    /* margin-left: 10px ; */\n    width: 100% !important;\n    font-family: \"Montserrat\";\n\t  font-size: 12px;\n\t  /* -webkit-transition: .3s ease-in-out;\n\t  transition: .3s ease-in-out; */\n\t  opacity: 0.7;\n  }\n@media(max-width:600px){\n\n  .homeMatCard{\n    /* margin-top: 25px; */\n    padding: 0px !important;\n    /* overflow: hidden; */\n  }\n  .imgOverflow{\n    overflow: hidden;\n    padding: 0px !important;\n  }\n  .homePage{\n    /* background-color: black; */\n    padding-left: 20px;\n    padding-right: 20px;\n    /* margin-top: 50px; */\n  }\n  .img{\n    width: 100%;\n    height: 550px;\n  }\n  .img:hover{\n    /* opacity: 0.8; */\n    cursor: pointer;\n  }\n  .offHeading{\n    color: rgb(232, 235, 84);;\n  }\n}\n@media(max-width:450px){\n  .img{\n    width: 100%;\n    height: 420px;\n  }\n  .img:hover+.hoverTextbox {\n    bottom: 180px;\n    opacity: 0.8;\n  }\n}\n@media(min-width:992px){\n  .img{\n    width: 100%;\n    height: 400px;\n  }\n  .img:hover+.hoverTextbox {\n    bottom: 180px;\n    opacity: 0.8;\n  }\n}\n/* input color class */\n/* ::ng-deep input.mat-input-element {\n    background-color: #fff !important;\n  } */\n/* Change label color on focused */\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n    color: #fff !important;\n  }\n/* underline border color on focused */\n::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple{\n    background-color: #fff !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO0FBQ0o7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUlFO1FBQ00sd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixzQ0FBc0M7UUFDdEMsa0JBQWtCO0VBQ3hCO0FBR0E7O0lBRUU7QUFDRjtJQUNFLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7QUFFQTs7SUFFRTtBQUNGO0lBQ0UsV0FBVztJQUNYLGFBQWE7R0FFZCxtQkFBbUI7R0FFbEIsMkJBQTJCO0VBQzdCO0FBQ0E7SUFFSSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGVBQWU7RUFDbkI7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6QjtBQUdGOztFQUVFO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVFOztJQUVFO0FBQ0Y7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFFQTs7SUFFRTtBQUNGO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtHQUVoQiwyQkFBMkI7RUFDNUI7QUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0VBQzVCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDBCQUEwQjtHQUUzQiwyQkFBMkI7RUFDNUI7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7QUFDQTs7SUFFRTtBQUNGO0lBQ0UsNkNBQXFDO1lBQXJDLHFDQUFxQztFQUN2QztBQUNBO01BQ0k7VUFDSSxxQkFBcUI7TUFDekI7TUFDQTtVQUNJLHlCQUF5QjtNQUM3QjtNQUNBO1VBQ0kscUJBQXFCO01BQ3pCO0VBQ0o7QUFWQTtNQUNJO1VBQ0kscUJBQXFCO01BQ3pCO01BQ0E7VUFDSSx5QkFBeUI7TUFDN0I7TUFDQTtVQUNJLHFCQUFxQjtNQUN6QjtFQUNKO0FBQ0E7TUFDSSxVQUFVO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtCQUFrQjtHQUNuQixXQUFXO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtHQUMxQixlQUFlO0dBQ2Y7aUNBQzhCO0dBQzlCLFlBQVk7RUFDYjtBQUVGOztFQUVFO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBQ0Y7QUFFRSxzQkFBc0I7QUFDeEI7O0tBRUs7QUFFSCxrQ0FBa0M7QUFDcEM7SUFDSSxzQkFBc0I7RUFDeEI7QUFFRixzQ0FBc0M7QUFDdEM7SUFDSSxpQ0FBaUM7RUFDbkMiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgQ1NTIEZPUiBUT09MQkFSXG4gICoqL1xuLm1hdENhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xufVxuXG4ubWF0Q2FyZEJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG59XG5cbi5tYXRIZWFkaW5nIHtcbiAgY29sb3I6IHJnYig3LCA3LCA3KTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgLnJpZ2h0LXdheSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjI2LCAyMDIsIDYyKTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICAvKipcbiAgQ1NTIEZPUiBCT0RZIE9GIEhPTUUgQ09NUE9ORU5UXG4gICoqL1xuICAuaG9tZVBhZ2V7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBhcmlhbCwgdGFob21hO1xuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXG4gIH1cbiAgXG4gIC5ob21lTWF0Q2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qKlxuICBDU1MgRk9SIElNQUdFIEFORCBIT1ZFUiBJTUFHRSBFRkZFQ1RcbiAgKiovXG4gIC5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0ICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmltZzpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5pbWc6aG92ZXIrZGl2IHtcbiAgICBib3R0b206MjBweDtcbiAgfVxuICAuaW1nT3ZlcmZsb3d7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG5cbi8qKiAgXG4gICAgRk9SIFNIT1dJTkcgVVBUTyAyMCUgT0ZGIE9OIElNQUdFIEJVVFRPTlxuKiovXG4uc2xpZGVyVGV4dHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OSwgNDcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHggOyAqL1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMC43O1xufVxuLm9mZkhlYWRpbmd7XG4gIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTs7XG59XG5cbiAgLyoqXG4gIENTUyBGT1IgVEVYVCBCT1ggU0hPVyBPTiBIT1ZFUiBJTUFHRVxuICAqKi9cbiAgLmhvdmVyVGV4dGJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDksIDQ3KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweCA7XG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAuaW1nOmhvdmVyKy5ob3ZlclRleHRib3gge1xuICAgIGJvdHRvbTogMjAwcHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLyoqXG4gIENTUyBGT1IgVEVYVCBCRUxPVyBUSEUgSU1BR0VTXG4gICoqL1xuICAubWlkZGxle1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudGV4dHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHQgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAudGV4dDpob3ZlcntcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLnBhcmFncmFwaHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdCAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5sYWJlbDpob3ZlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLyoqXG4gIENTUyBGT1IgSU1BR0UgU0xJREVSIEFOSU1BVElPTlxuICAqKi9cbiAgLmltZ1NsaWRlcntcbiAgICBhbmltYXRpb246IG15Zmlyc3QgM3MgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIEBrZXlmcmFtZXMgbXlmaXJzdCB7XG4gICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO1xuICAgICAgfVxuICAgICAgODAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwxLjIpO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO1xuICAgICAgfVxuICB9XG4gIC5pbWdTbGlkZXI6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAuc2xpZGVyTWF0Q2FyZHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuc2xpZGVyVGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgYm90dG9tOiAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDksIDQ3KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4IDsgKi9cbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcblx0ICBmb250LXNpemU6IDEycHg7XG5cdCAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdCAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0OyAqL1xuXHQgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcblxuICAuaG9tZU1hdENhcmR7XG4gICAgLyogbWFyZ2luLXRvcDogMjVweDsgKi9cbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuICB9XG4gIC5pbWdPdmVyZmxvd3tcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lUGFnZXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAvKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xuICB9XG4gIC5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgfVxuICAuaW1nOmhvdmVye1xuICAgIC8qIG9wYWNpdHk6IDAuODsgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm9mZkhlYWRpbmd7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpOztcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjQ1MHB4KXtcbiAgLmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICB9XG4gIC5pbWc6aG92ZXIrLmhvdmVyVGV4dGJveCB7XG4gICAgYm90dG9tOiAxODBweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDo5OTJweCl7XG4gIC5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuICAuaW1nOmhvdmVyKy5ob3ZlclRleHRib3gge1xuICAgIGJvdHRvbTogMTgwcHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbiAgLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cbi8qIDo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9ICovXG4gIFxuICAvKiBDaGFuZ2UgbGFiZWwgY29sb3Igb24gZm9jdXNlZCAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuLyogdW5kZXJsaW5lIGJvcmRlciBjb2xvciBvbiBmb2N1c2VkICovXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/components/home/home.component.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/app/components/home/home.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcModulesAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../config */
    "./src/modules/app/config/index.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, route, fb, orderService, homeService, productService) {
        var _this9 = this;

        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.route = route;
        this.fb = fb;
        this.orderService = orderService;
        this.homeService = homeService;
        this.productService = productService;
        this.imageAddress = 'http://localhost:3000/';
        this.pageActions = _config__WEBPACK_IMPORTED_MODULE_6__["GLOBALS"].pageActions;
        this.imageInterval = [];
        this.imageInterval1 = [];
        this.imageInterval2 = []; // imageInterval=[
        //   'assets/img1.jpg','assets/img2.jpg',
        //   'assets/img3.jpg','assets/img4.jpg',
        //   'assets/img5.jpg','assets/img2.jpg',
        //   'assets/img3.jpg','assets/img4.jpg',
        //   'assets/img1.jpg','assets/img5.jpg',
        //   'assets/img3.jpg','assets/img4.jpg'
        // ];
        // imageInterval1=[[
        //   'assets/img1.jpg','assets/img2.jpg'],[
        //   'assets/img3.jpg','assets/img4.jpg'],[
        //   'assets/img5.jpg','assets/img2.jpg'],[
        //   'assets/img3.jpg','assets/img4.jpg'],[
        //   'assets/img1.jpg','assets/img5.jpg'],[
        //   'assets/img3.jpg','assets/img4.jpg']
        // ];
        // imageInterval2=[[
        //   'assets/img1.jpg','assets/img2.jpg',
        //   'assets/img3.jpg'],['assets/img4.jpg',
        //   'assets/img5.jpg','assets/img2.jpg'],[
        //   'assets/img3.jpg','assets/img4.jpg',
        //   'assets/img1.jpg'],['assets/img5.jpg',
        //   'assets/img3.jpg','assets/img4.jpg']
        // ];

        this.image = 'assets/img1.jpg';
        this.products = [{
          "id": 1,
          "name": "../../assets/img1.jpg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        }, {
          "id": 2,
          "name": "../../assets/img2.jpg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        }, {
          "id": 3,
          "name": "../../assets/img3.jpg",
          "description": "Sint libero mollitia",
          "price": "302.00",
          "quantity": 9358
        }, {
          "id": 4,
          "name": "../../assets/img4.jpg",
          "description": "In consequuntur cupiditat",
          "price": "279.00",
          "quantity": 90316
        }, {
          "id": 5,
          "name": "../../assets/img5.jpg",
          "description": "In consequuntur cupiditat",
          "price": "279.00",
          "quantity": 90316
        }, {
          "id": 6,
          "name": "../../assets/img1.jpg",
          "description": "Saepe nemo praesentium",
          "price": "760.00",
          "quantity": 5899
        }];
        setInterval(function () {
          _this9.imageClick();
        }, 3000);
        this.pageAct = route.snapshot.data['act'];
      } // email = new FormControl('', [<any>Validators.required, Validators.email]);


      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (this.pageAct == _config__WEBPACK_IMPORTED_MODULE_6__["GLOBALS"].pageActions.home) {
            this.productService.findAll().subscribe(function (response) {
              _this10.setImageArrays(response);

              _this10.page = 'Home';
            });
          } else if (this.pageAct == _config__WEBPACK_IMPORTED_MODULE_6__["GLOBALS"].pageActions.sale) {
            this.productService.findByDiscount(15).subscribe(function (response) {
              _this10.setImageArrays(response);

              _this10.page = 'Sale';
            });
          }

          if (this.pageAct == _config__WEBPACK_IMPORTED_MODULE_6__["GLOBALS"].pageActions.newArrival) {
            this.productService.findAll().subscribe(function (response) {
              _this10.setImageArrays(response);

              _this10.page = 'New Arrival';
            });
          }

          if (this.pageAct == _config__WEBPACK_IMPORTED_MODULE_6__["GLOBALS"].pageActions.summerCollection) {
            this.productService.findBySeason('Summer').subscribe(function (response) {
              _this10.setImageArrays(response);

              _this10.page = 'Summer Collection';
            });
          }

          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.url = 'http://localhost:3000/img1.jpg';
          this.notifyUser = new _models__WEBPACK_IMPORTED_MODULE_5__["NotifyUserModel"](); // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});

          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_5__["NotifyUserModel"]().validationRules()); // this.showTimer();
        }
      }, {
        key: "setImageArrays",
        value: function setImageArrays(response) {
          for (var i = 0; i < response['length']; i++) {
            if (i == 0) {
              this.image = this.imageAddress + response[i].url;
            }

            var obj = {
              id: response[i].id,
              url: this.imageAddress + response[i].url,
              name: response[i].name,
              description: response[i].description,
              discount: response[i].discount
            };
            this.imageInterval.push(obj);
          }

          var k1 = Math.floor(response['length'] / 2);

          for (var j = 0; j < k1; j = j + 1) {
            var obj1 = {
              id: response[j * 2].id,
              url: this.imageAddress + response[j * 2].url,
              name: response[j * 2].name,
              description: response[j * 2].description,
              discount: response[j * 2].discount
            };
            var obj2 = {
              id: response[j * 2 + 1].id,
              url: this.imageAddress + response[j * 2 + 1].url,
              name: response[j * 2 + 1].name,
              description: response[j * 2 + 1].description,
              discount: response[j * 2 + 1].discount
            }; // this.imageInterval1[j] = new Array(2);

            var arr = [obj1, obj2];
            this.imageInterval1.push(arr);
          }

          var k2 = Math.floor(response['length'] / 3);

          for (var _j = 0; _j < k2; _j = _j + 1) {
            var _obj = {
              id: response[_j * 3].id,
              url: this.imageAddress + response[_j * 3].url,
              name: response[_j * 3].name,
              description: response[_j * 3].description,
              discount: response[_j * 3].discount
            };
            var _obj2 = {
              id: response[_j * 3 + 1].id,
              url: this.imageAddress + response[_j * 3 + 1].url,
              name: response[_j * 3 + 1].name,
              description: response[_j * 3 + 1].description,
              discount: response[_j * 3 + 1].discount
            };
            var obj3 = {
              id: response[_j * 3 + 2].id,
              url: this.imageAddress + response[_j * 3 + 2].url,
              name: response[_j * 3 + 2].name,
              description: response[_j * 3 + 2].description,
              discount: response[_j * 3 + 2].discount
            };
            var _arr = [_obj, _obj2, obj3];
            this.imageInterval2.push(_arr); // this.imageInterval2[j].push(obj2);
            // this.imageInterval2[j].push(obj3);
          }
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "imageClick",
        value: function imageClick() {
          var length = this.imageInterval.length;

          for (var i = 0; i < length; i++) {
            if (this.imageInterval[i].url == this.image && i < length - 1) {
              this.image = this.imageInterval[i + 1].url;
              break;
            } else if (this.imageInterval[i].url == this.image && i == length - 1) {
              this.image = this.imageInterval[0].url;
              break;
            }
          }
        }
      }, {
        key: "getImages",
        value: function getImages() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HomeComponent.prototype, "onResize", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/modules/app/components/home/home.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_4__["OrderService"], _services__WEBPACK_IMPORTED_MODULE_4__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/app/components/index.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent, AboutComponent, LoginComponent, RegisterComponent, ProductComponent, AddProductComponent, AddCategoryComponent, AddToCartComponent, ShippingComponent, PaymentComponent, ColorComponent, SnackBarComponent, FooterComponent, ContactUsComponent, UnStitchComponent, OrderListComponent, OrderFormComponent, ProductListComponent, ProductFormComponent */

  /***/
  function srcModulesAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/modules/app/components/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"];
    });
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/modules/app/components/about/about.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"];
    });
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/modules/app/components/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"];
    });
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/modules/app/components/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"];
    });
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/modules/app/components/product/product.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"];
    });
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/modules/app/components/add-product/add-product.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"];
    });
    /* harmony import */


    var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-category/add-category.component */
    "./src/modules/app/components/add-category/add-category.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
      return _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"];
    });
    /* harmony import */


    var _add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-to-cart/add-to-cart.component */
    "./src/modules/app/components/add-to-cart/add-to-cart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function () {
      return _add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_8__["AddToCartComponent"];
    });
    /* harmony import */


    var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shipping/shipping.component */
    "./src/modules/app/components/shipping/shipping.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShippingComponent", function () {
      return _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_9__["ShippingComponent"];
    });
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./payment/payment.component */
    "./src/modules/app/components/payment/payment.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () {
      return _payment_payment_component__WEBPACK_IMPORTED_MODULE_10__["PaymentComponent"];
    });
    /* harmony import */


    var _color_color_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./color/color.component */
    "./src/modules/app/components/color/color.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColorComponent", function () {
      return _color_color_component__WEBPACK_IMPORTED_MODULE_11__["ColorComponent"];
    });
    /* harmony import */


    var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./snack-bar/snack-bar.component */
    "./src/modules/app/components/snack-bar/snack-bar.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function () {
      return _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_12__["SnackBarComponent"];
    });
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/modules/app/components/footer/footer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"];
    });
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/modules/app/components/contact-us/contact-us.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"];
    });
    /* harmony import */


    var _unstitch_unstitch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./unstitch/unstitch.component */
    "./src/modules/app/components/unstitch/unstitch.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UnStitchComponent", function () {
      return _unstitch_unstitch_component__WEBPACK_IMPORTED_MODULE_15__["UnStitchComponent"];
    });
    /* harmony import */


    var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./order/list/order-list.component */
    "./src/modules/app/components/order/list/order-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrderListComponent", function () {
      return _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__["OrderListComponent"];
    });
    /* harmony import */


    var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./order/form/order-form.component */
    "./src/modules/app/components/order/form/order-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function () {
      return _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_17__["OrderFormComponent"];
    });
    /* harmony import */


    var _products_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./products/list/product-list.component */
    "./src/modules/app/components/products/list/product-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return _products_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"];
    });
    /* harmony import */


    var _products_form_product_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./products/form/product-form.component */
    "./src/modules/app/components/products/form/product-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function () {
      return _products_form_product_form_component__WEBPACK_IMPORTED_MODULE_19__["ProductFormComponent"];
    }); // Components

    /***/

  },

  /***/
  "./src/modules/app/components/login/login.component.css":
  /*!**************************************************************!*\
    !*** ./src/modules/app/components/login/login.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.matCard {\n    background-color: black;\n}\n\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n}\n\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n}\n\n.image {\n    /* background-image: url(../../../../assets/im8.jpeg);  */\n    /* height: 100%; */\n    overflow:hidden;\n    background-color: whitesmoke;\n    background-position: center;\n    background-size: cover;\n  }\n\n.login-form{\n      margin-top: 30px;\n  }\n\n.login {\n      margin-left: 20px;\n  }\n\n.cancelButton{\n      margin-left: 10px;\n      /* background-color: rgb(54, 44, 44); */\n      background-color: black;\n      color: rgb(232, 235, 84);\n  }\n\n.cancelButton:hover{\n    /* background-color: rgb(54, 44, 44); */\n    background-color: black;\n    color: rgb(232, 235, 84);\n  }\n\n.saveButton{\n      /* background-color: rgb(54, 44, 44); */\n      background-color: black;\n      color: rgb(232, 235, 84);\n  }\n\n.label{\n    width: -moz-fit-content;\n  }\n\n.label:hover{\n    cursor: pointer;\n    text-decoration: underline;\n    /* color: rgb(232, 235, 84); */\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0VBQ3hCOztBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztBQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztBQUVBO01BQ0ksaUJBQWlCO01BQ2pCLHVDQUF1QztNQUN2Qyx1QkFBdUI7TUFDdkIsd0JBQXdCO0VBQzVCOztBQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2Qix3QkFBd0I7RUFDMUI7O0FBRUE7TUFDSSx1Q0FBdUM7TUFDdkMsdUJBQXVCO01BQ3ZCLHdCQUF3QjtFQUM1Qjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXRDYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1hdENhcmRCdXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG59XG5cbi5tYXRIZWFkaW5nIHtcbiAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaW1hZ2Uge1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW04LmpwZWcpOyAgKi9cbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAubG9naW4tZm9ybXtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuICAubG9naW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAuY2FuY2VsQnV0dG9ue1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDQ0LCA0NCk7ICovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgfVxuXG4gIC5jYW5jZWxCdXR0b246aG92ZXJ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA0NCwgNDQpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgfVxuXG4gIC5zYXZlQnV0dG9ue1xuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA0NCwgNDQpOyAqL1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gIH1cblxuICAubGFiZWx7XG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIH1cblxuICAubGFiZWw6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIC8qIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTsgKi9cbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/login/login.component.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/app/components/login/login.component.ts ***!
    \*************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcModulesAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, route, fb, loginService, snackBar, sharedDataService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.route = route;
        this.fb = fb;
        this.loginService = loginService;
        this.snackBar = snackBar;
        this.sharedDataService = sharedDataService;
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_4__["LoginModel"].attributesLabels;
      } // ngOnInit() {
      // }


      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.flexSize = 50;
          } else {
            this.flexSize = 80;
          }

          this.loginUser = new _models__WEBPACK_IMPORTED_MODULE_4__["LoginModel"]();
          this.sharedDataService.currentSuperUser.subscribe(function (superUser) {
            return _this11.isSuperUser = superUser;
          });
          this.sharedDataService.isUser.subscribe(function (user) {
            return _this11.user = user;
          }); // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});

          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_4__["LoginModel"]().validationRules()); // this.showTimer();
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.flexSize = 50;
          } else {
            this.flexSize = 80;
          }
        } // change super user value

      }, {
        key: "changeSuperUser",
        value: function changeSuperUser() {
          this.sharedDataService.changeSuperUser(this.isSuperUser);
        } // change user value

      }, {
        key: "changeUser",
        value: function changeUser() {
          this.sharedDataService.changeUser(this.user);
        } // getErrorMessage() {
        //   return this.email.hasError('required') ? 'You must enter email id' :
        //       this.email.hasError('email') ? 'Not a valid email' :
        //           '';
        // }

      }, {
        key: "onSave",
        value: function onSave(user) {
          var _this12 = this;

          this.loginUser = user;
          this.loginService.login(this.loginUser).subscribe(function (response) {
            _this12.isSuperUser = response['isSuperUser'];
            _this12.user = true;

            _this12.snackBar.open('User Log in Successfully', 'Dismiss', {
              duration: 3000
            });

            _this12.changeSuperUser();

            _this12.changeUser();

            _this12.router.navigate(["/home"]);
          }, function (error) {
            _this12.snackBar.open('Incorrect Email or Password', 'Dismiss', {
              duration: 3000
            });
          }, function () {});
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], LoginComponent.prototype, "onResize", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/modules/app/components/login/login.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/main-nav/main-nav.component.css":
  /*!********************************************************************!*\
    !*** ./src/modules/app/components/main-nav/main-nav.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsMainNavMainNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n  background-color: black;\n  color: rgb(232, 235, 84);\n}\n\n.nav-list{\n  padding-top: 0px !important;\n}\n\n.nav-list a:hover{\n  background-color: black;\n  color: rgb(232, 235, 84);\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.left-icons {\n  /* text-align: end; */\n  /* position: relative; */\n  margin-bottom: 8px;\n  /* float: right; */\n}\n\n.toolbar {\n  /* background-color: rgb(54, 44, 44); */\n  background-color: black;\n  padding-right: 0px;\n}\n\n.topToolbar {\n  background-color: whitesmoke;\n  opacity: 0.7;\n  height: 50px;\n}\n\n.topToolbarHeading{\n  font-size: 12px;\n  /* line-height: 16px; */\n  color: black;\n  text-align: center;\n  font-family: 'Playfair Display', serif;\n}\n\n.toolbarButtons{\n  margin-top: 5px;\n}\n\n.toolbarButtons button:hover{\n  /* color: black;\n  background-color: rgb(232, 235, 84); */\n  color: rgb(232, 235, 84); \n}\n\n/* .toolbarButtons span:hover{\n  color: black;\n  background-color: rgb(232, 235, 84);\n  padding-top: 25px;\n} */\n\n.toolbarButtons h1:hover{\n  cursor: pointer;\n}\n\n.toolbarHeading {\n  color: rgb(232, 235, 84);\n  margin-right: 20px;\n  margin-left: 20px;\n}\n\n.menu-icon{\n  margin: 0;\n}\n\n@media(max-width:850px){\n  .toolbar{\n    padding-right: 25px;\n  }\n}\n\n@media(max-width: 500px){\n  .left-icons {\n    /* text-align: end; */\n    /* position: relative; */\n    margin-bottom: 8px;\n  }\n  .toolbarHeading{\n    text-align: center;\n  }\n  .topToolbarHeading{\n    font-size: 10px;\n    color: black;\n    text-align: center;\n    font-family: 'Playfair Display', serif;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTt3Q0FDc0M7RUFDdEMsd0JBQXdCO0FBQzFCOztBQUNBOzs7O0dBSUc7O0FBQ0g7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQ0FBc0M7RUFDeEM7QUFDRiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xufVxuXG4ubmF2LWxpc3R7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5hdi1saXN0IGE6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmxlZnQtaWNvbnMge1xuICAvKiB0ZXh0LWFsaWduOiBlbmQ7ICovXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvKiBmbG9hdDogcmlnaHQ7ICovXG59XG5cbi50b29sYmFyIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA0NCwgNDQpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnRvcFRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGhlaWdodDogNTBweDtcbn1cbi50b3BUb29sYmFySGVhZGluZ3tcbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKiBsaW5lLWhlaWdodDogMTZweDsgKi9cbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xufVxuXG4udG9vbGJhckJ1dHRvbnN7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRvb2xiYXJCdXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgLyogY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTsgKi9cbiAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpOyBcbn1cbi8qIC50b29sYmFyQnV0dG9ucyBzcGFuOmhvdmVye1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn0gKi9cbi50b29sYmFyQnV0dG9ucyBoMTpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9vbGJhckhlYWRpbmcge1xuICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59ICBcblxuLm1lbnUtaWNvbntcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjg1MHB4KXtcbiAgLnRvb2xiYXJ7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XG4gIC5sZWZ0LWljb25zIHtcbiAgICAvKiB0ZXh0LWFsaWduOiBlbmQ7ICovXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICAudG9vbGJhckhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50b3BUb29sYmFySGVhZGluZ3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/modules/app/components/main-nav/main-nav.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/app/components/main-nav/main-nav.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MainNavComponent */

  /***/
  function srcModulesAppComponentsMainNavMainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");

    var MainNavComponent = /*#__PURE__*/function () {
      function MainNavComponent(breakpointObserver, sharedDataService) {
        _classCallCheck(this, MainNavComponent);

        this.breakpointObserver = breakpointObserver;
        this.sharedDataService = sharedDataService;
        this.itemsInCart = 0;
        this.products = 0;
      }

      _createClass(MainNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 500) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.loadCart(); // In login component

          this.sharedDataService.currentSuperUser.subscribe(function (superUser) {
            return _this13.isSuperUser = superUser;
          });
          this.loadCart(); // In login component

          this.sharedDataService.isUser.subscribe(function (user) {
            return _this13.user = user;
          }); // In Add To Cart Component

          this.sharedDataService.currentItemsInCart.subscribe(function (items) {
            return _this13.itemsInCart = items;
          }); // BECAUSE SUPER USER VALUE IS STRING TYPE IN SESSION STORAGE

          if (sessionStorage.getItem('value') == 'false' || sessionStorage.getItem('value') == null) {
            this.isSuperUser = false;
          } else {
            this.isSuperUser = true;
          }

          if (sessionStorage.getItem('token') == null) {
            this.user = false;
          } else {
            this.user = true;
          }
        } // newMessage() {
        //   this.sharedDataService.changeAmount(this.total);
        // }
        // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 500) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          var cart = []; // this.total = 0;
          // this.deliveryCharges = 0;

          var item;

          if (sessionStorage.getItem('cart') != null) {
            cart = JSON.parse(sessionStorage.getItem('cart'));

            for (var i = 0; i < cart.length; i++) {
              item = JSON.parse(cart[i]); // this.items.push(this.item);

              this.products += 1 * item.quantity;
            } // this.taxAmount = (this.totalAmount*14)/100;
            // this.total = this.totalAmount + this.taxAmount + this.deliveryCharges;
            // this.total = Math.floor(this.total);
            // this.newMessage();

          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('id');
          sessionStorage.setItem('value', 'false');
          this.isSuperUser = false;
          this.user = false;
        }
      }]);

      return MainNavComponent;
    }();

    MainNavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], MainNavComponent.prototype, "onResize", null);
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/main-nav/main-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-nav.component.css */
      "./src/modules/app/components/main-nav/main-nav.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])], MainNavComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/order/form/order-form.component.css":
  /*!************************************************************************!*\
    !*** ./src/modules/app/components/order/form/order-form.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsOrderFormOrderFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".viewMatcard{\n  font-family: \"Montserrat\";\n  margin: 20px;\n}\nlabel{\n  font-size: 14px;\n  font-family: \"Montserrat\";\n  color: rgb(53, 51, 51);\n}\n.fontFamily{\n  font-family: \"Montserrat\";\n}\n.margin{\n  margin-top: 20px;\n}\n.mat-divider{\n  position: relative !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL29yZGVyL2Zvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwL2NvbXBvbmVudHMvb3JkZXIvZm9ybS9vcmRlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld01hdGNhcmR7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgbWFyZ2luOiAyMHB4O1xufVxubGFiZWx7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBjb2xvcjogcmdiKDUzLCA1MSwgNTEpO1xufVxuLmZvbnRGYW1pbHl7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cbi5tYXJnaW57XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWF0LWRpdmlkZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/order/form/order-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/app/components/order/form/order-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrderFormComponent */

  /***/
  function srcModulesAppComponentsOrderFormOrderFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function () {
      return OrderFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../config */
    "./src/modules/app/config/index.ts");

    var OrderFormComponent = /*#__PURE__*/function () {
      function OrderFormComponent(router, route, fb, orderService) {
        _classCallCheck(this, OrderFormComponent);

        this.router = router;
        this.route = route;
        this.fb = fb;
        this.orderService = orderService;
        this.pageActions = _config__WEBPACK_IMPORTED_MODULE_6__["GLOBALS"].pageActions;
        this.loaded = false;
        this.data1 = [];
        this.orderLabels = _models__WEBPACK_IMPORTED_MODULE_5__["OrderModel"].attributesLabels;
        this.productLabels = _models__WEBPACK_IMPORTED_MODULE_5__["ProductModel"].attributesLabels;
        this.customerLabels = _models__WEBPACK_IMPORTED_MODULE_5__["CustomerModel"].attributesLabels; // setInterval(()=> { this.imageClick() }, 3000);

        this.pageAct = route.snapshot.data['act'];
      } // email = new FormControl('', [<any>Validators.required, Validators.email]);


      _createClass(OrderFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // if (this.pageAct == GLOBALS.pageActions.home){
          //   this.orderService.findWithProducts(28).subscribe(response => {
          //     console.log('response in home', response);
          //   })
          // }
          this.initializePage();
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.orderModel = new _models__WEBPACK_IMPORTED_MODULE_5__["OrderModel"]();
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_5__["OrderModel"]().validationRules());
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
        /**
         * Initialize page
         */

      }, {
        key: "initializePage",
        value: function initializePage() {
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_5__["OrderModel"]().validationRules());
          this.getData();
        }
        /**
         * Get record
         */

      }, {
        key: "getData",
        value: function getData() {
          var _this14 = this;

          this.route.params.subscribe(function (params) {
            _this14.orderService.findWithProducts(params['id']).subscribe(function (response) {
              if (response) {
                _this14.orderModel = response; // this.fg.patchValue(this.orderModel);
                //TODO:low need to check why we are dowing this after fetching data
                // if (this.pageAct == this.pageActions.view) {
                //   this.initViewPage();
                // } else if (this.pageAct == this.pageActions.update) {
                //   this.initUpdatePage();
                // }
              }
            }, function (error) {
              console.log(error);
              _this14.loaded = true;
            }, function () {
              _this14.loaded = true;
            });
          });
        }
      }]);

      return OrderFormComponent;
    }();

    OrderFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], OrderFormComponent.prototype, "onResize", null);
    OrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/order/form/order-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-form.component.css */
      "./src/modules/app/components/order/form/order-form.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_4__["OrderService"]])], OrderFormComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/order/list/order-list.component.css":
  /*!************************************************************************!*\
    !*** ./src/modules/app/components/order/list/order-list.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsOrderListOrderListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.dgSearchBar{\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.orderHeading{\n  font-size: 22px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  font-weight: bold;\n}\n.matTable{\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.viewIcon{\n  margin-left: 15px;\n}\n.editIcon{\n  margin-left: 30px;\n}\n.viewIcon:hover{\n  color: red;\n}\n.editIcon:hover{\n  color: red;\n}\n@media(max-width:600px){\n  .orderHeading{\n    font-size: 18px;\n    margin-left: 20px;\n    margin-bottom: 20px;\n  }\n  .amountColumn{\n    margin-left: 50px;\n  }\n  .viewIcon{\n    margin-left: 10px;\n  }\n  .editIcon{\n    margin-left: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL29yZGVyL2xpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwL2NvbXBvbmVudHMvb3JkZXIvbGlzdC9vcmRlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kZ1NlYXJjaEJhcntcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5vcmRlckhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1hdFRhYmxle1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnZpZXdJY29ue1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5lZGl0SWNvbntcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4udmlld0ljb246aG92ZXJ7XG4gIGNvbG9yOiByZWQ7XG59XG4uZWRpdEljb246aG92ZXJ7XG4gIGNvbG9yOiByZWQ7XG59XG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgLm9yZGVySGVhZGluZ3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuYW1vdW50Q29sdW1ue1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG4gIC52aWV3SWNvbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAuZWRpdEljb257XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/components/order/list/order-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/app/components/order/list/order-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrderListComponent */

  /***/
  function srcModulesAppComponentsOrderListOrderListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListComponent", function () {
      return OrderListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../config */
    "./src/modules/app/config/index.ts");

    var OrderListComponent = /*#__PURE__*/function () {
      function OrderListComponent(router, route, fb, orderService) {
        _classCallCheck(this, OrderListComponent);

        this.router = router;
        this.route = route;
        this.fb = fb;
        this.orderService = orderService;
        this.loaded = false;
        this.pageActions = _config__WEBPACK_IMPORTED_MODULE_7__["GLOBALS"].pageActions;
        this.data = [new _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"]()];
        this.data1 = [];
        this.displayedColumns = ['name', 'mobileNumber', 'amount', 'status', 'options'];
        this.displayedMobileColumns = ['name', 'amount', 'options'];
        this.attrLabels = {
          name: 'Name',
          amount: 'Amount',
          status: 'Status',
          mobileNumber: 'Mobile Number'
        }; // setInterval(()=> { this.imageClick() }, 3000);

        this.pageAct = route.snapshot.data['act'];
      } // email = new FormControl('', [<any>Validators.required, Validators.email]);


      _createClass(OrderListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // if (this.pageAct == GLOBALS.pageActions.home){
          //   this.orderService.findWithProducts(28).subscribe(response => {
          //     console.log('response in home', response);
          //   })
          // }
          this.getOrders();
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.orderModel = new _models__WEBPACK_IMPORTED_MODULE_6__["OrderModel"]();
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_6__["OrderModel"]().validationRules());
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        } // imageClick(){
        //   let length = this.imageInterval.length;
        //   for(let i=0;i<length;i++){
        //     if(this.imageInterval[i] == this.image && i<length-1){
        //       this.image = this.imageInterval[i+1];
        //       break;
        //     }else if(this.imageInterval[i] == this.image && i==length-1){
        //       this.image = this.imageInterval[0];
        //       break;
        //     }
        //   }
        // }

      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this15 = this;

          this.orderService.findAllWithProducts().subscribe(function (response) {
            if (response) {
              for (var i = 0; i < response['length']; i++) {
                _this15.data[i] = response[i];
                var name = response[i].customer.fname + ' ' + response[i].customer.lname;
                var obj = {
                  id: response[i].id,
                  name: name,
                  mobileNumber: response[i].customer.mobileNumber,
                  amount: response[i].amount,
                  status: response[i].status
                };

                _this15.data1.push(obj);
              }

              _this15.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this15.data1);
              _this15.dataSource.paginator = _this15.paginator;
              _this15.dataSource.sort = _this15.sort;
            }
          }, function (error) {
            console.log(error);
            _this15.loaded = true;
          }, function () {
            _this15.loaded = true;
          });
        }
        /**
         * Apply filter and search in data grid
         */

      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase(); // TODO: need to check what it do.

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "sortData",
        value: function sortData() {
          this.dataSource.sort = this.sort;
        }
      }]);

      return OrderListComponent;
    }();

    OrderListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], OrderListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], OrderListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], OrderListComponent.prototype, "onResize", null);
    OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/order/list/order-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-list.component.css */
      "./src/modules/app/components/order/list/order-list.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_5__["OrderService"]])], OrderListComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/payment/payment.component.css":
  /*!******************************************************************!*\
    !*** ./src/modules/app/components/payment/payment.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsPaymentPaymentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  .payment{\n    overflow-x: hidden;\n}\n.slider{\n    height: 80vh;\n    width: 100vh;\n    /* margin-left: 10%; */\n    position: relative;\n    overflow: hidden;\n}\n.homeMatCard{\n    padding:0px !important;\n    margin: 20px;\n    overflow: hidden;\n    height: 100vh;\n    width: 100%;\n}\n/**  \n    FOR SHOWING UPTO 20% OFF ON IMAGE BUTTON\n**/\n.sliderText{\n    position: absolute;\n\tbottom: 0px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 60px;\n    /* margin-left: 10px ; */\n    width: 100% !important;\n    font-family: \"Montserrat\";\n\tfont-size: 12px;\n\ttransition: .3s ease-in-out;\n\topacity: 0.7;\n  }\n.offHeading{\n    color: rgb(232, 235, 84);;\n  }\n.text {\n\tposition: absolute;\n\tbottom: -40px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 125px;\n    margin-left: 10px ;\n    width: 150px !important;\n    font-family: \"Montserrat\";\n\tfont-size: 12px;\n\ttransition: .3s ease-in-out;\n\topacity: 0;\n\t\n}\n.img {\n\ttransform: scale(1);\n    transition: .3s ease-in-out;\n}\n.img{\n    -webkit-animation: zoominoutsinglefeatured 3s linear infinite;\n            animation: zoominoutsinglefeatured 3s linear infinite;\n}\n@-webkit-keyframes zoominoutsinglefeatured {\n    0% {\n        transform: scale(1,1);\n    }\n    50% {\n        transform: scale(1.2,1.2);\n    }\n    100% {\n        transform: scale(1,1);\n    }\n}\n@keyframes zoominoutsinglefeatured {\n    0% {\n        transform: scale(1,1);\n    }\n    50% {\n        transform: scale(1.2,1.2);\n    }\n    100% {\n        transform: scale(1,1);\n    }\n}\n/* .img:hover {\n\t-webkit-transform: scale(1.3);\n    transform: scale(1.3);\n    opacity: 1;\n}\n.img:hover+div {\n    bottom: 50%;\n\topacity: 0.8;\n} */\n/* .text {\n\tposition: absolute;\n\tbottom: -40px;\n\tleft: 0;\n\tdisplay: block;\n\twidth: 300px;\n\tmargin: 0;\n    padding: 0;\n    background-color: greenyellow;\n    color: white;\n    height: 40px;\n    margin-left: 40%;\n    width: 100px !important;\n\tfont-size: 18px;\n\ttext-decoration: none;\n\t-webkit-transition: .3s ease-in-out;\n\ttransition: .3s ease-in-out;\n\topacity: 0;\n\t\n}\n.img {\n\t-webkit-transform: scale(1);\n\ttransform: scale(1);\n\t-webkit-transition: .3s ease-in-out;\n    transition: .3s ease-in-out;\n}\n.img:hover {\n\t-webkit-transform: scale(1.3);\n    transform: scale(1.3);\n    opacity: 0.7;\n}\n.img:hover+button {\n\tbottom: 96px;\n\topacity: 10;\n} */\n/**  \n    These are the design implementation for Top bar.\n**/\n.matCard {\n    background-color: black;\n  }\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n  }\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n  }\n.right-way {\n          color: rgb(226, 202, 62);\n          font-size: 25px;\n          font-family: 'Playfair Display', serif;\n          text-align: center;\n          /* background-image: url(../../../../assets/logo);  */\n          /* height: 64px;\n          padding-left: 0px;\n          margin-left: 0px;\n          overflow: hidden;\n          background-position: center;\n          background-size: cover; */\n    }\n/**\n    These are the other designs for the page\n    **/\n.shippingPage{\n        margin: 30px;\n    }\n.amountCard{\n        /* background-color: #c1c1c1;\n        margin-left: 10%;\n        margin-right: 10%; */\n        margin-bottom: 10px;\n    }\n.orderLabel{\n        font-family: \"Montserrat\";\n        font-size: 22px;\n        margin-bottom: 15px;\n    }\n.totalLabel{\n        margin-top: 35px;\n        font-family: \"Montserrat\";\n        color: #696666;\n    }\n.itemLabel{\n        margin-top: 35px;\n        font-family: \"Montserrat\";\n        color: #494848;\n    }\n.margin-radio-group{\n        margin-bottom: 25px;\n        font-family: \"Montserrat\";\n    }\n.formClass{\n        margin-top: 10px;\n        font-family: \"Montserrat\";\n        color: #696666;\n    }\n.shippingLabel{\n        margin-bottom: 20px;\n        font-size: 18px;\n        color: #494848;\n    }\n.fname-margin{\n        margin-top: 30px;\n    }\n.paymentButton{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n        margin-right: 15px;\n    }\n.cancelButton{\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n.cancelButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n    }\n.continueShoppingButton{\n        margin-top: 20px;\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n.continueShoppingButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n    }\n/* #right{\n        font-size: 12px;\n    }\n\n    .prodLabel{\n        padding-bottom: 10px;\n        margin-left: 20px;\n        font-size: 12px;\n    }\n\n    .img{\n        width: 100%;\n        height: 500px;\n    }\n\n    .descriptionClass{\n        margin-left: 25px;\n        font-family: 'Playfair Display', serif;\n    } */\n/* .pkr{\n        margin-top: 20px;\n    } */\n/* .PKRHeading{\n        margin-left: 20px;\n        color: #e95144;\n        font-weight: bold;\n    }\n\n    .addCartButton{\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n\n    .addCartButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n\n    .quantityHeading{\n        margin-top: 20px;\n        font-size: 12px;\n    }\n\n    .btn-qty {\n        width: 40px;\n        height: 40px;\n        line-height: 40px;\n        display: block;\n        border: 1px solid  #ddd;\n        text-align: center;\n        color: #999;\n        font-size: 12px;\n        transition: all .5s ease;\n        backface-visibility: hidden;\n        border-radius: 0;\n        margin-top: 12px;\n    }\n\n    .btn-qty:hover{\n        cursor: pointer;\n        background-color: black;\n        color: rgb(226, 202, 62);\n    }\n\n    .matField{\n        width: 150px;\n        text-align: center;\n    }\n\n    .spinner {\n        display: flex;\n        justify-content: center;\n        margin: 10%;\n      } */\n/* .text {\n    color: #f2f2f2;\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n  }\n  \n  .numbertext {\n    color: #f2f2f2;\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n  }\n  \n  .dot {\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n  }\n  \n  .active {\n    background-color: #717171;\n  }\n   */\n/* Fading animation */\n/* .fade {\n    -webkit-animation-name: fade;\n    -webkit-animation-duration: 1.5s;\n    animation-name: fade;\n    animation-duration: 1.5s;\n    height: 100px;\n  }\n  \n  @-webkit-keyframes fade {\n    from {opacity: .4} \n    to {opacity: 1}\n  }\n  \n  @keyframes fade {\n    from {opacity: .4} \n    to {opacity: 1}\n  }\n  \n  @media only screen and (max-width: 300px) {\n    .text {font-size: 11px}\n  } */\n@media (min-width:900px){\n    .homeMatCard{\n        padding:0px !important;\n        overflow: hidden;\n        margin: 30px;\n        height: 120vh;\n        width: 100%;\n    }\n    .img:hover+div {\n        bottom: 230px;\n        opacity: 0.8;\n    }\n  }\n@media (max-width:500px){\n    .shippingLabel{\n        font-family: \"Montserrat\";\n        margin-bottom: 20px;\n        font-size: 16px;\n        color: #494848;\n    }\n    .homeMatCard{\n        padding:0px !important;\n        overflow: hidden;\n        margin: 20px;\n        height: 450px;\n        width: 100%;\n    }\n    .margin-radio-group{\n        font-family: \"Montserrat\";\n        font-size: 12px;\n    }\n    .orderLabel{\n        font-family: \"Montserrat\";\n        font-size: 16px;\n        margin-bottom: 15px;\n    }\n    .itemLabel{\n        margin-top: 25px;\n        font-family: \"Montserrat\";\n        color: #494848;\n        font-size: 12px;\n    }\n    .totalLabel{\n        margin-top: 25px;\n        font-family: \"Montserrat\";\n        color: #696666;\n        font-size: 12px;\n    }\n    .shippingPage{\n        margin: 20px;\n    }\n    .img:hover+div {\n        bottom: 20px;\n        opacity: 0.8;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUVBOztFQUVFO0FBQ0Y7SUFDSSxrQkFBa0I7Q0FDckIsV0FBVztJQUNSLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix5QkFBeUI7Q0FDNUIsZUFBZTtDQUVmLDJCQUEyQjtDQUMzQixZQUFZO0VBQ1g7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUVBO0NBQ0Qsa0JBQWtCO0NBQ2xCLGFBQWE7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0NBQzVCLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsVUFBVTs7QUFFWDtBQUNBO0NBRUMsbUJBQW1CO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksNkRBQXFEO1lBQXJELHFEQUFxRDtBQUN6RDtBQUNBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7QUFWQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKO0FBQ0E7Ozs7Ozs7O0dBUUc7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDQztBQUVIOztFQUVFO0FBQ0Y7SUFDSSx1QkFBdUI7RUFDekI7QUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtFQUNwQjtBQUlFO1VBQ00sd0JBQXdCO1VBQ3hCLGVBQWU7VUFDZixzQ0FBc0M7VUFDdEMsa0JBQWtCO1VBQ2xCLHFEQUFxRDtVQUNyRDs7Ozs7bUNBS3lCO0lBQy9CO0FBRUE7O01BRUU7QUFFRjtRQUNJLFlBQVk7SUFDaEI7QUFFQTtRQUNJOzs0QkFFb0I7UUFDcEIsbUJBQW1CO0lBQ3ZCO0FBRUE7UUFDSSx5QkFBeUI7UUFDekIsZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtBQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0FBRUE7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7QUFFQTtRQUNJLG1CQUFtQjtRQUNuQix5QkFBeUI7SUFDN0I7QUFFQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtBQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0FBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUdBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0E7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFFQTtRQUNJLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFDQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7QUFFSDs7T0FFRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBb0RLO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErQkU7QUFDRixxQkFBcUI7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBb0JHO0FBRUg7SUFDRTtRQUNJLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0VBQ0Y7QUFHQTtJQUNFO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7SUFDZjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5wYXltZW50e1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5zbGlkZXJ7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIHdpZHRoOiAxMDB2aDtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTAlOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhvbWVNYXRDYXJke1xuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyoqICBcbiAgICBGT1IgU0hPV0lORyBVUFRPIDIwJSBPRkYgT04gSU1BR0UgQlVUVE9OXG4qKi9cbi5zbGlkZXJUZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDksIDQ3KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4IDsgKi9cbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHRvcGFjaXR5OiAwLjc7XG4gIH1cbiAgLm9mZkhlYWRpbmd7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpOztcbiAgfVxuXG4gIC50ZXh0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC00MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ5LCA0Nyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHggO1xuICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdG9wYWNpdHk6IDA7XG5cdFxufVxuLmltZyB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaW1ne1xuICAgIGFuaW1hdGlvbjogem9vbWlub3V0c2luZ2xlZmVhdHVyZWQgM3MgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyB6b29taW5vdXRzaW5nbGVmZWF0dXJlZCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgfVxufVxuLyogLmltZzpob3ZlciB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmltZzpob3ZlcitkaXYge1xuICAgIGJvdHRvbTogNTAlO1xuXHRvcGFjaXR5OiAwLjg7XG59ICovXG4gIC8qIC50ZXh0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC00MHB4O1xuXHRsZWZ0OiAwO1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDMwMHB4O1xuXHRtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHRvcGFjaXR5OiAwO1xuXHRcbn1cbi5pbWcge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cbi5pbWc6aG92ZXIge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgb3BhY2l0eTogMC43O1xufVxuLmltZzpob3ZlcitidXR0b24ge1xuXHRib3R0b206IDk2cHg7XG5cdG9wYWNpdHk6IDEwO1xufSAqL1xuXG4vKiogIFxuICAgIFRoZXNlIGFyZSB0aGUgZGVzaWduIGltcGxlbWVudGF0aW9uIGZvciBUb3AgYmFyLlxuKiovXG4ubWF0Q2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5tYXRDYXJkQnV0dG9ucyBidXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICB9XG4gIFxuICAubWF0SGVhZGluZyB7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfSAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAucmlnaHQtd2F5IHtcbiAgICAgICAgICBjb2xvcjogcmdiKDIyNiwgMjAyLCA2Mik7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2xvZ28pOyAgKi9cbiAgICAgICAgICAvKiBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgIFRoZXNlIGFyZSB0aGUgb3RoZXIgZGVzaWducyBmb3IgdGhlIHBhZ2VcbiAgICAqKi9cblxuICAgIC5zaGlwcGluZ1BhZ2V7XG4gICAgICAgIG1hcmdpbjogMzBweDtcbiAgICB9XG5cbiAgICAuYW1vdW50Q2FyZHtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7ICovXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLm9yZGVyTGFiZWx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIC50b3RhbExhYmVse1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGNvbG9yOiAjNjk2NjY2O1xuICAgIH1cblxuICAgIC5pdGVtTGFiZWx7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgfVxuXG4gICAgLm1hcmdpbi1yYWRpby1ncm91cHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgIH1cblxuICAgIC5mb3JtQ2xhc3N7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgY29sb3I6ICM2OTY2NjY7XG4gICAgfVxuXG4gICAgLnNoaXBwaW5nTGFiZWx7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgfVxuXG4gICAgLmZuYW1lLW1hcmdpbntcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG5cbiAgICAucGF5bWVudEJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG5cblxuICAgIC5jYW5jZWxCdXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLmNhbmNlbEJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRpbnVlU2hvcHBpbmdCdXR0b257XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLmNvbnRpbnVlU2hvcHBpbmdCdXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qICNyaWdodHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5wcm9kTGFiZWx7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5pbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbkNsYXNze1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gICAgfSAqL1xuXG4gICAgLyogLnBrcntcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9ICovXG5cbiAgICAvKiAuUEtSSGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZTk1MTQ0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYWRkQ2FydEJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5hZGRDYXJ0QnV0dG9uOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxODksIDgpO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLnF1YW50aXR5SGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5idG4tcXR5IHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgI2RkZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAuYnRuLXF0eTpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHJnYigyMjYsIDIwMiwgNjIpO1xuICAgIH1cblxuICAgIC5tYXRGaWVsZHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNwaW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMCU7XG4gICAgICB9ICovXG5cbiAgLyogLnRleHQge1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubnVtYmVydGV4dCB7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gIH1cbiAgXG4gIC5kb3Qge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBtYXJnaW46IDAgMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgfVxuICBcbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcbiAgfVxuICAgKi9cbiAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuICAvKiAuZmFkZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICB0byB7b3BhY2l0eTogMX1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgdG8ge29wYWNpdHk6IDF9XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgICAudGV4dCB7Zm9udC1zaXplOiAxMXB4fVxuICB9ICovXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6OTAwcHgpe1xuICAgIC5ob21lTWF0Q2FyZHtcbiAgICAgICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmltZzpob3ZlcitkaXYge1xuICAgICAgICBib3R0b206IDIzMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICB9XG5cblxuICBAbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XG4gICAgLnNoaXBwaW5nTGFiZWx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzQ5NDg0ODtcbiAgICB9XG4gICAgLmhvbWVNYXRDYXJke1xuICAgICAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubWFyZ2luLXJhZGlvLWdyb3Vwe1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLm9yZGVyTGFiZWx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAuaXRlbUxhYmVse1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGNvbG9yOiAjNDk0ODQ4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC50b3RhbExhYmVse1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGNvbG9yOiAjNjk2NjY2O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5zaGlwcGluZ1BhZ2V7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICB9XG4gICAgLmltZzpob3ZlcitkaXYge1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/app/components/payment/payment.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/app/components/payment/payment.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PaymentComponent */

  /***/
  function srcModulesAppComponentsPaymentPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () {
      return PaymentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var PaymentComponent = /*#__PURE__*/function () {
      // public componentLabels = CustomerModel.attributesLabels;
      function PaymentComponent(route, router, // private fb: FormBuilder,
      sharedDataService, customerService, orderService, productService, snackBar) {
        var _this16 = this;

        _classCallCheck(this, PaymentComponent);

        this.route = route;
        this.router = router;
        this.sharedDataService = sharedDataService;
        this.customerService = customerService;
        this.orderService = orderService;
        this.productService = productService;
        this.snackBar = snackBar;
        this.im1 = 'assets/im8.jpeg';
        this.im2 = 'assets/im6.jpeg';
        this.im3 = 'assets/im4.jpg';
        this.im4 = 'assets/im3.jpg';
        this.imageObject = [{
          image: 'assets/im8.jpeg',
          thumbImage: 'assets/img/slider/1_min.jpeg',
          alt: 'alt of image',
          title: 'title of image'
        }];
        this.reason = '';
        this.methodChoosen = 0;
        this.items = [];
        this.quantities = [];
        this.order = {};
        this.imageInterval = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg', 'assets/img4.jpg']; // imageInterval=[
        //   {im:'assets/im8.jpeg',show:true},
        //   {im:'assets/im6.jpeg',show:false},
        //   {im:'assets/im4.jpg',show:false},
        // ]

        this.paymentMethods = [{
          id: "1",
          method: "Cash on Delivery"
        }, {
          id: "2",
          method: "EasyPaisa"
        }, {
          id: "3",
          method: "Jazz Cash"
        }];
        this.image = 'assets/img1.jpg';
        this.itemsInCart = 0;
        setInterval(function () {
          _this16.imageClick();
        }, 3000);
      }

      _createClass(PaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          // this.customerModel = new CustomerModel();
          // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
          // this.fg = this.fb.group(new CustomerModel().validationRules());
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 650) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.sharedDataService.currentUser.subscribe(function (user) {
            return _this17.customer = user;
          });
          this.sharedDataService.currentMessage.subscribe(function (message) {
            return _this17.amount = message;
          });
          this.sharedDataService.currentMessage.subscribe(function (items) {
            return _this17.itemsInCart = items;
          });
          var check = JSON.parse(sessionStorage.getItem('customer'));

          if (check == null) {
            sessionStorage.setItem('customer', JSON.stringify(this.customer));
          }

          if (check != null && this.customer.fname == undefined) {
            var cus = sessionStorage.getItem('customer');
            this.customer = JSON.parse(cus);
          }

          if (this.amount == 0) {
            this.loadCart();
          } else {
            this.loadCart(); // this.amount = Math.floor(this.amount);
          }
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 650) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "imageClick",
        value: function imageClick() {
          var length = this.imageInterval.length;

          for (var i = 0; i < length; i++) {
            if (this.imageInterval[i] == this.image && i < length - 1) {
              this.image = this.imageInterval[i + 1];
              break;
            } else if (this.imageInterval[i] == this.image && i == length - 1) {
              this.image = this.imageInterval[0];
              break;
            }
          }
        } // code for side nav close

      }, {
        key: "close",
        value: function close(reason) {
          this.reason = reason;
          this.sidenav.close();
        } // code for cancel button

      }, {
        key: "cancelClick",
        value: function cancelClick() {
          this.router.navigate(['home/addToCart/shipping']);
        } // code for adding new Customer and Order

      }, {
        key: "confirmOrder",
        value: function confirmOrder() {
          var _this18 = this;

          this.customerModel = this.customer;

          if (this.customerModel.fname != null && this.amount > 0) {
            this.customerService.create(this.customerModel).subscribe(function (response) {
              // this.router.navigate([`/home`]);
              if (response) {
                _this18.makeOrder();

                _this18.order['customerId'] = response['id'];
                _this18.order['trackId'] = response['id'] + '258'; // this.orderModel = this.order;
                // console.log('Track Id of Order', this.orderModel.trackId);

                _this18.orderService.create(_this18.order).subscribe(function (res) {
                  if (res) {
                    _this18.snackBar.open('Order is submitted successfully', 'Dismiss', {
                      duration: 3000
                    });

                    _this18.updateProducts();
                  } else {
                    _this18.snackBar.open('Some Error occured. Plesae try again.', 'Dismiss', {
                      duration: 3000
                    });
                  }
                });
              }
            }, function (error) {
              _this18.snackBar.open('Some Error Occured.', 'Dismiss', {
                duration: 3000
              });
            }, function () {// sessionStorage.clear();
            });
          } else if (this.amount == 0) {
            this.snackBar.open('Please choose items in your cart.', 'Dismiss', {
              duration: 3000
            });
          } else {
            this.snackBar.open('Customer Information is required', 'Dismiss', {
              duration: 3000
            });
          } // this.router.navigate(['home/addToCart']);

        }
      }, {
        key: "makeOrder",
        value: function makeOrder() {
          this.order['amount'] = this.amount; // console.log('order=??????>>', this.order)

          this.order['status'] = 'Pending';
          this.order['products'] = this.items;
          this.order['quantity'] = this.quantities; // this.orderModel.trackId = '';
        } // change number of items added in Shopping Cart

      }, {
        key: "changeItemsTotal",
        value: function changeItemsTotal() {
          this.sharedDataService.changeItemsInCart(this.itemsInCart);
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          var totalAmount = 0;
          var taxAmount = 0;
          var deliveryCharges = 0;
          this.itemsInCart = 0; // let items = [];

          var item;
          var cart = [];

          if (sessionStorage.getItem('cart') != null) {
            cart = JSON.parse(sessionStorage.getItem('cart'));

            for (var i = 0; i < cart.length; i++) {
              item = JSON.parse(cart[i]);
              this.items.push(item);
              this.quantities.push(item.quantity);
              totalAmount += item.price * item.quantity; // TO SHOW AMOUNT OF ITEMS IN CART IN NAVBAR

              this.itemsInCart += 1 * item.quantity;
            }

            if (totalAmount > 0) {
              deliveryCharges = 200;
            }

            taxAmount = totalAmount * 0 / 100;
            this.amount = totalAmount + taxAmount + deliveryCharges;
            this.amount = Math.floor(this.amount); // UPDATE NUMER OF ITEMS IN CART

            this.changeItemsTotal();
          }
        }
      }, {
        key: "updateProducts",
        value: function updateProducts() {
          for (var i = 0; i < this.items.length; i++) {
            var id = this.items[i].id;
            var quantity = this.quantities[i];
            this.productService.updateQuantity(id, quantity).subscribe(function (res) {});
          }

          sessionStorage.removeItem('cart');
          sessionStorage.removeItem('customer');
          this.router.navigate(['home']);
        }
      }]);

      return PaymentComponent;
    }();

    PaymentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])], PaymentComponent.prototype, "sidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], PaymentComponent.prototype, "onResize", null);
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/payment/payment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.component.css */
      "./src/modules/app/components/payment/payment.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _services__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])], PaymentComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/product/product.component.css":
  /*!******************************************************************!*\
    !*** ./src/modules/app/components/product/product.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/**  \n    These are the design implementation for Top bar.\n**/\n.matCard {\n    background-color: black;\n  }\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n  }\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n  }\n.right-way {\n          color: rgb(226, 202, 62);\n          font-size: 25px;\n          font-family: 'Playfair Display', serif;\n          text-align: center;\n          /* background-image: url(../../../../assets/logo);  */\n          /* height: 64px;\n          padding-left: 0px;\n          margin-left: 0px;\n          overflow: hidden;\n          background-position: center;\n          background-size: cover; */\n    }\n/**\n    These are the other designs for the page\n    **/\n.productPage{\n        margin: 30px;\n    }\n#right{\n        font-size: 12px;\n    }\n.prodLabel{\n        padding-bottom: 10px;\n        margin-left: 20px;\n        font-size: 12px;\n    }\n.img{\n        width: 100%;\n        height: 500px;\n    }\n.descriptionClass{\n        margin-left: 25px;\n        font-family: 'Playfair Display', serif;\n    }\n/**  \n    FOR SHOWING UPTO 20% OFF ON IMAGE BUTTON\n**/\n.sliderText{\n    position: absolute;\n\tbottom: 0px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 60px;\n    /* margin-left: 10px ; */\n    width: 100% !important;\n    font-family: \"Montserrat\";\n\tfont-size: 12px;\n\ttransition: .3s ease-in-out;\n\topacity: 0.7;\n  }\n.offHeading{\n    color: rgb(232, 235, 84);;\n  }\n.PKRHeading{\n        margin-left: 20px;\n        color: #e95144;\n        font-weight: bold;\n    }\n.PKRHeadingLine{\n        text-decoration: line-through;\n        margin-left: 20px;\n        color: #242323;\n        font-weight: bold;\n    }\n.addCartButton{\n        background-color: black;\n        /* color: rgb(226, 202, 62); */\n        color: white;\n        /* background-color: rgb(186, 189, 8);\n        color: black; */\n        height: 40px;\n    }\n.addCartButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n.quantityHeading{\n        margin-top: 20px;\n        font-size: 12px;\n    }\n.colorButton{\n        margin-right: 15px;\n        border: 2px solid black;\n        /* background-color: rgb(186, 189, 8); */\n    }\n.sizeButton{\n        margin-right: 15px;\n        background-color: black;\n    }\n.sizeButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n.quantityHeading{\n        font-size: 16px;\n        margin-bottom: 10px;\n        margin-top: 20px;\n        font-family: \"Montserrat\";\n        color: #494848;\n    }\n.sizeHeading{\n        font-size: 16px;\n        margin-bottom: 20px;\n        font-family: \"Montserrat\";\n        color: #494848;\n    }\n.colorHeading{\n        font-size: 16px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n        font-family: \"Montserrat\";\n        color: #494848;\n    }\n.sizeButtons{\n        margin-bottom: 20px;\n    }\n.btn-qty {\n        width: 40px;\n        height: 40px;\n        line-height: 40px;\n        display: block;\n        border: 1px solid  #ddd;\n        text-align: center;\n        color: #999;\n        font-size: 12px;\n        transition: all .5s ease;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        border-radius: 0;\n        margin-top: 12px;\n    }\n.btn-qty:hover{\n        cursor: pointer;\n        background-color: black;\n        color: rgb(226, 202, 62);\n    }\n.matField{\n        width: 150px;\n        /* height: 10px; */\n        text-align: center;\n    }\n.spinner {\n        display: flex;\n        justify-content: center;\n        margin: 10%;\n      }\n.msgColor{\n          color: red;\n      }\n/** \n    CSS FOR SHOW BOX ON HOVER IMAGE\n     **/\n.text {\n        position: absolute;\n        bottom: 440px;\n        display: block;\n        text-align: center;\n        background-color: rgb(48, 49, 47);\n        color: white;\n        height: 125px;\n        margin-left: 10px ;\n        width: 150px !important;\n        font-family: \"Montserrat\";\n        font-size: 12px;\n        transition: .3s ease-in-out;\n        opacity: 0;\n    }\n.img:hover {\n        /* -webkit-transform: scale(1.3);\n        transform: scale(1.3); */\n        opacity: 1;\n    }\n.img:hover+div {\n        bottom: 50px;\n        opacity: 0.8;\n    }\n.matcard{\n        padding: 0px;\n    }\n/** \n    CSS FOR IMAGE ANIMATION\n     **/\n.imageMatCard{\n        overflow: hidden;\n        padding: 0px !important;\n    }\n.img {\n        transform: scale(1);\n        transition: .3s ease-in-out;\n    }\n.img{\n        -webkit-animation: zoominoutsinglefeatured 3s linear infinite;\n                animation: zoominoutsinglefeatured 3s linear infinite;\n    }\n@-webkit-keyframes zoominoutsinglefeatured {\n        0% {\n            transform: scale(1,1);\n        }\n        50% {\n            transform: scale(1.2,1.2);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    }\n@keyframes zoominoutsinglefeatured {\n        0% {\n            transform: scale(1,1);\n        }\n        50% {\n            transform: scale(1.2,1.2);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    }\n@media(max-width:450px){\n        .img{\n            height: 420px;\n        }\n        \n      }\n@media(max-width:600px){\n        .img:hover+div {\n            bottom: 50px;\n            opacity: 0.8;\n        }\n\n        .addCartButton{\n            background-color: black;\n            /* color: rgb(226, 202, 62); */\n            color: white;\n            /* background-color: rgb(186, 189, 8);\n            color: black; */\n            height: 40px;\n            margin-right: 25px;\n            margin-bottom: 20px;\n        }\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0Y7SUFDSSx1QkFBdUI7RUFDekI7QUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtFQUNwQjtBQUlFO1VBQ00sd0JBQXdCO1VBQ3hCLGVBQWU7VUFDZixzQ0FBc0M7VUFDdEMsa0JBQWtCO1VBQ2xCLHFEQUFxRDtVQUNyRDs7Ozs7bUNBS3lCO0lBQy9CO0FBRUE7O01BRUU7QUFFRjtRQUNJLFlBQVk7SUFDaEI7QUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFFQTtRQUNJLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7QUFFQTtRQUNJLGlCQUFpQjtRQUNqQixzQ0FBc0M7SUFDMUM7QUFFSjs7RUFFRTtBQUNGO0lBQ0ksa0JBQWtCO0NBQ3JCLFdBQVc7SUFDUixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIseUJBQXlCO0NBQzVCLGVBQWU7Q0FFZiwyQkFBMkI7Q0FDM0IsWUFBWTtFQUNYO0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFFRTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCO0FBRUE7UUFDSSw2QkFBNkI7UUFDN0IsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7QUFFQTtRQUNJLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFDOUIsWUFBWTtRQUNaO3VCQUNlO1FBQ2YsWUFBWTtJQUNoQjtBQUVBO1FBQ0ksa0NBQWtDO1FBQ2xDLFlBQVk7SUFDaEI7QUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0FBRUE7UUFDSSxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHdDQUF3QztJQUM1QztBQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLHVCQUF1QjtJQUMzQjtBQUVBO1FBQ0ksa0NBQWtDO1FBQ2xDLFlBQVk7SUFDaEI7QUFFQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0FBRUE7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0FBRUE7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtBQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBRUE7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtJQUM1QjtBQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7QUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsV0FBVztNQUNiO0FBRUE7VUFDSSxVQUFVO01BQ2Q7QUFFRjs7T0FFRztBQUVIO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZiwyQkFBMkI7UUFDM0IsVUFBVTtJQUNkO0FBQ0E7UUFDSTtnQ0FDd0I7UUFDeEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUVBOztPQUVHO0FBQ0g7UUFDSSxnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCO0FBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsMkJBQTJCO0lBQy9CO0FBQ0E7UUFDSSw2REFBcUQ7Z0JBQXJELHFEQUFxRDtJQUN6RDtBQUNBO1FBQ0k7WUFDSSxxQkFBcUI7UUFDekI7UUFDQTtZQUNJLHlCQUF5QjtRQUM3QjtRQUNBO1lBQ0kscUJBQXFCO1FBQ3pCO0lBQ0o7QUFWQTtRQUNJO1lBQ0kscUJBQXFCO1FBQ3pCO1FBQ0E7WUFDSSx5QkFBeUI7UUFDN0I7UUFDQTtZQUNJLHFCQUFxQjtRQUN6QjtJQUNKO0FBSUU7UUFDRTtZQUNJLGFBQWE7UUFDakI7O01BRUY7QUFDQTtRQUNFO1lBQ0ksWUFBWTtZQUNaLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx1QkFBdUI7WUFDdkIsOEJBQThCO1lBQzlCLFlBQVk7WUFDWjsyQkFDZTtZQUNmLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsbUJBQW1CO1FBQ3ZCO01BQ0YiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogIFxuICAgIFRoZXNlIGFyZSB0aGUgZGVzaWduIGltcGxlbWVudGF0aW9uIGZvciBUb3AgYmFyLlxuKiovXG4ubWF0Q2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5tYXRDYXJkQnV0dG9ucyBidXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICB9XG4gIFxuICAubWF0SGVhZGluZyB7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfSAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAucmlnaHQtd2F5IHtcbiAgICAgICAgICBjb2xvcjogcmdiKDIyNiwgMjAyLCA2Mik7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2xvZ28pOyAgKi9cbiAgICAgICAgICAvKiBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgIFRoZXNlIGFyZSB0aGUgb3RoZXIgZGVzaWducyBmb3IgdGhlIHBhZ2VcbiAgICAqKi9cblxuICAgIC5wcm9kdWN0UGFnZXtcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgIH1cblxuICAgICNyaWdodHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5wcm9kTGFiZWx7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5pbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbkNsYXNze1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gICAgfVxuXG4vKiogIFxuICAgIEZPUiBTSE9XSU5HIFVQVE8gMjAlIE9GRiBPTiBJTUFHRSBCVVRUT05cbioqL1xuLnNsaWRlclRleHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OSwgNDcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHggOyAqL1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuXHRmb250LXNpemU6IDEycHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdG9wYWNpdHk6IDAuNztcbiAgfVxuICAub2ZmSGVhZGluZ3tcbiAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7O1xuICB9XG5cbiAgICAuUEtSSGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZTk1MTQ0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuUEtSSGVhZGluZ0xpbmV7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDIzMjM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5hZGRDYXJ0QnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgLyogY29sb3I6IHJnYigyMjYsIDIwMiwgNjIpOyAqL1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gICAgICAgIGNvbG9yOiBibGFjazsgKi9cbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5hZGRDYXJ0QnV0dG9uOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxODksIDgpO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLnF1YW50aXR5SGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5jb2xvckJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTsgKi9cbiAgICB9XG5cbiAgICAuc2l6ZUJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAuc2l6ZUJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIC5xdWFudGl0eUhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBjb2xvcjogIzQ5NDg0ODtcbiAgICB9XG5cbiAgICAuc2l6ZUhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBjb2xvcjogIzQ5NDg0ODtcbiAgICB9XG5cbiAgICAuY29sb3JIZWFkaW5ne1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgfVxuXG4gICAgLnNpemVCdXR0b25ze1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5idG4tcXR5IHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgI2RkZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAuYnRuLXF0eTpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHJnYigyMjYsIDIwMiwgNjIpO1xuICAgIH1cblxuICAgIC5tYXRGaWVsZHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAvKiBoZWlnaHQ6IDEwcHg7ICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc3Bpbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwJTtcbiAgICAgIH1cblxuICAgICAgLm1zZ0NvbG9ye1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG5cbiAgICAvKiogXG4gICAgQ1NTIEZPUiBTSE9XIEJPWCBPTiBIT1ZFUiBJTUFHRVxuICAgICAqKi9cbiAgICBcbiAgICAudGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA0NDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OSwgNDcpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4IDtcbiAgICAgICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5pbWc6aG92ZXIge1xuICAgICAgICAvKiAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOyAqL1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAuaW1nOmhvdmVyK2RpdiB7XG4gICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAubWF0Y2FyZHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC8qKiBcbiAgICBDU1MgRk9SIElNQUdFIEFOSU1BVElPTlxuICAgICAqKi9cbiAgICAuaW1hZ2VNYXRDYXJke1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltZyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgLmltZ3tcbiAgICAgICAgYW5pbWF0aW9uOiB6b29taW5vdXRzaW5nbGVmZWF0dXJlZCAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgem9vbWlub3V0c2luZ2xlZmVhdHVyZWQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICAgIFxuICAgICAgQG1lZGlhKG1heC13aWR0aDo0NTBweCl7XG4gICAgICAgIC5pbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDQyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XG4gICAgICAgIC5pbWc6aG92ZXIrZGl2IHtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRDYXJ0QnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAvKiBjb2xvcjogcmdiKDIyNiwgMjAyLCA2Mik7ICovXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxODksIDgpO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrOyAqL1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/product/product.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/app/components/product/product.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcModulesAppComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(route, router, productService, snackBar // private sharedDataService: SharedDataService
      ) {
        var _this19 = this;

        _classCallCheck(this, ProductComponent);

        this.route = route;
        this.router = router;
        this.productService = productService;
        this.snackBar = snackBar;
        this.products = [[{
          "id": 1,
          "name": "../../assets/img1.jpg",
          "description": "Incidunt et magni",
          "Size": "Small",
          "price": 170.00,
          "quantity": 56840,
          "category": "Frof"
        }, {
          "id": 2,
          "name": "../../assets/img2.jpg",
          "description": "Incidunt et magni",
          "Size": "Medium",
          "price": 170.00,
          "quantity": 56840,
          "category": "Shirt"
        }, {
          "id": 3,
          "name": "../../assets/img3.jpg",
          "description": "Sint libero mollitia",
          "Size": "Large",
          "price": 302.00,
          "quantity": 9358,
          "category": "Skirt"
        }], [{
          "id": 4,
          "name": "../../assets/img4.jpg",
          "description": "In consequuntur cupiditat",
          "Size": "XLarge",
          "price": 279.00,
          "quantity": 90316,
          "category": "Top"
        }, {
          "id": 5,
          "name": "../../assets/img5.jpg",
          "description": "In consequuntur cupiditat",
          "Size": "Small",
          "price": 279.00,
          "quantity": 90316,
          "category": "Kurta"
        }, {
          "id": 6,
          "name": "../../assets/img3.jpg",
          "description": "Saepe nemo praesentium",
          "Size": "Large",
          "price": 760.00,
          "quantity": 5899,
          "category": "Western"
        }]];
        this.quantity = 1;
        this.stockAvailability = 'IN STOCK';
        this.loaded = false;
        this.size = '';
        this.sizeMsg = '';
        this.colorMsg = '';
        this.color = '';
        this.colorArray = []; // colorArray = ['red', 'green', 'yellow'];

        this.imageAddress = 'http://localhost:3000/';
        this.sizeArray = [];
        this.imageInterval = []; // imageInterval=[
        //   'assets/img1.jpg',
        //   'assets/img2.jpg',
        //   'assets/img3.jpg',
        //   'assets/img4.jpg',
        // ];

        this.image = 'assets/img1.jpg';
        setInterval(function () {
          _this19.imageClick();
        }, 3000);
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.obj = {};
          this.cartItem = new _models__WEBPACK_IMPORTED_MODULE_4__["CartItemModel"]();
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.getProduct(); // this.getProduct();
          // this.getId();
          // let a = sessionStorage.getItem('product');
          // console.log('local storage product', a);
          // this.sharedDataService.currentMessage.subscribe(message => this.message = message);
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "setImageArrays",
        value: function setImageArrays(response) {
          for (var i = 0; i < response['length']; i++) {
            var prod = {
              id: response[i].id,
              url: this.imageAddress + response[i].url,
              quantity: response[i].quantity
            };

            if (i == 0) {
              this.image = prod.url;
              this.obj['price'] = response[i].price;
              this.cartItem.name = response[i].name;
              this.cartItem.discount = response[i].discount; // APPLY DISCOUNT ON THE REAL PRICE

              var discount = response[i].price * response[i].discount / 100;
              this.obj['discountedPrice'] = response[i].price - discount;
              this.cartItem.price = this.obj['discountedPrice'];
              this.obj['name'] = response[i].name;
              this.obj['discount'] = response[i].discount;
              this.cartItem.id = prod.id;
              this.cartItem.id = prod.id;
              this.cartItem.url = this.imageAddress + response[i].url;
            }

            var size = response[i].size.size;
            this.checkColorSizeExist(response[i]);
            this.imageInterval.push(prod);
          }
        }
      }, {
        key: "checkColorSizeExist",
        value: function checkColorSizeExist(response) {
          var colorExist = false;
          var sizeExist = false;

          for (var j = 0; j < this.colorArray.length; j++) {
            if (this.colorArray[j].color == response.color.color) {
              colorExist = true;
            }
          }

          for (var _j2 = 0; _j2 < this.sizeArray.length; _j2++) {
            if (this.sizeArray[_j2].size == response.size.size) {
              sizeExist = true;
            }
          }

          if (!sizeExist) {
            this.sizeArray.push(response.size);
          }

          if (!colorExist) {
            this.colorArray.push(response.color);
          }
        }
      }, {
        key: "imageClick",
        value: function imageClick() {
          var length = this.imageInterval.length;

          for (var i = 0; i < length; i++) {
            if (this.imageInterval[i].url == this.image && i < length - 1) {
              this.image = this.imageInterval[i + 1].url;
              break;
            } else if (this.imageInterval[i].url == this.image && i == length - 1) {
              this.image = this.imageInterval[0].url;
              break;
            }
          }
        }
      }, {
        key: "getId",
        value: function getId() {
          var _this20 = this;

          this.cartItem = new _models__WEBPACK_IMPORTED_MODULE_4__["CartItemModel"]();

          for (var i = 0; i < this.products.length; i++) {
            var product = this.products[i];

            var _loop = function _loop(j) {
              var prod = product[j];

              _this20.route.params.subscribe(function (params) {
                if (prod.id == +params['id']) {
                  _this20.imageLink = prod.name;
                  _this20.obj = prod;
                  _this20.cartItem.id = prod.id;
                  _this20.cartItem.name = prod.name;
                  _this20.cartItem.quantity = _this20.quantity;
                  _this20.cartItem.description = prod.description;
                  _this20.cartItem.price = prod.price;
                  _this20.cartItem.category = prod.category;
                  _this20.cartItem.size = prod.Size;
                }
              });
            };

            for (var j = 0; j < product.length; j++) {
              _loop(j);
            }
          }

          this.loaded = true;
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          var _this21 = this;

          this.route.params.subscribe(function (params) {
            var id = +params['id'];

            _this21.productService.findWithCode(id).subscribe(function (response) {
              if (response) {
                _this21.setImageArrays(response);
              } else {
                _this21.snackBar.open('Product does not exist.', 'Dismiss', {
                  duration: 4000
                });
              }
            });
          });
        }
      }, {
        key: "addQuantity",
        value: function addQuantity() {
          if (this.quantity < 10) {
            this.quantity++;
          }
        }
      }, {
        key: "minusQuantity",
        value: function minusQuantity() {
          if (this.quantity > 1) {
            this.quantity--;
          }
        }
      }, {
        key: "changeSize",
        value: function changeSize(size) {
          this.size = size.size;
          this.sizeMsg = '';
          this.cartItem.sizeId = size.id;
        }
      }, {
        key: "changeColor",
        value: function changeColor(color) {
          this.color = color.color;
          this.colorMsg = '';
          this.cartItem.colorId = color.id; // this.size = s;
        } // newMessage() {
        //   this.sharedDataService.changeMessage("Hello from Product");
        // }

      }, {
        key: "addToCart",
        value: function addToCart() {
          if (this.size == '') {
            this.sizeMsg = 'Select Size';
          }

          if (this.color == '') {
            this.colorMsg = 'Select Color';
          }

          if (this.size != '' && this.color != '') {
            this.sizeMsg = '';
            this.colorMsg = '';
            this.cartItem.quantity = this.quantity;
            this.cartItem.size = this.size;
            this.cartItem.color = this.color;
            sessionStorage.setItem('product', JSON.stringify(this.cartItem));
            this.router.navigate(['home/addToCart']);
          }
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductComponent.prototype, "onResize", null);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/product/product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/modules/app/components/product/product.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] // private sharedDataService: SharedDataService
    ])], ProductComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/products/form/product-form.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/modules/app/components/products/form/product-form.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsProductsFormProductFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matCard{\n  margin: 20px;\n}\n.titleHeading{\n  font-family: \"Montserrat\";\n  margin-bottom: 20px;\n  margin-top: 8px;\n  font-weight: bold;\n}\n.optionButtons{\n  float: right;\n}\na:hover{\n  color: red;\n}\n.saveButton{\n  background-color: rgb(186, 189, 8);\n  color: black;\n}\n.cancelButton:hover{\n  background-color: rgb(186, 189, 8);\n  color: black;\n}\n.cancelButton{\n  margin-left: 20px;\n  color: white;\n  background-color: black;\n}\n@media(max-width:600px){\n  .titleHeading{\n    font-family: \"Montserrat\";\n    margin-bottom: 20px;\n    margin-top: 10px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2Zvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdENhcmR7XG4gIG1hcmdpbjogMjBweDtcbn1cbi50aXRsZUhlYWRpbmd7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcHRpb25CdXR0b25ze1xuICBmbG9hdDogcmlnaHQ7XG59XG5hOmhvdmVye1xuICBjb2xvcjogcmVkO1xufVxuLnNhdmVCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jYW5jZWxCdXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4OSwgOCk7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jYW5jZWxCdXR0b257XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgLnRpdGxlSGVhZGluZ3tcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/products/form/product-form.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/modules/app/components/products/form/product-form.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductFormComponent */

  /***/
  function srcModulesAppComponentsProductsFormProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function () {
      return ProductFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../config */
    "./src/modules/app/config/index.ts");

    var ProductFormComponent = /*#__PURE__*/function () {
      function ProductFormComponent(router, route, fb, productService, categoryService, sizeService, colorService, snackBar) {
        _classCallCheck(this, ProductFormComponent);

        this.router = router;
        this.route = route;
        this.fb = fb;
        this.productService = productService;
        this.categoryService = categoryService;
        this.sizeService = sizeService;
        this.colorService = colorService;
        this.snackBar = snackBar;
        this.pageActions = _config__WEBPACK_IMPORTED_MODULE_7__["GLOBALS"].pageActions;
        this.loaded = false;
        this.data = [];
        this.seasonList = ['Summer', 'Winter', 'Autum', 'Spring'];
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"].attributesLabels;
        this.pageAct = route.snapshot.data['act'];
      }

      _createClass(ProductFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializePage();
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.getCategoryList();
          this.getSizeList();
          this.getColorList();
          this.productModel = new _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"]();
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"]().validationRules());
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this22 = this;

          this.categoryService.findAll().subscribe(function (response) {
            _this22.categoryList = response;
          }, function (error) {
            return console.log(error);
          }, function () {});
        }
      }, {
        key: "getSizeList",
        value: function getSizeList() {
          var _this23 = this;

          this.sizeService.findAll().subscribe(function (response) {
            _this23.sizeList = response;
          }, function (error) {
            return console.log(error);
          }, function () {});
        }
      }, {
        key: "getColorList",
        value: function getColorList() {
          var _this24 = this;

          this.colorService.findAll().subscribe(function (response) {
            _this24.colorList = response;
          }, function (error) {
            return console.log(error);
          }, function () {});
        }
        /**
         * Initialize page
         */

      }, {
        key: "initializePage",
        value: function initializePage() {
          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"]().validationRules()); // this.getData();

          if (this.pageAct === this.pageActions.create) {
            this.page = 'Create'; // this.initCreatePage();
          } else {
            this.getData();
          }
        }
        /**
         * Get record
         */

      }, {
        key: "getData",
        value: function getData() {
          var _this25 = this;

          this.route.params.subscribe(function (params) {
            _this25.productId = params['id'];

            _this25.productService.find(params['id']).subscribe(function (response) {
              if (response) {
                _this25.productModel = response;
                console.log('product model', _this25.productModel);

                _this25.fg.patchValue(_this25.productModel); //TODO:low need to check why we are dowing this after fetching data


                if (_this25.pageAct == _this25.pageActions.view) {
                  _this25.page = 'View';

                  _this25.initViewPage();
                } else if (_this25.pageAct == _this25.pageActions.update) {
                  _this25.page = 'Update';

                  _this25.initUpdatePage();
                }
              }
            }, function (error) {
              console.log(error);
              _this25.loaded = true;
            }, function () {
              _this25.loaded = true;
            });
          });
        }
        /**
         * Initialize the update page
         */

      }, {
        key: "initUpdatePage",
        value: function initUpdatePage() {
          this.fg.enable();
        }
        /**
         * Initialize the view page
         */

      }, {
        key: "initViewPage",
        value: function initViewPage() {
          this.fg.disable();
        }
      }, {
        key: "saveData",
        value: function saveData(product) {
          var _this26 = this;

          // this.loaded = false;
          // if (this.pageAct === this.pageActions.create) {
          //   this.productService.create(product).subscribe(
          //     response => {
          //       this.snackBar.open('Product is created successfully','Dismiss' ,{
          //         duration: 3000,
          //       });          
          //       this.router.navigate([`/products`]);
          //     },
          //     error => {
          //       console.log(error);
          //       this.snackBar.open('Product creation failed.','Dismiss' ,{
          //         duration: 3000,
          //       });         },
          //     () => {
          //       // this.boxLoaded = true;
          //     }
          //   );
          // } else 
          if (this.pageAct === this.pageActions.update) {
            this.productService.update(this.productId, product).subscribe(function (response) {
              _this26.snackBar.open('Product is updated successfully', 'Dismiss', {
                duration: 3000
              });

              _this26.router.navigate(["/products"]);
            }, function (error) {
              console.log(error);

              _this26.snackBar.open('Something went wrong, please try again.', 'Dismiss', {
                duration: 3000
              });
            }, function () {// this.boxLoaded = true;
            });
          }
        }
      }, {
        key: "delete",
        value: function _delete(id) {}
      }]);

      return ProductFormComponent;
    }();

    ProductFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AddCategoryService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["SizeService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["ColorService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductFormComponent.prototype, "onResize", null);
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/products/form/product-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-form.component.css */
      "./src/modules/app/components/products/form/product-form.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _services__WEBPACK_IMPORTED_MODULE_5__["AddCategoryService"], _services__WEBPACK_IMPORTED_MODULE_5__["SizeService"], _services__WEBPACK_IMPORTED_MODULE_5__["ColorService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], ProductFormComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/products/list/product-list.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/modules/app/components/products/list/product-list.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsProductsListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.dgSearchBar{\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.productHeading{\n  font-size: 22px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  font-weight: bold;\n}\n.matTable{\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.viewIcon{\n  margin-left: 15px;\n}\n.editIcon{\n  margin-left: 30px;\n}\n.viewIcon:hover{\n  color: red;\n}\n.editIcon:hover{\n  color: red;\n}\n@media(max-width:600px){\n  .amountColumn{\n    margin-left: 50px;\n  }\n  .viewIcon{\n    margin-left: 10px;\n  }\n  .editIcon{\n    margin-left: 15px;\n  }\n  .productHeading{\n    font-size: 18px;\n    margin-left: 20px;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2xpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGdTZWFyY2hCYXJ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4ucHJvZHVjdEhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1hdFRhYmxle1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnZpZXdJY29ue1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5lZGl0SWNvbntcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4udmlld0ljb246aG92ZXJ7XG4gIGNvbG9yOiByZWQ7XG59XG4uZWRpdEljb246aG92ZXJ7XG4gIGNvbG9yOiByZWQ7XG59XG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgLmFtb3VudENvbHVtbntcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuICAudmlld0ljb257XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmVkaXRJY29ue1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5wcm9kdWN0SGVhZGluZ3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/products/list/product-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/modules/app/components/products/list/product-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcModulesAppComponentsProductsListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../models */
    "./src/modules/app/models/index.ts");

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(productService) {
        _classCallCheck(this, ProductListComponent);

        this.productService = productService;
        this.data1 = [];
        this.displayedColumns = ['name', 'available', 'price', 'discount', 'options'];
        this.displayedMobileColumns = ['name', 'available', 'options'];
        this.attrLabels = {
          name: 'Name',
          price: 'Price',
          available: 'Available',
          discount: 'Discount(%)'
        };
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.productModel = new _models__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]();
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this27 = this;

          this.productService.findAll().subscribe(function (response) {
            if (response) {
              for (var i = 0; i < response['length']; i++) {
                var obj = {
                  id: response[i].id,
                  name: response[i].name,
                  price: response[i].price,
                  discount: response[i].discount,
                  available: response[i].available
                };

                _this27.data1.push(obj);
              }

              _this27.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this27.data1);
              _this27.dataSource.paginator = _this27.paginator;
              _this27.dataSource.sort = _this27.sort;
            }
          });
        }
        /**
         * Apply filter and search in data grid
         */

      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase(); // TODO: need to check what it do.

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "sortData",
        value: function sortData() {
          this.dataSource.sort = this.sort;
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], ProductListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], ProductListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductListComponent.prototype, "onResize", null);
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/products/list/product-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.css */
      "./src/modules/app/components/products/list/product-list.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])], ProductListComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/register/register.component.css":
  /*!********************************************************************!*\
    !*** ./src/modules/app/components/register/register.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.matCard {\n    background-color: black;\n}\n\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n}\n\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n}\n\n.image {\n    /* background-image: url(../../../../assets/im8.jpeg);  */\n    /* height: 100%; */\n    background-color: whitesmoke;\n    overflow:hidden;\n    background-position: center;\n    background-size: cover;\n  }\n\n.login-form{\n      margin-top: 30px;\n  }\n\n.login {\n      margin-left: 20px;\n  }\n\n.cancelButton{\n      margin-left: 10px;\n      background-color: rgb(54, 44, 44);\n      color: rgb(232, 235, 84);\n  }\n\n.cancelButton:hover{\n    background-color: rgb(54, 44, 44);\n    color: rgb(232, 235, 84);\n  }\n\n.saveButton{\n      background-color: rgb(54, 44, 44);\n      color: rgb(232, 235, 84);\n  }\n\n.label{\n    width: -moz-fit-content;\n    margin-top: 10px;\n  }\n\n.label:hover{\n    cursor: pointer;\n    text-decoration: underline;\n    /* color: rgb(232, 235, 84); */\n  }\n\n@media(max-width:450px){\n    .cancelButton{\n        margin-left: 10%;\n        margin-right: 10%;\n        margin-top: 20px;\n        background-color: rgb(54, 44, 44);\n        color: rgb(232, 235, 84);\n    }\n  \n    .cancelButton:hover{\n      color: rgb(54, 44, 44);\n      background-color: rgb(232, 235, 84);\n    }\n  \n    .saveButton{\n        margin-left: 10%;\n        margin-right: 10%;\n        background-color: rgb(54, 44, 44);\n        color: rgb(232, 235, 84);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isc0JBQXNCO0VBQ3hCOztBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztBQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztBQUVBO01BQ0ksaUJBQWlCO01BQ2pCLGlDQUFpQztNQUNqQyx3QkFBd0I7RUFDNUI7O0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsd0JBQXdCO0VBQzFCOztBQUVBO01BQ0ksaUNBQWlDO01BQ2pDLHdCQUF3QjtFQUM1Qjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLHdCQUF3QjtJQUM1Qjs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0QixtQ0FBbUM7SUFDckM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlDQUFpQztRQUNqQyx3QkFBd0I7SUFDNUI7RUFDRiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0Q2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5tYXRDYXJkQnV0dG9ucyBidXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xufVxuXG4ubWF0SGVhZGluZyB7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmltYWdlIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltOC5qcGVnKTsgICovXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLmxvZ2luLWZvcm17XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgLmxvZ2luIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLmNhbmNlbEJ1dHRvbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA0NCwgNDQpO1xuICAgICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICB9XG5cbiAgLmNhbmNlbEJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDQ0LCA0NCk7XG4gICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICB9XG5cbiAgLnNhdmVCdXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDQ0LCA0NCk7XG4gICAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gIH1cblxuICAubGFiZWx7XG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sYWJlbDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgLyogY29sb3I6IHJnYigyMzIsIDIzNSwgODQpOyAqL1xuICB9XG5cbiAgQG1lZGlhKG1heC13aWR0aDo0NTBweCl7XG4gICAgLmNhbmNlbEJ1dHRvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNDQsIDQ0KTtcbiAgICAgICAgY29sb3I6IHJnYigyMzIsIDIzNSwgODQpO1xuICAgIH1cbiAgXG4gICAgLmNhbmNlbEJ1dHRvbjpob3ZlcntcbiAgICAgIGNvbG9yOiByZ2IoNTQsIDQ0LCA0NCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgICB9XG4gIFxuICAgIC5zYXZlQnV0dG9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA0NCwgNDQpO1xuICAgICAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gICAgfVxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/modules/app/components/register/register.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/app/components/register/register.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcModulesAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router, fb, registerService, snackBar) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.fb = fb;
        this.registerService = registerService;
        this.snackBar = snackBar;
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_4__["RegisterModel"].attributesLabels;
        this.mobileMask = [/[0]/, /[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.flexSize = 50;
          } else {
            this.flexSize = 80;
          }

          this.registerUser = new _models__WEBPACK_IMPORTED_MODULE_4__["RegisterModel"](); // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});

          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_4__["RegisterModel"]().validationRules()); // this.showTimer();
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.flexSize = 50;
          } else {
            this.flexSize = 80;
          }
        } // getErrorMessage() {
        //   return this.email.hasError('required') ? 'You must enter email id' :
        //       this.email.hasError('email') ? 'Not a valid email' :
        //           '';
        // }

      }, {
        key: "onSave",
        value: function onSave(user) {
          var _this28 = this;

          this.registerUser = user;
          this.registerUser.gender = 'Female';
          this.registerUser.isSuperUser = false; // console.log('Button is clicked '+ this.registerUser);

          this.registerService.register(this.registerUser).subscribe(function (response) {
            _this28.snackBar.open('Successful Registration', 'Dismiss', {
              duration: 3000
            });

            _this28.router.navigate(["/login"]);
          }, function (error) {
            _this28.snackBar.open('Registration Failed', 'Dismiss', {
              duration: 3000
            });
          }, function () {});
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], RegisterComponent.prototype, "onResize", null);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/modules/app/components/register/register.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/shipping/shipping.component.css":
  /*!********************************************************************!*\
    !*** ./src/modules/app/components/shipping/shipping.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsShippingShippingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/**  \n    These are the design implementation for Top bar.\n**/\n.matCard {\n    background-color: black;\n  }\n.matCardButtons button:hover{\n    color: rgb(232, 235, 84);\n  }\n.matHeading {\n    color: rgb(232, 235, 84);\n    margin-right: 20px;\n  }\n.right-way {\n          color: rgb(226, 202, 62);\n          font-size: 25px;\n          font-family: 'Playfair Display', serif;\n          text-align: center;\n          /* background-image: url(../../../../assets/logo);  */\n          /* height: 64px;\n          padding-left: 0px;\n          margin-left: 0px;\n          overflow: hidden;\n          background-position: center;\n          background-size: cover; */\n    }\n/**\n    These are the other designs for the page\n    **/\n.shippingPage{\n        margin: 30px;\n    }\n.amountCard{\n        /* background-color: #c1c1c1;\n        margin-left: 10%;\n        margin-right: 10%; */\n        margin-bottom: 30px;\n    }\n.orderLabel{\n        font-family: \"Montserrat\";\n        font-size: 22px;\n        margin-bottom: 15px;\n    }\n.totalLabel{\n        margin-top: 35px;\n        font-family: \"Montserrat\";\n        color: #696666;\n    }\n.itemLabel{\n        margin-top: 35px;\n        font-family: \"Montserrat\";\n        color: #494848;\n    }\n.formClass{\n        margin-top: 10px;\n        font-family: \"Montserrat\";\n        color: #696666;\n    }\n.shippingLabel{\n        margin-bottom: 20px;\n        font-size: 18px;\n        color: #494848;\n    }\n.fname-margin{\n        margin-top: 30px;\n    }\n.paymentButton{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n        margin-right: 15px;\n    }\n.cancelButton{\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n.cancelButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n        height: 40px;\n    }\n@media (max-width:500px){\n        .fname-margin{\n            margin-top: 5px;\n        }\n        .buttons{\n            font-size: 12px;\n        }\n        .shippingPage{\n            margin: 20px;\n        }\n        .orderLabel{\n            font-family: \"Montserrat\";\n            font-size: 16px;\n            margin-bottom: 15px;\n        }\n        .totalLabel{\n            margin-top: 25px;\n            font-size: 14px;\n            font-family: \"Montserrat\";\n            color: #696666;\n        }\n        .itemLabel{\n            margin-top: 25px;\n            font-size: 14px;\n            font-family: \"Montserrat\";\n            color: #494848;\n        }\n        .shippingLabel{\n            margin-bottom: 20px;\n            font-size: 16px;\n            color: #494848;\n        }\n    }\n/* #right{\n        font-size: 12px;\n    }\n\n    .prodLabel{\n        padding-bottom: 10px;\n        margin-left: 20px;\n        font-size: 12px;\n    }\n\n    .img{\n        width: 100%;\n        height: 500px;\n    }\n\n    .descriptionClass{\n        margin-left: 25px;\n        font-family: 'Playfair Display', serif;\n    } */\n/* .pkr{\n        margin-top: 20px;\n    } */\n/* .PKRHeading{\n        margin-left: 20px;\n        color: #e95144;\n        font-weight: bold;\n    }\n\n    .addCartButton{\n        background-color: black;\n        color: white;\n        height: 40px;\n    }\n\n    .addCartButton:hover{\n        background-color: rgb(186, 189, 8);\n        color: black;\n    }\n\n    .quantityHeading{\n        margin-top: 20px;\n        font-size: 12px;\n    }\n\n    .btn-qty {\n        width: 40px;\n        height: 40px;\n        line-height: 40px;\n        display: block;\n        border: 1px solid  #ddd;\n        text-align: center;\n        color: #999;\n        font-size: 12px;\n        transition: all .5s ease;\n        backface-visibility: hidden;\n        border-radius: 0;\n        margin-top: 12px;\n    }\n\n    .btn-qty:hover{\n        cursor: pointer;\n        background-color: black;\n        color: rgb(226, 202, 62);\n    }\n\n    .matField{\n        width: 150px;\n        text-align: center;\n    }\n\n    .spinner {\n        display: flex;\n        justify-content: center;\n        margin: 10%;\n      } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3NoaXBwaW5nL3NoaXBwaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjtJQUNJLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0FBSUU7VUFDTSx3QkFBd0I7VUFDeEIsZUFBZTtVQUNmLHNDQUFzQztVQUN0QyxrQkFBa0I7VUFDbEIscURBQXFEO1VBQ3JEOzs7OzttQ0FLeUI7SUFDL0I7QUFFQTs7TUFFRTtBQUVGO1FBQ0ksWUFBWTtJQUNoQjtBQUVBO1FBQ0k7OzRCQUVvQjtRQUNwQixtQkFBbUI7SUFDdkI7QUFFQTtRQUNJLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0FBRUE7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7QUFFQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtBQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0FBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7QUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUVBO1FBQ0ksa0NBQWtDO1FBQ2xDLFlBQVk7UUFDWixZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0FBR0E7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFDQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUVBO1FBQ0k7WUFDSSxlQUFlO1FBQ25CO1FBQ0E7WUFDSSxlQUFlO1FBQ25CO1FBQ0E7WUFDSSxZQUFZO1FBQ2hCO1FBQ0E7WUFDSSx5QkFBeUI7WUFDekIsZUFBZTtZQUNmLG1CQUFtQjtRQUN2QjtRQUNBO1lBQ0ksZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsY0FBYztRQUNsQjtRQUNBO1lBQ0ksZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsY0FBYztRQUNsQjtRQUNBO1lBQ0ksbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixjQUFjO1FBQ2xCO0lBQ0o7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JHO0FBRUg7O09BRUc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9ESyIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy9zaGlwcGluZy9zaGlwcGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqICBcbiAgICBUaGVzZSBhcmUgdGhlIGRlc2lnbiBpbXBsZW1lbnRhdGlvbiBmb3IgVG9wIGJhci5cbioqL1xuLm1hdENhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAubWF0Q2FyZEJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgfVxuICBcbiAgLm1hdEhlYWRpbmcge1xuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzUsIDg0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH0gICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgLnJpZ2h0LXdheSB7XG4gICAgICAgICAgY29sb3I6IHJnYigyMjYsIDIwMiwgNjIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9sb2dvKTsgICovXG4gICAgICAgICAgLyogaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgICB9XG5cbiAgICAvKipcbiAgICBUaGVzZSBhcmUgdGhlIG90aGVyIGRlc2lnbnMgZm9yIHRoZSBwYWdlXG4gICAgKiovXG5cbiAgICAuc2hpcHBpbmdQYWdle1xuICAgICAgICBtYXJnaW46IDMwcHg7XG4gICAgfVxuXG4gICAgLmFtb3VudENhcmR7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlOyAqL1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5vcmRlckxhYmVse1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAudG90YWxMYWJlbHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBjb2xvcjogIzY5NjY2NjtcbiAgICB9XG5cbiAgICAuaXRlbUxhYmVse1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgIGNvbG9yOiAjNDk0ODQ4O1xuICAgIH1cblxuICAgIC5mb3JtQ2xhc3N7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgY29sb3I6ICM2OTY2NjY7XG4gICAgfVxuXG4gICAgLnNoaXBwaW5nTGFiZWx7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgfVxuXG4gICAgLmZuYW1lLW1hcmdpbntcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG5cbiAgICAucGF5bWVudEJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG5cblxuICAgIC5jYW5jZWxCdXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLmNhbmNlbEJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpe1xuICAgICAgICAuZm5hbWUtbWFyZ2lue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25ze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaGlwcGluZ1BhZ2V7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm9yZGVyTGFiZWx7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50b3RhbExhYmVse1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgICAgIGNvbG9yOiAjNjk2NjY2O1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtTGFiZWx7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgICAgIH1cbiAgICAgICAgLnNoaXBwaW5nTGFiZWx7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICM0OTQ4NDg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAjcmlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAucHJvZExhYmVse1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb25DbGFzc3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIH0gKi9cblxuICAgIC8qIC5wa3J7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfSAqL1xuXG4gICAgLyogLlBLUkhlYWRpbmd7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjogI2U5NTE0NDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmFkZENhcnRCdXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAuYWRkQ2FydEJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg5LCA4KTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIC5xdWFudGl0eUhlYWRpbmd7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuYnRuLXF0eSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgICNkZGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgLmJ0bi1xdHk6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yOiByZ2IoMjI2LCAyMDIsIDYyKTtcbiAgICB9XG5cbiAgICAubWF0RmllbGR7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zcGlubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTAlO1xuICAgICAgfSAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/shipping/shipping.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/app/components/shipping/shipping.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ShippingComponent */

  /***/
  function srcModulesAppComponentsShippingShippingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingComponent", function () {
      return ShippingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");

    var ShippingComponent = /*#__PURE__*/function () {
      function ShippingComponent(route, router, fb, sharedDataService, customerService) {
        _classCallCheck(this, ShippingComponent);

        this.route = route;
        this.router = router;
        this.fb = fb;
        this.sharedDataService = sharedDataService;
        this.customerService = customerService;
        this.componentLabels = _models__WEBPACK_IMPORTED_MODULE_5__["CustomerModel"].attributesLabels;
        this.mobileMask = [/[0]/, /[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.itemsInCart = 0;
      }

      _createClass(ShippingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          this.customerModel = new _models__WEBPACK_IMPORTED_MODULE_5__["CustomerModel"](); // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});

          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_5__["CustomerModel"]().validationRules());
          this.sharedDataService.currentMessage.subscribe(function (message) {
            return _this29.amount = message;
          });
          this.sharedDataService.currentUser.subscribe(function (user) {
            return _this29.user = user;
          });
          this.sharedDataService.currentItemsInCart.subscribe(function (itemCount) {
            return _this29.itemsInCart = itemCount;
          });

          if (this.amount == 0) {
            this.loadCart();
          } else {
            this.amount = Math.floor(this.amount);
          }
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        } // getId() {
        //   this.cartItem = new CartItemModel();
        //   for (let i = 0; i < this.products.length; i++) {
        //     let product = this.products[i];
        //     for (let j = 0; j < product.length; j++) {
        //       let prod = product[j];
        //       this.route.params.subscribe(params => {
        //         if (prod.id == +params['id']){
        //           this.imageLink = prod.name;
        //           this.obj = prod;
        //           this.cartItem.id = prod.id;
        //           this.cartItem.name = prod.name;
        //           this.cartItem.quantity = this.quantity;
        //           this.cartItem.description = prod.description;
        //           this.cartItem.price = prod.price;
        //           this.cartItem.category = prod.category;
        //           this.cartItem.size = prod.Size;
        //         }
        //       });
        //     }
        //   }
        //   this.loaded = true;
        // }
        // addQuantity() {
        //   this.quantity++;
        //   console.log('plus button clicked');
        // }
        //setting user data

      }, {
        key: "setUser",
        value: function setUser() {
          this.sharedDataService.sendUserInfo(this.user);
        }
      }, {
        key: "cancelClick",
        value: function cancelClick() {
          this.router.navigate(['home/addToCart']);
        }
      }, {
        key: "addCustomerDetails",
        value: function addCustomerDetails(customer) {
          this.customerModel = customer;
          this.user = this.customerModel;
          this.setUser(); // this.customerService.create(this.customerModel).subscribe(response => {
          //   console.log('Response for Customer create '+ response);
          //   // sending user data to payment component
          //   this.user = this.customerModel;
          //   console.log('set user caled');
          //   this.setUser();
          // },
          // error =>{
          //   console.log('error in Customer '+ error)
          // },
          // ()=>{}
          // )

          this.router.navigate(['home/addToCart/payment']);
        } // change number of items added in Shopping Cart

      }, {
        key: "changeItemsTotal",
        value: function changeItemsTotal() {
          this.sharedDataService.changeItemsInCart(this.itemsInCart);
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          var totalAmount = 0;
          var taxAmount = 0;
          var deliveryCharges = 0;
          this.itemsInCart = 0;
          var items = [];
          var item;
          var cart = [];

          if (sessionStorage.getItem('cart') != null) {
            cart = JSON.parse(sessionStorage.getItem('cart'));

            for (var i = 0; i < cart.length; i++) {
              item = JSON.parse(cart[i]);
              items.push(item);
              totalAmount += item.price * item.quantity;
              this.itemsInCart += 1 * item.quantity;
            }

            if (totalAmount > 0) {
              deliveryCharges = 200;
            }

            taxAmount = totalAmount * 0 / 100;
            this.amount = totalAmount + taxAmount + deliveryCharges;
            this.amount = Math.floor(this.amount);
            this.changeItemsTotal();
          }
        }
      }]);

      return ShippingComponent;
    }();

    ShippingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ShippingComponent.prototype, "onResize", null);
    ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shipping',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipping.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/shipping/shipping.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipping.component.css */
      "./src/modules/app/components/shipping/shipping.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _services__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])], ShippingComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/snack-bar/snack-bar.component.css":
  /*!**********************************************************************!*\
    !*** ./src/modules/app/components/snack-bar/snack-bar.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsSnackBarSnackBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-pizza-party {\n    color: rgb(232, 235, 84);\n    font-size: 14px;\n  }\n  .dismiss{\n    float: right;\n    cursor: pointer;\n  }\n  .dismiss:hover{\n    counter-reset: rgb(240, 65, 94);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5kaXNtaXNze1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmRpc21pc3M6aG92ZXJ7XG4gICAgY291bnRlci1yZXNldDogcmdiKDI0MCwgNjUsIDk0KTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app/components/snack-bar/snack-bar.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/app/components/snack-bar/snack-bar.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SnackBarComponent */

  /***/
  function srcModulesAppComponentsSnackBarSnackBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function () {
      return SnackBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SnackBarComponent = /*#__PURE__*/function () {
      function SnackBarComponent() {
        _classCallCheck(this, SnackBarComponent);
      }

      _createClass(SnackBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SnackBarComponent;
    }();

    SnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-snack-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./snack-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/snack-bar/snack-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./snack-bar.component.css */
      "./src/modules/app/components/snack-bar/snack-bar.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SnackBarComponent);
    /***/
  },

  /***/
  "./src/modules/app/components/unstitch/unstitch.component.css":
  /*!********************************************************************!*\
    !*** ./src/modules/app/components/unstitch/unstitch.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppComponentsUnstitchUnstitchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comingSoon{\n  font-size: 30px;\n  margin-top: 50px;\n  text-align: center;\n}\n\n/**\n  CSS FOR TOOLBAR\n  **/\n\n.matCard {\n  background-color: #e2e2e2;\n}\n\n.matCardButtons button:hover{\n  color: rgb(232, 235, 84);\n}\n\n.matHeading {\n  color: rgb(7, 7, 7);\n  margin-right: 20px;\n}\n\n.right-way {\n        color: rgb(226, 202, 62);\n        font-size: 25px;\n        font-family: 'Playfair Display', serif;\n        text-align: center;\n  }\n\n/**\n  CSS FOR BODY OF HOME COMPONENT\n  **/\n\n.homePage{\n    /* background-color: black; */\n    padding-left: 50px;\n    padding-right: 50px;\n    font-family: \"Montserrat\", arial, tahoma;\n    /* margin-top: 50px; */\n  }\n\n.homeMatCard {\n    margin-top: 25px;\n    padding: 0px !important;\n  }\n\n/**\n  CSS FOR IMAGE AND HOVER IMAGE EFFECT\n  **/\n\n.img{\n    width: 100%;\n    height: 350px;\n\t  transform: scale(1);\n   transition: .3s ease-in-out;\n  }\n\n.img:hover {\n    transform: scale(1.3);\n      opacity: 1;\n      cursor: pointer;\n  }\n\n.imgOverflow{\n    overflow: hidden;\n  }\n\n/**\n  CSS FOR TEXT BOX SHOW ON HOVER IMAGE\n  **/\n\n.hoverTextbox {\n    position: absolute;\n    bottom: -40px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 125px;\n    margin-left: 10px ;\n    width: 150px !important;\n    font-family: \"Montserrat\";\n    font-size: 12px;\n    transition: .3s ease-in-out;\n    opacity: 0;\n  }\n\n.img:hover+.hoverTextbox {\n    bottom: 200px;\n    opacity: 0.8;\n  }\n\n/**\n  CSS FOR TEXT BELOW THE IMAGES\n  **/\n\n.middle{\n    margin-right: 20%;\n    margin-left: 20%;\n    margin-bottom: 20px !important;\n    text-align: center;\n  }\n\n.text{\n    margin-top: 20%;\n    cursor: pointer;\n\t  transition: .3s ease-in-out;\n  }\n\n.text:hover{\n    margin-top: 20%;\n    font-weight: bold;\n    text-decoration: underline;\n  }\n\n.paragraph{\n    font-size: 12px;\n    line-height: 16px;\n  }\n\n.label{\n    font-size: 16px;\n    cursor: pointer;\n    text-decoration: underline;\n\t  transition: .3s ease-in-out;\n  }\n\n.label:hover{\n    font-weight: bold;\n    text-decoration: none;\n  }\n\n/**\n  CSS FOR IMAGE SLIDER ANIMATION\n  **/\n\n.imgSlider{\n    -webkit-animation: myfirst 3s linear infinite;\n            animation: myfirst 3s linear infinite;\n  }\n\n@-webkit-keyframes myfirst {\n      0% {\n          transform: scale(1,1);\n      }\n      80% {\n          transform: scale(1.2,1.2);\n      }\n      100% {\n          transform: scale(1,1);\n      }\n  }\n\n@keyframes myfirst {\n      0% {\n          transform: scale(1,1);\n      }\n      80% {\n          transform: scale(1.2,1.2);\n      }\n      100% {\n          transform: scale(1,1);\n      }\n  }\n\n.imgSlider:hover {\n      opacity: 1;\n  }\n\n.sliderMatCard{\n    padding: 0px;\n    overflow: hidden;\n  }\n\n.sliderText{\n    position: absolute;\n\t  bottom: 0px;\n    display: block;\n    text-align: center;\n    background-color: rgb(48, 49, 47);\n    color: white;\n    height: 60px;\n    /* margin-left: 10px ; */\n    width: 100% !important;\n    font-family: \"Montserrat\";\n\t  font-size: 12px;\n\t  /* -webkit-transition: .3s ease-in-out;\n\t  transition: .3s ease-in-out; */\n\t  opacity: 0.7;\n  }\n\n@media(max-width:600px){\n\n  .homeMatCard{\n    /* margin-top: 25px; */\n    padding: 0px !important;\n    /* overflow: hidden; */\n  }\n  .imgOverflow{\n    overflow: hidden;\n  }\n  .homePage{\n    /* background-color: black; */\n    padding-left: 20px;\n    padding-right: 20px;\n    /* margin-top: 50px; */\n  }\n  .img{\n    width: 100%;\n    height: 550px;\n  }\n  .img:hover{\n    /* opacity: 0.8; */\n    cursor: pointer;\n  }\n}\n\n@media(max-width:450px){\n  .img{\n    width: 100%;\n    height: 420px;\n  }\n  .img:hover+.hoverTextbox {\n    bottom: 180px;\n    opacity: 0.8;\n  }\n}\n\n@media(min-width:992px){\n  .img{\n    width: 100%;\n    height: 400px;\n  }\n  .img:hover+.hoverTextbox {\n    bottom: 180px;\n    opacity: 0.8;\n  }\n}\n\n/* input color class */\n\n/* ::ng-deep input.mat-input-element {\n    background-color: #fff !important;\n  } */\n\n/* Change label color on focused */\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n    color: #fff !important;\n  }\n\n/* underline border color on focused */\n\n::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple{\n    background-color: #fff !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC9jb21wb25lbnRzL3Vuc3RpdGNoL3Vuc3RpdGNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7SUFFSTs7QUFDSjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBSUU7UUFDTSx3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLHNDQUFzQztRQUN0QyxrQkFBa0I7RUFDeEI7O0FBR0E7O0lBRUU7O0FBQ0Y7SUFDRSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7QUFFQTs7SUFFRTs7QUFDRjtJQUNFLFdBQVc7SUFDWCxhQUFhO0dBRWQsbUJBQW1CO0dBRWxCLDJCQUEyQjtFQUM3Qjs7QUFDQTtJQUVJLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YsZUFBZTtFQUNuQjs7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFHQTs7SUFFRTs7QUFDRjtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0FBRUE7O0lBRUU7O0FBQ0Y7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtHQUVoQiwyQkFBMkI7RUFDNUI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDBCQUEwQjtFQUM1Qjs7QUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDBCQUEwQjtHQUUzQiwyQkFBMkI7RUFDNUI7O0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCOztBQUNBOztJQUVFOztBQUNGO0lBQ0UsNkNBQXFDO1lBQXJDLHFDQUFxQztFQUN2Qzs7QUFDQTtNQUNJO1VBQ0kscUJBQXFCO01BQ3pCO01BQ0E7VUFDSSx5QkFBeUI7TUFDN0I7TUFDQTtVQUNJLHFCQUFxQjtNQUN6QjtFQUNKOztBQVZBO01BQ0k7VUFDSSxxQkFBcUI7TUFDekI7TUFDQTtVQUNJLHlCQUF5QjtNQUM3QjtNQUNBO1VBQ0kscUJBQXFCO01BQ3pCO0VBQ0o7O0FBQ0E7TUFDSSxVQUFVO0VBQ2Q7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0Usa0JBQWtCO0dBQ25CLFdBQVc7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIseUJBQXlCO0dBQzFCLGVBQWU7R0FDZjtpQ0FDOEI7R0FDOUIsWUFBWTtFQUNiOztBQUVGOztFQUVFO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjs7QUFFRSxzQkFBc0I7O0FBQ3hCOztLQUVLOztBQUVILGtDQUFrQzs7QUFDcEM7SUFDSSxzQkFBc0I7RUFDeEI7O0FBRUYsc0NBQXNDOztBQUN0QztJQUNJLGlDQUFpQztFQUNuQyIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAvY29tcG9uZW50cy91bnN0aXRjaC91bnN0aXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWluZ1Nvb257XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKipcbiAgQ1NTIEZPUiBUT09MQkFSXG4gICoqL1xuLm1hdENhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xufVxuXG4ubWF0Q2FyZEJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICBjb2xvcjogcmdiKDIzMiwgMjM1LCA4NCk7XG59XG5cbi5tYXRIZWFkaW5nIHtcbiAgY29sb3I6IHJnYig3LCA3LCA3KTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgLnJpZ2h0LXdheSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjI2LCAyMDIsIDYyKTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICAvKipcbiAgQ1NTIEZPUiBCT0RZIE9GIEhPTUUgQ09NUE9ORU5UXG4gICoqL1xuICAuaG9tZVBhZ2V7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBhcmlhbCwgdGFob21hO1xuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXG4gIH1cbiAgXG4gIC5ob21lTWF0Q2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qKlxuICBDU1MgRk9SIElNQUdFIEFORCBIT1ZFUiBJTUFHRSBFRkZFQ1RcbiAgKiovXG4gIC5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0ICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmltZzpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5pbWdPdmVyZmxvd3tcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cblxuICAvKipcbiAgQ1NTIEZPUiBURVhUIEJPWCBTSE9XIE9OIEhPVkVSIElNQUdFXG4gICoqL1xuICAuaG92ZXJUZXh0Ym94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OSwgNDcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4IDtcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5pbWc6aG92ZXIrLmhvdmVyVGV4dGJveCB7XG4gICAgYm90dG9tOiAyMDBweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAvKipcbiAgQ1NTIEZPUiBURVhUIEJFTE9XIFRIRSBJTUFHRVNcbiAgKiovXG4gIC5taWRkbGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50ZXh0e1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdCAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC50ZXh0OmhvdmVye1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAucGFyYWdyYXBoe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuICAubGFiZWx7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0ICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmxhYmVsOmhvdmVye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAvKipcbiAgQ1NTIEZPUiBJTUFHRSBTTElERVIgQU5JTUFUSU9OXG4gICoqL1xuICAuaW1nU2xpZGVye1xuICAgIGFuaW1hdGlvbjogbXlmaXJzdCAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgQGtleWZyYW1lcyBteWZpcnN0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICB9XG4gICAgICA4MCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICB9XG4gIH1cbiAgLmltZ1NsaWRlcjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5zbGlkZXJNYXRDYXJke1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5zbGlkZXJUZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICBib3R0b206IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OSwgNDcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHggOyAqL1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuXHQgIGZvbnQtc2l6ZTogMTJweDtcblx0ICAvKiAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0ICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7ICovXG5cdCAgb3BhY2l0eTogMC43O1xuICB9XG5cbkBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xuXG4gIC5ob21lTWF0Q2FyZHtcbiAgICAvKiBtYXJnaW4tdG9wOiAyNXB4OyAqL1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gIH1cbiAgLmltZ092ZXJmbG93e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmhvbWVQYWdle1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXG4gIH1cbiAgLmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICB9XG4gIC5pbWc6aG92ZXJ7XG4gICAgLyogb3BhY2l0eTogMC44OyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjQ1MHB4KXtcbiAgLmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICB9XG4gIC5pbWc6aG92ZXIrLmhvdmVyVGV4dGJveCB7XG4gICAgYm90dG9tOiAxODBweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDo5OTJweCl7XG4gIC5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuICAuaW1nOmhvdmVyKy5ob3ZlclRleHRib3gge1xuICAgIGJvdHRvbTogMTgwcHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbiAgLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cbi8qIDo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9ICovXG4gIFxuICAvKiBDaGFuZ2UgbGFiZWwgY29sb3Igb24gZm9jdXNlZCAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuLyogdW5kZXJsaW5lIGJvcmRlciBjb2xvciBvbiBmb2N1c2VkICovXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app/components/unstitch/unstitch.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/app/components/unstitch/unstitch.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UnStitchComponent */

  /***/
  function srcModulesAppComponentsUnstitchUnstitchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnStitchComponent", function () {
      return UnStitchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/app/services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models */
    "./src/modules/app/models/index.ts");

    var UnStitchComponent = /*#__PURE__*/function () {
      function UnStitchComponent(fb, registerService, homeService, productService) {
        _classCallCheck(this, UnStitchComponent);

        this.fb = fb;
        this.registerService = registerService;
        this.homeService = homeService;
        this.productService = productService;
        this.imageInterval = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg', 'assets/img4.jpg', 'assets/img5.jpg', 'assets/img2.jpg', 'assets/img3.jpg', 'assets/img4.jpg', 'assets/img1.jpg', 'assets/img5.jpg', 'assets/img3.jpg', 'assets/img4.jpg'];
        this.imageInterval1 = [['assets/img1.jpg', 'assets/img2.jpg'], ['assets/img3.jpg', 'assets/img4.jpg'], ['assets/img5.jpg', 'assets/img2.jpg'], ['assets/img3.jpg', 'assets/img4.jpg'], ['assets/img1.jpg', 'assets/img5.jpg'], ['assets/img3.jpg', 'assets/img4.jpg']];
        this.imageInterval2 = [['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg'], ['assets/img4.jpg', 'assets/img5.jpg', 'assets/img2.jpg'], ['assets/img3.jpg', 'assets/img4.jpg', 'assets/img1.jpg'], ['assets/img5.jpg', 'assets/img3.jpg', 'assets/img4.jpg']];
        this.image = 'assets/img1.jpg';
        this.products = [{
          "id": 1,
          "name": "../../assets/img1.jpg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        }, {
          "id": 2,
          "name": "../../assets/img2.jpg",
          "description": "Incidunt et magni",
          "price": "170.00",
          "quantity": 56840
        }, {
          "id": 3,
          "name": "../../assets/img3.jpg",
          "description": "Sint libero mollitia",
          "price": "302.00",
          "quantity": 9358
        }, {
          "id": 4,
          "name": "../../assets/img4.jpg",
          "description": "In consequuntur cupiditat",
          "price": "279.00",
          "quantity": 90316
        }, {
          "id": 5,
          "name": "../../assets/img5.jpg",
          "description": "In consequuntur cupiditat",
          "price": "279.00",
          "quantity": 90316
        }, {
          "id": 6,
          "name": "../../assets/img1.jpg",
          "description": "Saepe nemo praesentium",
          "price": "760.00",
          "quantity": 5899
        }]; // setInterval(()=> { this.imageClick() }, 3000);
      } // email = new FormControl('', [<any>Validators.required, Validators.email]);


      _createClass(UnStitchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productService.findByDiscount(15).subscribe(function (response) {// for(let i=0;i<response['length'];i++){
            //   this.imageInterval.push(response[i].url);
            // }
            // for(let j=0;j<response['length']/2;j=j+1){
            //   this.imageInterval1[j].push(response[j*2].url);
            //   this.imageInterval1[j].push(response[(j*2)+1].url);
            // }
            // for(let j=0;j<response['length']/3;j=j+1){
            //   this.imageInterval2[j].push(response[j*2].url);
            //   this.imageInterval2[j].push(response[(j*2)+1].url);
            //   this.imageInterval2[j].push(response[(j*2)+2].url);
            // }
          });
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }

          var imageAddress = '../../assets/im1.jpg';
          this.url = 'http://localhost:3000/uploads/img1.jpg';
          this.notifyUser = new _models__WEBPACK_IMPORTED_MODULE_4__["NotifyUserModel"](); // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});

          this.fg = this.fb.group(new _models__WEBPACK_IMPORTED_MODULE_4__["NotifyUserModel"]().validationRules()); // this.showTimer();
        } // code for checking size of screen

      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 600) {
            this.isMobileScreen = false;
          } else {
            this.isMobileScreen = true;
          }
        }
      }, {
        key: "imageClick",
        value: function imageClick() {
          var length = this.imageInterval.length;

          for (var i = 0; i < length; i++) {
            if (this.imageInterval[i] == this.image && i < length - 1) {
              this.image = this.imageInterval[i + 1];
              break;
            } else if (this.imageInterval[i] == this.image && i == length - 1) {
              this.image = this.imageInterval[0];
              break;
            }
          }
        }
      }, {
        key: "getImages",
        value: function getImages() {}
      }]);

      return UnStitchComponent;
    }();

    UnStitchComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], UnStitchComponent.prototype, "onResize", null);
    UnStitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unstitch',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unstitch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app/components/unstitch/unstitch.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unstitch.component.css */
      "./src/modules/app/components/unstitch/unstitch.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])], UnStitchComponent);
    /***/
  },

  /***/
  "./src/modules/app/config/globals.ts":
  /*!*******************************************!*\
    !*** ./src/modules/app/config/globals.ts ***!
    \*******************************************/

  /*! exports provided: GLOBALS */

  /***/
  function srcModulesAppConfigGlobalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GLOBALS", function () {
      return GLOBALS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GLOBALS = {
      appName: 'Idrak',
      PORTAL: {
        INSTITUTE: 'institute',
        REGISTRATION: 'registration',
        CAMPUS: 'campus'
      },
      pageActions: {
        home: 'home',
        sale: 'sale',
        newArrival: 'newArrival',
        summerCollection: 'summerCollection',
        view: 'view',
        update: 'update',
        create: 'create',
        "delete": 'delete'
      },
      deleteDialog: {
        width: '350px',
        message: 'Do you want to delete it permanently?',
        alertMessage: 'This Record cannot be deleted'
      },
      displayARecordDialog: {
        width: '450px'
      },
      masks: {
        mobile: [/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        contact: [/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        cnic: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/],
        zip: [/[0-9]/, /\d/, /\d/, /\d/, /\d/],
        time: [/[0-9]/, /\d/, ':', /\d/, /\d/],
        yearMonth: [/[0-9]/, /\d/],
        year: [/[0-9]/, /\d/, /\d/, /\d/]
      },
      CRBuildingType: {
        own: 'own',
        rented: 'rented',
        lease: 'lease'
      },
      weekDays: [{
        dayId: 'SUN',
        name: 'Sunday',
        abbreviation: 'sun'
      }, {
        dayId: 'MON',
        name: 'Monday',
        abbreviation: 'mon'
      }, {
        dayId: 'TUE',
        name: 'Tuesday',
        abbreviation: 'tue'
      }, {
        dayId: 'WED',
        name: 'Wednesday',
        abbreviation: 'wed'
      }, {
        dayId: 'THR',
        name: 'Thursday',
        abbreviation: 'thr'
      }, {
        dayId: 'FRI',
        name: 'Friday',
        abbreviation: 'fri'
      }, {
        dayId: 'SAT',
        name: 'Saturday',
        abbreviation: 'sat'
      }],
      configurationKeys: {
        appName: 'appName',
        city: 'city',
        tehsil: 'tehsil',
        province: 'province',
        country: 'country',
        natureOfWork: 'natureOfWork',
        natureOfCourse: 'natureOfCourse',
        instrumentType: 'instrumentType',
        bank: 'bank',
        natureOfFeeHeads: 'natureOfFeeHeads',
        typeOfFeeHeads: 'typeOfFeeHeads',
        concessionCategory: 'concessionCategory',
        concessionType: 'concessionType',
        singleConf: 'singleConf',
        maxCreditHour: 'maxCreditHour',
        showRemittance: 'showRemittance'
      },
      CRApplicationType: {
        create: {
          title: 'New Campus',
          value: 'create'
        },
        transfer: {
          title: 'Transfer Campus',
          value: 'transfer'
        }
      },
      CRApplicationStatus: {
        approve: {
          title: 'Approve',
          value: 'approve'
        },
        reject: {
          title: 'Reject',
          value: 'reject'
        },
        "new": {
          title: 'New',
          value: 'new'
        },
        submit: {
          title: 'Submit',
          value: 'submit'
        }
      },
      session: {
        spring: {
          title: 'Spring',
          value: 'spring'
        },
        summer: {
          title: 'Summer',
          value: 'summer'
        },
        fall: {
          title: 'Fall',
          value: 'fall'
        }
      },
      courseTypes: {
        theoratical: {
          title: 'Theoratical',
          value: 'theoratical'
        },
        practical: {
          title: 'Practical',
          value: 'practical'
        }
      },
      creditHours: [{
        id: 0,
        value: '0'
      }, {
        id: 1,
        value: '1'
      }, {
        id: 2,
        value: '2'
      }, {
        id: 3,
        value: '3'
      }, {
        id: 4,
        value: '4'
      }, {
        id: 5,
        value: '5'
      }, {
        id: 6,
        value: '6'
      }],
      // Evaluation Sheet -> Sections -> Questions -> has many options
      ESQOptions: [{
        form: 'all',
        questionOptions: [{
          type: 'ratingTypeOne',
          label: 'Rating',
          value: ['Strongly Agree', 'Agree', 'Neither Agree nor Disagree', 'Disagree', 'Strongly Disagree']
        }, {
          type: 'ratingTypeTwo',
          label: 'Rating',
          value: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor']
        }, {
          type: 'selection',
          label: 'Selection',
          value: ['Yes', 'No']
        }, {
          type: 'selectionWithCount',
          label: 'Selection',
          value: ['Yes', 'No']
        }, {
          type: 'textInput',
          label: 'Custom Answer (text input)',
          value: []
        }, {
          type: 'countInput',
          label: 'Count',
          value: []
        }, {
          type: 'textArea',
          label: 'Custom Answer (text area)',
          value: []
        }]
      }, {
        form: 'campus-application-form',
        questionOptions: [{
          type: 'selection',
          label: 'Selection',
          value: ['Yes', 'No']
        }, {
          type: 'textInput',
          label: 'Custom Answer (text input)',
          value: []
        }, {
          type: 'countInput',
          label: 'Count',
          value: []
        }]
      }],
      // Evaluation Sheet Forms
      ESForms: [{
        label: 'Application Form',
        value: 'application-form'
      }, {
        label: 'Examination Form',
        value: 'examination-form'
      }, {
        label: 'Interview Sheet',
        value: 'interview-sheet'
      }, {
        label: 'Campus Application Form',
        value: 'campus-application-form'
      }],
      // System configurations and their options to be used.
      configurations: [{
        key: 'appName',
        label: 'App Name',
        options: [],
        type: 'text'
      }, {
        key: 'country',
        label: 'Country',
        options: [{
          key: 'abbreviation',
          label: 'Abbreviation'
        }, {
          key: 'countryCode',
          label: 'Country Code',
          required: true
        }],
        type: 'text'
      }, {
        key: 'province',
        label: 'Province',
        options: [{
          key: 'abbreviation',
          label: 'Abbreviation'
        }],
        parent: {
          parentKey: 'country',
          label: 'Country'
        },
        type: 'text'
      }, {
        key: 'city',
        label: 'City',
        options: [{
          key: 'abbreviation',
          label: 'Abbreviation'
        }],
        type: 'text',
        parent: {
          parentKey: 'province',
          label: 'Province'
        }
      }, {
        key: 'tehsil',
        label: 'Tehsil',
        options: [{
          key: 'abbreviation',
          label: 'Abbreviation'
        }],
        type: 'text',
        parent: {
          parentKey: 'city',
          label: 'City'
        }
      }, {
        key: 'instituteAffiliation',
        label: 'Institute Affiliation',
        options: [],
        type: 'text'
      }, {
        key: 'instrumentType',
        label: 'Instrument Type',
        options: [],
        type: 'text'
      }, {
        key: 'natureOfWork',
        label: 'Nature of Work',
        options: [],
        type: 'text'
      }, {
        key: 'natureOfCourse',
        label: 'Nature of Course',
        options: [{
          key: 'natureOfCourseOrder',
          label: 'Order'
        }],
        type: 'text'
      }, {
        key: 'natureOfFeeHeads',
        label: 'Nature of Fee Heads',
        options: [],
        type: 'text'
      }, {
        key: 'typeOfFeeHeads',
        label: 'Type of Fee Heads',
        options: [],
        type: 'text'
      }, {
        key: 'concessionCategory',
        label: 'Concession Category',
        options: [],
        type: 'text'
      }, {
        key: 'concessionType',
        label: 'Concession Type',
        options: [],
        type: 'text'
      }, {
        key: 'maxCreditHour',
        label: 'Max Credit Hour',
        options: [],
        type: 'number',
        validation: 'int'
      }, {
        key: 'appName',
        label: 'App Name',
        options: [],
        type: 'text'
      }, {
        key: 'showRemittance',
        label: 'Show Remittance',
        options: [],
        type: 'number',
        validation: 'int'
      }],

      /**
       * WF State Flows Rules
       * We need to perform some actions when document state is moved from current state to next state.
       * So before sending it to next state there might be something to do.
       * Those actions may be anthing which is defined in our rule.s
       */
      StateFlowRules: [{
        workFlow: 'pre-registration',
        rules: [{
          toState: 'reject',
          action: 'confirm-reject',
          options: {
            message: 'Are you sure your want to reject Pre-Registration application?'
          }
        }]
      }, {
        workFlow: 'post-registration',
        rules: [{
          toState: 'reject',
          action: 'remarks-for-reject',
          options: {
            message: 'Reject Remarks'
          }
        }, // Here action (remarks-for-approve) means Forward Application to Create MOU.
        {
          toState: 'forward-for-create-mou',
          action: 'remarks-for-approve',
          options: {
            message: 'Evaluation Approval Remarks'
          }
        }, {
          toState: 'forward-for-analysis',
          action: 'attach-evaluation-sheet'
        }]
      }],

      /**
       * Amount Formates in percentage and amount
       * Being used in Concession & Fee Heads
       */
      AmountFormat: {
        percentage: 'Percentage',
        amount: 'Amount'
      },
      // scholarships type
      scholarshipTypes: {
        annual: {
          title: 'Annual',
          value: 'annual'
        },
        monthly: {
          title: 'Monthly',
          value: 'monthly'
        }
      },

      /**
       * Classroom types to add classroom in campus->building->floor->room
       */
      classRoomTypes: [{
        label: 'Classroom',
        value: 'classroom'
      }, {
        label: 'Lab',
        value: 'lab'
      }],

      /**
       * Data Grid / Data Table Settings
       *
       */
      dataTable: {
        pageSize: 25,
        pageSizeOptions: [25, 50, 100]
      },

      /**
       * Application workflows
       * Used to retreive list of specific workflow states
       */
      WORKFLOW: {
        PRE_REGISTRATION: {
          name: 'pre-registration',
          states: [{
            label: 'All',
            value: 'all'
          }, {
            label: 'New',
            value: 'submit'
          }, {
            label: 'Approved',
            value: 'approve'
          }, {
            label: 'Rejected',
            value: 'reject'
          }],
          COMPLETE_LIST: {
            label: 'All',
            value: 'all'
          }
        },
        POST_REGISTRATION: {
          name: 'post-registration',
          states: [{
            label: 'All',
            value: 'all'
          }, {
            label: 'Draft',
            value: 'draft'
          }, {
            label: 'New',
            value: 'submit'
          }, {
            label: 'Evaluation',
            value: 'forward-for-analysis'
          }, {
            label: 'Evaluated',
            value: 'submit-analysis'
          }, {
            label: 'Create MOU',
            value: 'forward-for-create-mou'
          }, {
            label: 'MOU Verification',
            value: 'mou-approval'
          }, {
            label: 'Create Campus',
            value: 'create-campus'
          }, {
            label: 'Campus Account Details',
            value: 'forward-for-account-info'
          }, {
            label: 'Approved',
            value: 'done'
          }, {
            label: 'Rejected',
            value: 'reject'
          }],
          COMPLETE_LIST: {
            label: 'All',
            value: 'all'
          },
          ACTION_PERFORMED: {
            label: 'Action Perfomed',
            value: 'action-performed'
          }
        }
      },

      /**
      * Campus status list campus
      */
      CMAPUS_STATES: [{
        label: 'All',
        value: 'all'
      }, {
        label: 'Awating',
        value: 'draft'
      }, {
        label: 'Approved',
        value: 'done'
      }, {
        label: 'Rejected',
        value: 'close'
      }],

      /**
      * For Purpose list on campus
      */
      MOU_VERIFICATION_PURPOSES: ['Application Form', 'Registration Form', 'MOU Fee'],

      /**
       * For Management Fee type
       */
      FEE_TYPES: [{
        key: 'application-form',
        label: 'Application Form'
      }, {
        key: 'license-fee',
        label: 'License Fee'
      }, {
        key: 'registration-form',
        label: 'Registration Form'
      }],

      /**
       * months
       */
      MONTHS: [{
        number: 1,
        name: 'January',
        abbreviation: 'JAN'
      }, {
        number: 2,
        name: 'Febuary',
        abbreviation: 'FEB'
      }, {
        number: 3,
        name: 'March',
        abbreviation: 'MAR'
      }, {
        number: 4,
        name: 'April',
        abbreviation: 'APR'
      }, {
        number: 5,
        name: 'May',
        abbreviation: 'MAY'
      }, {
        number: 6,
        name: 'June',
        abbreviation: 'JUN'
      }, {
        number: 7,
        name: 'July',
        abbreviation: 'JUL'
      }, {
        number: 8,
        name: 'August',
        abbreviation: 'AUG'
      }, {
        number: 9,
        name: 'Sepetember',
        abbreviation: 'SEP'
      }, {
        number: 10,
        name: 'October',
        abbreviation: 'OCT'
      }, {
        number: 11,
        name: 'November',
        abbreviation: 'NOV'
      }, {
        number: 12,
        name: 'December',
        abbreviation: 'DEC'
      }],

      /**
       * These are for document CRUD
       */
      docTypes: {
        original: {
          title: 'Original',
          value: 'original'
        },
        photocopy: {
          title: 'Photocopy',
          value: 'photocopy'
        }
      },
      docFors: {
        admissionFormCollection: {
          value: 'admissionFormCollection',
          title: 'Admission Form Collection'
        }
      },

      /**
       * These are for roadmap
       */
      RMCategories: {
        fall: {
          title: 'Fall',
          value: 'fall'
        },
        spring: {
          title: 'Spring',
          value: 'spring'
        },
        summer: {
          title: 'Summer',
          value: 'summer'
        }
      },
      academicYears: [2018, 2019, 2020, 2021, 2022, 2023]
    };
    /***/
  },

  /***/
  "./src/modules/app/config/index.ts":
  /*!*****************************************!*\
    !*** ./src/modules/app/config/index.ts ***!
    \*****************************************/

  /*! exports provided: GLOBALS */

  /***/
  function srcModulesAppConfigIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./globals */
    "./src/modules/app/config/globals.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GLOBALS", function () {
      return _globals__WEBPACK_IMPORTED_MODULE_1__["GLOBALS"];
    });
    /***/

  },

  /***/
  "./src/modules/app/models/cart-item.ts":
  /*!*********************************************!*\
    !*** ./src/modules/app/models/cart-item.ts ***!
    \*********************************************/

  /*! exports provided: CartItemModel */

  /***/
  function srcModulesAppModelsCartItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItemModel", function () {
      return CartItemModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CartItemModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function CartItemModel() {
        _classCallCheck(this, CartItemModel);
      }
      /**
       * Form Validation Rules
       *
      */


      _createClass(CartItemModel, [{
        key: "validationRules",
        value: function validationRules() {
          return {
            // name: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            // sold: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            // type: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
        /**
         * Forgot Password Validation Rules
         *
        */

      }, {
        key: "FPValidationRules",
        value: function FPValidationRules() {
          return {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return CartItemModel;
    }(); // sold: number;
    // type: string;

    /**
     * Attributes Labels
     */


    CartItemModel.attributesLabels = {
      name: 'Name',
      description: 'Description',
      category: 'Category',
      size: 'Size',
      color: 'Color',
      price: 'Price',
      quantity: 'Quantity'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/category.ts":
  /*!********************************************!*\
    !*** ./src/modules/app/models/category.ts ***!
    \********************************************/

  /*! exports provided: CategoryModel */

  /***/
  function srcModulesAppModelsCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModel", function () {
      return CategoryModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CategoryModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function CategoryModel() {
        _classCallCheck(this, CategoryModel);
      }
      /**
       * Form Validation Rules
       *
      */


      _createClass(CategoryModel, [{
        key: "validationRules",
        value: function validationRules() {
          return {
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return CategoryModel;
    }();
    /**
     * Attributes Labels
     */


    CategoryModel.attributesLabels = {
      category: 'Category',
      description: 'Description'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/color.ts":
  /*!*****************************************!*\
    !*** ./src/modules/app/models/color.ts ***!
    \*****************************************/

  /*! exports provided: ColorModel */

  /***/
  function srcModulesAppModelsColorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorModel", function () {
      return ColorModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ColorModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function ColorModel() {
        _classCallCheck(this, ColorModel);
      }
      /**
       * Form Validation Rules
       *
      */


      _createClass(ColorModel, [{
        key: "validationRules",
        value: function validationRules() {
          return {
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return ColorModel;
    }();
    /**
     * Attributes Labels
     */


    ColorModel.attributesLabels = {
      color: 'Color',
      description: 'Description'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/customer.ts":
  /*!********************************************!*\
    !*** ./src/modules/app/models/customer.ts ***!
    \********************************************/

  /*! exports provided: CustomerModel */

  /***/
  function srcModulesAppModelsCustomerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerModel", function () {
      return CustomerModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CustomerModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function CustomerModel() {
        _classCallCheck(this, CustomerModel);
      }
      /**
       *
       * @param equalControlName
       */


      _createClass(CustomerModel, [{
        key: "equalTo",
        value: function equalTo(equalControlName) {
          return function (control) {
            if (!control['_parent']) return null;
            if (!control['_parent'].controls[equalControlName]) throw new TypeError('Form Control ' + equalControlName + ' does not exists.');
            var controlMatch = control['_parent'].controls[equalControlName]; // cehecking the field is dirty

            if (controlMatch.dirty === true) {
              if (controlMatch.value == control.value) {
                controlMatch.setErrors(null);
                return null;
              } else {
                return {
                  equalTo: true
                };
              }
            }
          };
        }
        /**
         * Form Validation Rules
         *
        */

      }, {
        key: "validationRules",
        value: function validationRules() {
          return {
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('([0-9]{4})-([0-9]{7})')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)]),
            instruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [])
          };
        }
        /**
         * Forgot Password Validation Rules
         *
        */

      }, {
        key: "FPValidationRules",
        value: function FPValidationRules() {
          return {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return CustomerModel;
    }();
    /**
     * Attributes Labels
     */


    CustomerModel.attributesLabels = {
      fname: 'First Name',
      lname: 'Last Name',
      email: 'Email',
      address: 'Address',
      mobileNumber: 'Mobile Number',
      instruction: 'Instructions'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/index.ts":
  /*!*****************************************!*\
    !*** ./src/modules/app/models/index.ts ***!
    \*****************************************/

  /*! exports provided: NotifyUserModel, LoginModel, RegisterModel, ProductModel, CategoryModel, SizeModel, CartItemModel, CustomerModel, ColorModel, OrderModel */

  /***/
  function srcModulesAppModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _notify_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./notify-user */
    "./src/modules/app/models/notify-user.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotifyUserModel", function () {
      return _notify_user__WEBPACK_IMPORTED_MODULE_1__["NotifyUserModel"];
    });
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login */
    "./src/modules/app/models/login.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginModel", function () {
      return _login__WEBPACK_IMPORTED_MODULE_2__["LoginModel"];
    });
    /* harmony import */


    var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register */
    "./src/modules/app/models/register.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterModel", function () {
      return _register__WEBPACK_IMPORTED_MODULE_3__["RegisterModel"];
    });
    /* harmony import */


    var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product */
    "./src/modules/app/models/product.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductModel", function () {
      return _product__WEBPACK_IMPORTED_MODULE_4__["ProductModel"];
    });
    /* harmony import */


    var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category */
    "./src/modules/app/models/category.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CategoryModel", function () {
      return _category__WEBPACK_IMPORTED_MODULE_5__["CategoryModel"];
    });
    /* harmony import */


    var _size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./size */
    "./src/modules/app/models/size.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SizeModel", function () {
      return _size__WEBPACK_IMPORTED_MODULE_6__["SizeModel"];
    });
    /* harmony import */


    var _cart_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cart-item */
    "./src/modules/app/models/cart-item.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CartItemModel", function () {
      return _cart_item__WEBPACK_IMPORTED_MODULE_7__["CartItemModel"];
    });
    /* harmony import */


    var _customer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./customer */
    "./src/modules/app/models/customer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerModel", function () {
      return _customer__WEBPACK_IMPORTED_MODULE_8__["CustomerModel"];
    });
    /* harmony import */


    var _color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./color */
    "./src/modules/app/models/color.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColorModel", function () {
      return _color__WEBPACK_IMPORTED_MODULE_9__["ColorModel"];
    });
    /* harmony import */


    var _order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./order */
    "./src/modules/app/models/order.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrderModel", function () {
      return _order__WEBPACK_IMPORTED_MODULE_10__["OrderModel"];
    }); // Models

    /***/

  },

  /***/
  "./src/modules/app/models/login.ts":
  /*!*****************************************!*\
    !*** ./src/modules/app/models/login.ts ***!
    \*****************************************/

  /*! exports provided: LoginModel */

  /***/
  function srcModulesAppModelsLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModel", function () {
      return LoginModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function LoginModel() {
        _classCallCheck(this, LoginModel);
      }
      /**
       * Form Validation Rules
       *
      */


      _createClass(LoginModel, [{
        key: "validationRules",
        value: function validationRules() {
          return {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
        /**
         * Forgot Password Validation Rules
         *
        */

      }, {
        key: "FPValidationRules",
        value: function FPValidationRules() {
          return {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return LoginModel;
    }();
    /**
     * Attributes Labels
     */


    LoginModel.attributesLabels = {
      email: 'Email',
      password: 'Password'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/notify-user.ts":
  /*!***********************************************!*\
    !*** ./src/modules/app/models/notify-user.ts ***!
    \***********************************************/

  /*! exports provided: NotifyUserModel */

  /***/
  function srcModulesAppModelsNotifyUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyUserModel", function () {
      return NotifyUserModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // import { MinLengthValidator } from '@angular/forms/src/directives/validators';


    var NotifyUserModel = /*#__PURE__*/function () {
      function NotifyUserModel() {
        _classCallCheck(this, NotifyUserModel);
      } // ,[<any>Validators.pattern('^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$')]

      /**
       * Form Validation Rules
       */


      _createClass(NotifyUserModel, [{
        key: "validationRules",
        value: function validationRules() {
          return {
            //   email: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
          };
        }
      }]);

      return NotifyUserModel;
    }();

    NotifyUserModel.attributesLabels = {
      name: 'Get Notify by Email'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/order.ts":
  /*!*****************************************!*\
    !*** ./src/modules/app/models/order.ts ***!
    \*****************************************/

  /*! exports provided: OrderModel */

  /***/
  function srcModulesAppModelsOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderModel", function () {
      return OrderModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var OrderModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function OrderModel() {
        _classCallCheck(this, OrderModel);
      }
      /**
       *
       * @param equalControlName
       */


      _createClass(OrderModel, [{
        key: "equalTo",
        value: function equalTo(equalControlName) {
          return function (control) {
            if (!control['_parent']) return null;
            if (!control['_parent'].controls[equalControlName]) throw new TypeError('Form Control ' + equalControlName + ' does not exists.');
            var controlMatch = control['_parent'].controls[equalControlName]; // cehecking the field is dirty

            if (controlMatch.dirty === true) {
              if (controlMatch.value == control.value) {
                controlMatch.setErrors(null);
                return null;
              } else {
                return {
                  equalTo: true
                };
              }
            }
          };
        }
        /**
         * Form Validation Rules
         *
        */

      }, {
        key: "validationRules",
        value: function validationRules() {
          return {
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('([0-9]{4})-([0-9]{7})')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)]),
            instruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [])
          };
        }
        /**
         * Forgot Password Validation Rules
         *
        */

      }, {
        key: "FPValidationRules",
        value: function FPValidationRules() {
          return {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return OrderModel;
    }();
    /**
     * Attributes Labels
     */


    OrderModel.attributesLabels = {
      fname: 'First Name',
      lname: 'Last Name',
      email: 'Email',
      address: 'Address',
      mobileNumber: 'Mobile Number',
      instruction: 'Instructions'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/product.ts":
  /*!*******************************************!*\
    !*** ./src/modules/app/models/product.ts ***!
    \*******************************************/

  /*! exports provided: ProductModel */

  /***/
  function srcModulesAppModelsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModel", function () {
      return ProductModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProductModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function ProductModel() {
        _classCallCheck(this, ProductModel);
      }
      /**
       * Form Validation Rules
       *
      */


      _createClass(ProductModel, [{
        key: "validationRules",
        value: function validationRules() {
          return {
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            available: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            // sold: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            sizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]),
            colorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            season: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          };
        }
        /**
         * Forgot Password Validation Rules
         *
        */

      }, {
        key: "FPValidationRules",
        value: function FPValidationRules() {
          return {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return ProductModel;
    }();
    /**
     * Attributes Labels
     */


    ProductModel.attributesLabels = {
      name: 'Name',
      description: 'Description',
      categoryId: 'Category',
      sizeId: 'Size',
      colorId: 'Color',
      code: 'Product Code',
      price: 'Price',
      discount: 'Discount',
      available: 'Available',
      sold: 'Sold',
      type: 'Type',
      season: 'Season'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/register.ts":
  /*!********************************************!*\
    !*** ./src/modules/app/models/register.ts ***!
    \********************************************/

  /*! exports provided: RegisterModel */

  /***/
  function srcModulesAppModelsRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModel", function () {
      return RegisterModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var RegisterModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function RegisterModel() {
        _classCallCheck(this, RegisterModel);
      }
      /**
       *
       * @param equalControlName
       */


      _createClass(RegisterModel, [{
        key: "equalTo",
        value: function equalTo(equalControlName) {
          return function (control) {
            if (!control['_parent']) return null;
            if (!control['_parent'].controls[equalControlName]) throw new TypeError('Form Control ' + equalControlName + ' does not exists.');
            var controlMatch = control['_parent'].controls[equalControlName]; // cehecking the field is dirty

            if (controlMatch.dirty === true) {
              if (controlMatch.value == control.value) {
                controlMatch.setErrors(null);
                return null;
              } else {
                return {
                  equalTo: true
                };
              }
            }
          };
        }
        /**
         * Form Validation Rules
         *
        */

      }, {
        key: "validationRules",
        value: function validationRules() {
          return {
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), this.equalTo('confirmPassword')]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), this.equalTo('password')])
          };
        }
        /**
         * Forgot Password Validation Rules
         *
        */

      }, {
        key: "FPValidationRules",
        value: function FPValidationRules() {
          return {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return RegisterModel;
    }();
    /**
     * Attributes Labels
     */


    RegisterModel.attributesLabels = {
      name: 'Name',
      email: 'Email',
      address: 'Address',
      mobileNumber: 'Mobile Number',
      password: 'Password',
      confirmPassword: 'Confirm Password'
    };
    /***/
  },

  /***/
  "./src/modules/app/models/size.ts":
  /*!****************************************!*\
    !*** ./src/modules/app/models/size.ts ***!
    \****************************************/

  /*! exports provided: SizeModel */

  /***/
  function srcModulesAppModelsSizeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SizeModel", function () {
      return SizeModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SizeModel = /*#__PURE__*/function () {
      /**
       * Construstor
      */
      function SizeModel() {
        _classCallCheck(this, SizeModel);
      }
      /**
       * Form Validation Rules
       *
      */


      _createClass(SizeModel, [{
        key: "validationRules",
        value: function validationRules() {
          return {
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
          };
        }
      }]);

      return SizeModel;
    }(); // description: string;

    /**
     * Attributes Labels
     */


    SizeModel.attributesLabels = {
      size: 'Size'
    };
    /***/
  },

  /***/
  "./src/modules/app/services/about.service.ts":
  /*!***************************************************!*\
    !*** ./src/modules/app/services/about.service.ts ***!
    \***************************************************/

  /*! exports provided: AboutService */

  /***/
  function srcModulesAppServicesAboutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutService", function () {
      return AboutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutService = function AboutService() {
      _classCallCheck(this, AboutService);
    };

    AboutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AboutService);
    /***/
  },

  /***/
  "./src/modules/app/services/add-category.service.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/app/services/add-category.service.ts ***!
    \**********************************************************/

  /*! exports provided: AddCategoryService */

  /***/
  function srcModulesAppServicesAddCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryService", function () {
      return AddCategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");

    var AddCategoryService = /*#__PURE__*/function (_authorization_servic) {
      _inherits(AddCategoryService, _authorization_servic);

      var _super = _createSuper(AddCategoryService);

      function AddCategoryService(http, router) {
        var _this30;

        _classCallCheck(this, AddCategoryService);

        _this30 = _super.call(this, router, http);
        _this30.http = http;
        _this30.router = router;
        _this30.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "category");
        return _this30;
      }

      _createClass(AddCategoryService, [{
        key: "create",
        value: function create(item) {
          return this.http.post("".concat(this.routeURL, "/create"), item, this.setHeaders());
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.routeURL, "/findAll"), this.setHeaders());
        }
        /**
         * Update record
         */

      }, {
        key: "update",
        value: function update(id, item) {
          return this.http.put("".concat(this.routeURL, "/update/").concat(id), item, this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "find",
        value: function find(id) {
          return this.http.get("".concat(this.routeURL, "/find/").concat(id), this.setHeaders());
        }
        /**
         * Delete record
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.routeURL, "/delete/").concat(id), this.setHeaders());
        }
      }]);

      return AddCategoryService;
    }(_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]);

    AddCategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AddCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AddCategoryService);
    /***/
  },

  /***/
  "./src/modules/app/services/authorization.service.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/app/services/authorization.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthorizationService */

  /***/
  function srcModulesAppServicesAuthorizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationService", function () {
      return AuthorizationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthorizationService = /*#__PURE__*/function () {
      function AuthorizationService(router, http) {
        _classCallCheck(this, AuthorizationService);

        this.router = router;
        this.http = http;
        this.setHeaders();
      }

      _createClass(AuthorizationService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.isAuthenticated()) {
            this.router.navigate(['/home']);
          }

          return true;
        }
      }, {
        key: "setHeaders",
        value: function setHeaders() {
          // let headers = new Headers();
          // headers.append('token', sessionStorage.getItem('token'));
          // return new RequestOptions({ headers: headers })
          if (sessionStorage.getItem('token') != null) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'token': sessionStorage.getItem('token')
              })
            };
            return options;
          } else {
            return {};
          }
        }
        /**
         * TODO:low the same function is in employee.service.ts file. Do something about it.
         */

      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          if (sessionStorage.getItem('id') && sessionStorage.getItem('token') && sessionStorage.getItem('token') !== undefined) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AuthorizationService;
    }();

    AuthorizationService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthorizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AuthorizationService);
    /***/
  },

  /***/
  "./src/modules/app/services/color.service.ts":
  /*!***************************************************!*\
    !*** ./src/modules/app/services/color.service.ts ***!
    \***************************************************/

  /*! exports provided: ColorService */

  /***/
  function srcModulesAppServicesColorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorService", function () {
      return ColorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");

    var ColorService = /*#__PURE__*/function (_authorization_servic2) {
      _inherits(ColorService, _authorization_servic2);

      var _super2 = _createSuper(ColorService);

      // constructor(protected http: HttpClient) {}
      function ColorService(http, router) {
        var _this31;

        _classCallCheck(this, ColorService);

        _this31 = _super2.call(this, router, http);
        _this31.http = http;
        _this31.router = router;
        _this31.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "color");
        return _this31;
      }
      /**
       * Create record
       */


      _createClass(ColorService, [{
        key: "create",
        value: function create(item) {
          return this.http.post("".concat(this.routeURL, "/create"), item, this.setHeaders());
        }
        /**
         * Get all records
         */

      }, {
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.routeURL, "/findAll"), this.setHeaders());
        }
        /**
         * Update record
         */

      }, {
        key: "update",
        value: function update(id, item) {
          return this.http.put("".concat(this.routeURL, "/update/").concat(id), item, this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "find",
        value: function find(id) {
          return this.http.get("".concat(this.routeURL, "/find/").concat(id), this.setHeaders());
        }
        /**
         * Delete record
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.routeURL, "/delete/").concat(id), this.setHeaders());
        }
      }]);

      return ColorService;
    }(_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]);

    ColorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ColorService);
    /***/
  },

  /***/
  "./src/modules/app/services/customer.service.ts":
  /*!******************************************************!*\
    !*** ./src/modules/app/services/customer.service.ts ***!
    \******************************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcModulesAppServicesCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");

    var CustomerService = /*#__PURE__*/function (_authorization_servic3) {
      _inherits(CustomerService, _authorization_servic3);

      var _super3 = _createSuper(CustomerService);

      // constructor(protected http: HttpClient) {}
      function CustomerService(http, router) {
        var _this32;

        _classCallCheck(this, CustomerService);

        _this32 = _super3.call(this, router, http);
        _this32.http = http;
        _this32.router = router;
        _this32.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "customer");
        return _this32;
      }

      _createClass(CustomerService, [{
        key: "create",
        value: function create(item) {
          return this.http.post("".concat(this.routeURL, "/create"), item, this.setHeaders());
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.routeURL, "/findAll"), this.setHeaders());
        }
      }]);

      return CustomerService;
    }(_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]);

    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], CustomerService);
    /***/
  },

  /***/
  "./src/modules/app/services/home.service.ts":
  /*!**************************************************!*\
    !*** ./src/modules/app/services/home.service.ts ***!
    \**************************************************/

  /*! exports provided: HomeService */

  /***/
  function srcModulesAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var HomeService = function HomeService(http) {
      _classCallCheck(this, HomeService);

      this.http = http;
      this.routeURL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "home");
    };

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HomeService);
    /***/
  },

  /***/
  "./src/modules/app/services/index.ts":
  /*!*******************************************!*\
    !*** ./src/modules/app/services/index.ts ***!
    \*******************************************/

  /*! exports provided: AboutService, HomeService, LoginService, RegisterService, ProductService, AddCategoryService, SizeService, SharedDataService, CustomerService, ColorService, OrderService, AuthorizationService */

  /***/
  function srcModulesAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./about.service */
    "./src/modules/app/services/about.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AboutService", function () {
      return _about_service__WEBPACK_IMPORTED_MODULE_1__["AboutService"];
    });
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.service */
    "./src/modules/app/services/home.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"];
    });
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/modules/app/services/login.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"];
    });
    /* harmony import */


    var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register.service */
    "./src/modules/app/services/register.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return _register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"];
    });
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product.service */
    "./src/modules/app/services/product.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"];
    });
    /* harmony import */


    var _add_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-category.service */
    "./src/modules/app/services/add-category.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryService", function () {
      return _add_category_service__WEBPACK_IMPORTED_MODULE_6__["AddCategoryService"];
    });
    /* harmony import */


    var _size_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./size.service */
    "./src/modules/app/services/size.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SizeService", function () {
      return _size_service__WEBPACK_IMPORTED_MODULE_7__["SizeService"];
    });
    /* harmony import */


    var _shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared-data.service */
    "./src/modules/app/services/shared-data.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedDataService", function () {
      return _shared_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"];
    });
    /* harmony import */


    var _customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./customer.service */
    "./src/modules/app/services/customer.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return _customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"];
    });
    /* harmony import */


    var _color_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./color.service */
    "./src/modules/app/services/color.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColorService", function () {
      return _color_service__WEBPACK_IMPORTED_MODULE_10__["ColorService"];
    });
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./order.service */
    "./src/modules/app/services/order.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return _order_service__WEBPACK_IMPORTED_MODULE_11__["OrderService"];
    });
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationService", function () {
      return _authorization_service__WEBPACK_IMPORTED_MODULE_12__["AuthorizationService"];
    }); // Services

    /***/

  },

  /***/
  "./src/modules/app/services/login.service.ts":
  /*!***************************************************!*\
    !*** ./src/modules/app/services/login.service.ts ***!
    \***************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcModulesAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl, "user");
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(item) {
          return this.http.post("".concat(this.routeURL, "/login"), item).map(function (response) {
            // let res = response.json();
            // my change
            var res = response;
            sessionStorage.setItem('id', res['id']);
            sessionStorage.setItem('name', res['name']);
            sessionStorage.setItem('email', res['email']);
            sessionStorage.setItem('value', res['isSuperUser']);
            sessionStorage.setItem('token', res['token']);
            return res; // return true;
          }); //.catch(this.handleError);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LoginService);
    /***/
  },

  /***/
  "./src/modules/app/services/order.service.ts":
  /*!***************************************************!*\
    !*** ./src/modules/app/services/order.service.ts ***!
    \***************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcModulesAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OrderService = /*#__PURE__*/function (_authorization_servic4) {
      _inherits(OrderService, _authorization_servic4);

      var _super4 = _createSuper(OrderService);

      function OrderService(http, route) {
        var _this33;

        _classCallCheck(this, OrderService);

        _this33 = _super4.call(this, route, http);
        _this33.http = http;
        _this33.route = route;
        _this33.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "order");
        return _this33;
      }
      /**
       * Create record
       */
      // create(item: OrderModel) {


      _createClass(OrderService, [{
        key: "create",
        value: function create(item) {
          // let options = this.setHeaders();
          return this.http.post("".concat(this.routeURL, "/create"), item, this.setHeaders());
        }
        /**
         * Get all records
         */

      }, {
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.routeURL, "/findAll"), this.setHeaders());
        }
        /**
         * Get all records
         */

      }, {
        key: "findAllWithProducts",
        value: function findAllWithProducts() {
          return this.http.get("".concat(this.routeURL, "/findAllWithProducts"), this.setHeaders());
        }
        /**
         * Update record
         */

      }, {
        key: "update",
        value: function update(id, item) {
          return this.http.put("".concat(this.routeURL, "/update/").concat(id), item, this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "find",
        value: function find(id) {
          return this.http.get("".concat(this.routeURL, "/find/").concat(id), this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "findWithProducts",
        value: function findWithProducts(orderId) {
          return this.http.get("".concat(this.routeURL, "/findWithProducts/").concat(orderId), this.setHeaders());
        }
        /**
         * Delete record
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.routeURL, "/delete/").concat(id), this.setHeaders());
        }
      }]);

      return OrderService;
    }(_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"]);

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], OrderService);
    /***/
  },

  /***/
  "./src/modules/app/services/product.service.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/app/services/product.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcModulesAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");

    var ProductService = /*#__PURE__*/function (_authorization_servic5) {
      _inherits(ProductService, _authorization_servic5);

      var _super5 = _createSuper(ProductService);

      // constructor(protected http: HttpClient) { }
      function ProductService(http, router) {
        var _this34;

        _classCallCheck(this, ProductService);

        _this34 = _super5.call(this, router, http);
        _this34.http = http;
        _this34.router = router;
        _this34.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl, "product");
        return _this34;
      }

      _createClass(ProductService, [{
        key: "create",
        value: function create(item) {
          return this.http.post("".concat(this.routeURL, "/create"), item, this.setHeaders());
        }
        /**
         * Get all records
         */

      }, {
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.routeURL, "/findAll"), this.setHeaders());
        }
        /**
         * Update record
         */

      }, {
        key: "update",
        value: function update(id, item) {
          return this.http.put("".concat(this.routeURL, "/update/").concat(id), item, this.setHeaders());
        }
        /**
         * Update record
         */

      }, {
        key: "updateQuantity",
        value: function updateQuantity(id, quantity) {
          var quan = {
            quantity: quantity
          };
          return this.http.put("".concat(this.routeURL, "/updateQuantity/").concat(id), quan, this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "find",
        value: function find(id) {
          return this.http.get("".concat(this.routeURL, "/find/").concat(id), this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "findByDiscount",
        value: function findByDiscount(discount) {
          return this.http.get("".concat(this.routeURL, "/findByDiscount/").concat(discount), this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "findBySeason",
        value: function findBySeason(season) {
          return this.http.get("".concat(this.routeURL, "/findBySeason/").concat(season), this.setHeaders());
        }
        /**
         * Get single record
         */

      }, {
        key: "findByType",
        value: function findByType(type) {
          return this.http.get("".concat(this.routeURL, "/findByType/").concat(type), this.setHeaders());
        }
        /**
         * Get records against code
         */

      }, {
        key: "findWithCode",
        value: function findWithCode(id) {
          return this.http.get("".concat(this.routeURL, "/findWithCode/").concat(id), this.setHeaders());
        }
        /**
         * Delete record
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.routeURL, "/delete/").concat(id), this.setHeaders());
        }
      }]);

      return ProductService;
    }(_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]);

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ProductService);
    /***/
  },

  /***/
  "./src/modules/app/services/register.service.ts":
  /*!******************************************************!*\
    !*** ./src/modules/app/services/register.service.ts ***!
    \******************************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcModulesAppServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");

    var RegisterService = /*#__PURE__*/function (_authorization_servic6) {
      _inherits(RegisterService, _authorization_servic6);

      var _super6 = _createSuper(RegisterService);

      // constructor(protected http: HttpClient) {}
      function RegisterService(http, router) {
        var _this35;

        _classCallCheck(this, RegisterService);

        _this35 = _super6.call(this, router, http);
        _this35.http = http;
        _this35.router = router;
        _this35.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "user");
        _this35.route = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "notifyuser");
        return _this35;
      }

      _createClass(RegisterService, [{
        key: "create",
        value: function create(item) {
          return this.http.post("".concat(this.route, "/create"), item, this.setHeaders());
        }
      }, {
        key: "register",
        value: function register(item) {
          return this.http.post("".concat(this.routeURL, "/register"), item, this.setHeaders());
        }
      }]);

      return RegisterService;
    }(_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]);

    RegisterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], RegisterService);
    /***/
  },

  /***/
  "./src/modules/app/services/shared-data.service.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/app/services/shared-data.service.ts ***!
    \*********************************************************/

  /*! exports provided: SharedDataService */

  /***/
  function srcModulesAppServicesSharedDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedDataService", function () {
      return SharedDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/Subject */
    "./node_modules/rxjs-compat/_esm2015/Subject.js");

    var SharedDataService = /*#__PURE__*/function () {
      function SharedDataService() {
        _classCallCheck(this, SharedDataService);

        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentMessage = this.messageSource.asObservable();
        this.itemsInCart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentItemsInCart = this.itemsInCart.asObservable();
        this.superUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentSuperUser = this.superUser.asObservable();
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isUser = this.user.asObservable();
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.currentUser = this.userSource.asObservable();
        /**
         * For displaying Flash message
         *
         */

        this.flashMsgSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.flashMsg$ = this.flashMsgSource.asObservable();
      } // change total amount of order


      _createClass(SharedDataService, [{
        key: "changeAmount",
        value: function changeAmount(amount) {
          this.messageSource.next(amount);
        } // Change superuser to true when superuser login

      }, {
        key: "changeSuperUser",
        value: function changeSuperUser(isSuperUser) {
          this.superUser.next(isSuperUser);
        } // Change superuser to true when superuser login

      }, {
        key: "changeUser",
        value: function changeUser(user) {
          this.user.next(user);
        } // change number of items choosen in an order

      }, {
        key: "changeItemsInCart",
        value: function changeItemsInCart(amount) {
          this.itemsInCart.next(amount);
        }
      }, {
        key: "sendUserInfo",
        value: function sendUserInfo(user) {
          this.userSource.next(user);
        }
        /**
         * Show Flash message
         *
         * @param fmData object
         */

      }, {
        key: "flashMsg",
        value: function flashMsg(fmData) {
          this.flashMsgSource.next(fmData);
        }
      }]);

      return SharedDataService;
    }();

    SharedDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SharedDataService);
    /***/
  },

  /***/
  "./src/modules/app/services/size.service.ts":
  /*!**************************************************!*\
    !*** ./src/modules/app/services/size.service.ts ***!
    \**************************************************/

  /*! exports provided: SizeService */

  /***/
  function srcModulesAppServicesSizeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SizeService", function () {
      return SizeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/modules/app/services/authorization.service.ts");

    var SizeService = /*#__PURE__*/function (_authorization_servic7) {
      _inherits(SizeService, _authorization_servic7);

      var _super7 = _createSuper(SizeService);

      // constructor(protected http: HttpClient) {}
      function SizeService(http, router) {
        var _this36;

        _classCallCheck(this, SizeService);

        _this36 = _super7.call(this, router, http);
        _this36.http = http;
        _this36.router = router;
        _this36.routeURL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl, "size");
        return _this36;
      }

      _createClass(SizeService, [{
        key: "create",
        value: function create(item) {
          return this.http.post("".concat(this.routeURL, "/create"), item, this.setHeaders());
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.routeURL, "/findAll"), this.setHeaders());
        }
      }]);

      return SizeService;
    }(_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]);

    SizeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], SizeService);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ali/Project/RightWay/rightway/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map