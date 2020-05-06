// import { Router } from 'express';

// const express = require('express');
import { OrderController } from '../index';
// const router = express.Router();
/**
 * / route
 *
 * @class Profile
 */
export class OrderRoute {
  router;
//   router: Router;

  /**
   * Constructor
   *
   * @class ProfileRoute
   * @constructor
   */
  constructor(router) {
//   constructor(router: Router) {
    this.router = router;
    // console.log('---------------------------------------in register route');
    this.create();
  }

  /**
   * Create the routes.
   *
   * @class ProfileRoute
   * @method create
   *
   */
  public create() {
    let controller = new OrderController();

    this.router.route('/order/create').post(controller.create);

    this.router.route('/order/findAll').get(controller.findAll);

    this.router.route('/order/update/:id').put(controller.update);

    this.router.route('/order/find/:id').get(controller.find);

    this.router.route('/order/findWithProducts/:orderId').get(controller.findWithProducts);

    this.router.route('/order/findAllWithProducts').get(controller.findAllWithProducts);

    this.router.route('/order/delete/:id').delete(controller.delete);

    // this.router.route('/profile/profile/forgotPassword').post(controller.forgotPassword);

    // this.router.route('/profile/profile/changePassword/:id').post(controller.changePassword);

    // this.router.route('/profile/profile/resetPassword').post(controller.resetPassword);

    // this.router.route('/profile/profile/validateVerificationCode').post(controller.validateVerificationCode);

  }
}
