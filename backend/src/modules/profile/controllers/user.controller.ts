import * as express from 'express';
// const express = import('express');

/**
 * Importing related Models
 */
import { UserModel } from '../index';

export class UserController {
  constructor() { }


  /**
   * find One
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  create(req: express.Request, res: express.Response, next: express.NextFunction) {
    // let id = req.params.id;
    console.log('-------createeeeeeeeeeeeeee calleddddddddddddddd');
    new UserModel()
      .create(req.body)
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          //res.status(ErrorHandler.recordNotFound.status).send(ErrorHandler.recordNotFound);
        }
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
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

    new UserModel()
      .find(id, ['id', 'username', 'name', 'phoneNumber', 'address', 'gender'])
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          //res.status(ErrorHandler.recordNotFound.status).send(ErrorHandler.recordNotFound);
        }
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
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
    // restrict user only update these fields from profile update
    let item = { name: reqBody.name, phoneNumber: reqBody.phoneNumber, address: reqBody.address, gender: reqBody.gender }
    new UserModel()
      .update(id, item)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * ForgotPassword
   *
   * @param req {User}
   */
  forgotPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
    new UserModel()
      .forgotPassword(req.body)
      .then(result => {
        if (result && !result['error']) {
          res.json(result);
        } else {
         // ErrorHandler.send(result, res, next);
        }
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * changePassword
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  changePassword(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    let item = req.body;

    new UserModel()
      .changePassword(id, item)
      .then(result => {
        if (result && !result['error']) {
          res.json(result);
        } else {
          //ErrorHandler.send(result, res, next);
        }
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * resetPassword
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  resetPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
    let item = req.body;

    new UserModel()
      .resetPassword(item)
      .then(result => {
        if (result && !result['error']) {
          res.json(result);
        } else {
          //ErrorHandler.send(result, res, next);
        }
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * Check if verificationCode exsits
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  validateVerificationCode(req: express.Request, res: express.Response, next: express.NextFunction) {
    let verificationCode = req.body.verificationCode;

    new UserModel()
      .findByCondition(['id'], { verificationCode: verificationCode })
      .then(result => {
        if (result) {
          res.send(true);
        } else {
          //ErrorHandler.send(ErrorHandler.notFound, res, next);
        }
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
      });
  }



}
