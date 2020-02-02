import { NextFunction, Request, Response, Router } from 'express';

import { UserRoute } from '../../index';
import { NotifyUserRoute } from '../../index';

/**
 * / route
 *
 * @class BaseRoute
 */
export class ProfileBaseRoute {
  router: Router;

  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */
  constructor(router: Router) {
    this.router = router;
    this.initAll();
  }

  /**
   * init all routes
   */
  public initAll() {
    new UserRoute(this.router);
    new NotifyUserRoute(this.router);
  }
}
