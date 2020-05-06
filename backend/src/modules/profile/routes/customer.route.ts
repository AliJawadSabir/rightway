// import { Router } from 'express';

// const express = require('express');
import { CustomerController } from '../index';
// const router = express.Router();
/**
 * / route
 *
 * @class Profile
 */
export class CustomerRoute {
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
    let controller = new CustomerController();

    this.router.route('/customer/create').post(controller.create);

    this.router.route('/customer/findAll').get(controller.findAll);

    this.router.route('/customer/update/:id').put(controller.update);

    this.router.route('/customer/find/:id').put(controller.find);

    this.router.route('/customer/delete/:id').put(controller.delete);

    // this.router.route('/profile/profile/forgotPassword').post(controller.forgotPassword);

    // this.router.route('/profile/profile/changePassword/:id').post(controller.changePassword);

    // this.router.route('/profile/profile/resetPassword').post(controller.resetPassword);

    // this.router.route('/profile/profile/validateVerificationCode').post(controller.validateVerificationCode);

  }
}
