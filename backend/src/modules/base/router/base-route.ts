import { Router } from 'express';
// const express = require('express');
// import * as express from 'express';

import { ProfileBaseRoute } from '../../profile/index';
// import { ProductBaseRoute } from '../../product/index';

/**
 * / route
 *
 * @class BaseRoute
 */
export class BaseRoute {
  router: Router;

  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */
  constructor(router: Router) {
    console.log('base route called----------------------------------------------')
    this.router = router;
    this.initAll();
  }

  /**
   * init all routes
   */
  public initAll() {
    new ProfileBaseRoute(this.router);
    // new ProductBaseRoute(this.router);
  }
}
