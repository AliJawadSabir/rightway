// import { Router } from 'express';

// const express = require('express');
import { SizeController } from '../index';
// const router = express.Router();
/**
 * / route
 *
 * @class Profile
 */
export class SizeRoute {
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
    let controller = new SizeController();

    this.router.route('/size/create').post(controller.create);

    this.router.route('/size/findAll').get(controller.findAll);

    this.router.route('/size/find/:id').get(controller.find);

    // this.router.route('/profile/profile/update/:id').put(controller.update);

    // this.router.route('/profile/profile/forgotPassword').post(controller.forgotPassword);

    // this.router.route('/profile/profile/changePassword/:id').post(controller.changePassword);

    // this.router.route('/profile/profile/resetPassword').post(controller.resetPassword);

    // this.router.route('/profile/profile/validateVerificationCode').post(controller.validateVerificationCode);

  }
}
