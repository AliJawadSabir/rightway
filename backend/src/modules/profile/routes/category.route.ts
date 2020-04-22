// import { Router } from 'express';

// const express = require('express');
import { CategoryController } from '../index';
// const router = express.Router();
/**
 * / route
 *
 * @class Profile
 */
export class CategoryRoute {
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
    let controller = new CategoryController();

    this.router.route('/category/create').post(controller.create);

    this.router.route('/category/findAll').get(controller.findAll);

    // this.router.route('/profile/profile/update/:id').put(controller.update);

    // this.router.route('/profile/profile/forgotPassword').post(controller.forgotPassword);

    // this.router.route('/profile/profile/changePassword/:id').post(controller.changePassword);

    // this.router.route('/profile/profile/resetPassword').post(controller.resetPassword);

    // this.router.route('/profile/profile/validateVerificationCode').post(controller.validateVerificationCode);

  }
}
