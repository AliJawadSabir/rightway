// import { Router } from 'express';

// const express = require('express');
import { UserController } from '../index';
// const router = express.Router();
/**
 * / route
 *
 * @class Profile
 */
export class UserRoute {
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
    let controller = new UserController();
    this.router.route('/user/register').post(controller.create);

    this.router.route('/user/login').post(controller.login);

    this.router.route('/profile/profile/find/:id').get(controller.find);

    this.router.route('/profile/profile/update/:id').put(controller.update);

    this.router.route('/profile/profile/forgotPassword').post(controller.forgotPassword);

    this.router.route('/profile/profile/changePassword/:id').post(controller.changePassword);

    this.router.route('/profile/profile/resetPassword').post(controller.resetPassword);

    this.router.route('/profile/profile/validateVerificationCode').post(controller.validateVerificationCode);

  }
}
