import { NextFunction, Request, Response, Router } from 'express';

import { UserRoute } from '../../index';
import { NotifyUserRoute } from '../../index';
import { CategoryRoute } from '../../index';
import { ProductRoute, SizeRoute, ColorRoute, CustomerRoute, OrderRoute
 } from '../../index';

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
    new CategoryRoute(this.router);
    new ProductRoute(this.router);
    new SizeRoute(this.router);
    new ColorRoute(this.router);
    new CustomerRoute(this.router);
    new OrderRoute(this.router);
  }
}
