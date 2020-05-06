import * as express from 'express';
import{ErrorHandler} from '../../base/conf';
// const express = import('express');

/**
 * Importing related Models
 */
import { CustomerModel } from '../index';

export class CustomerController {
  constructor() { }


  /**
   * Get All Recrods
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  findAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    new CustomerModel()
      .findAll()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }


  /**
   * Create record
   * 
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  create(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('Customer controller create called------------------')
    new CustomerModel().create(req.body).then(result => {
    console.log('Customer controller create called', result)
      res.json(result);

    }).catch(err => {
      ErrorHandler.sendServerError(err, res, next);
    });
  }




  /**
   * Delete
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  delete(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    new CustomerModel()
      .delete(id)
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          res.status(ErrorHandler.recordNotFound.status).send(ErrorHandler.recordNotFound);
        }
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }


  /**
   * find One
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  find(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    new CustomerModel()
      .find(id)
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          res.status(ErrorHandler.recordNotFound.status).send(ErrorHandler.recordNotFound);
        }
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * Update
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  update(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    let reqBody = req.body;
    // let item = { color: reqBody.color, description: reqBody.description }
    new CustomerModel()
      .update(id, reqBody)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }

  // /**
  //  * ForgotPassword
  //  *
  //  * @param req {User}
  //  */
  // forgotPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
  //   new ProfileModel()
  //     .forgotPassword(req.body)
  //     .then(result => {
  //       if (result && !result['error']) {
  //         res.json(result);
  //       } else {
  //        // ErrorHandler.send(result, res, next);
  //       }
  //     })
  //     .catch(err => {
  //       //ErrorHandler.sendServerError(err, res, next);
  //     });
  // }

  // /**
  //  * changePassword
  //  *
  //  * @param req express.Request
  //  * @param res express.Response
  //  * @param next express.NextFunction
  //  */
  // changePassword(req: express.Request, res: express.Response, next: express.NextFunction) {
  //   let id = req.params.id;

  //   let item = req.body;

  //   new ProfileModel()
  //     .changePassword(id, item)
  //     .then(result => {
  //       if (result && !result['error']) {
  //         res.json(result);
  //       } else {
  //         //ErrorHandler.send(result, res, next);
  //       }
  //     })
  //     .catch(err => {
  //       //ErrorHandler.sendServerError(err, res, next);
  //     });
  // }

  // /**
  //  * resetPassword
  //  *
  //  * @param req express.Request
  //  * @param res express.Response
  //  * @param next express.NextFunction
  //  */
  // resetPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
  //   let item = req.body;

  //   new ProfileModel()
  //     .resetPassword(item)
  //     .then(result => {
  //       if (result && !result['error']) {
  //         res.json(result);
  //       } else {
  //         //ErrorHandler.send(result, res, next);
  //       }
  //     })
  //     .catch(err => {
  //       //ErrorHandler.sendServerError(err, res, next);
  //     });
  // }

  // /**
  //  * Check if verificationCode exsits
  //  *
  //  * @param req express.Request
  //  * @param res express.Response
  //  * @param next express.NextFunction
  //  */
  // validateVerificationCode(req: express.Request, res: express.Response, next: express.NextFunction) {
  //   let verificationCode = req.body.verificationCode;

  //   new ProfileModel()
  //     .findByCondition(['id'], { verificationCode: verificationCode })
  //     .then(result => {
  //       if (result) {
  //         res.send(true);
  //       } else {
  //         //ErrorHandler.send(ErrorHandler.notFound, res, next);
  //       }
  //     })
  //     .catch(err => {
  //       //ErrorHandler.sendServerError(err, res, next);
  //     });
  // }



}
