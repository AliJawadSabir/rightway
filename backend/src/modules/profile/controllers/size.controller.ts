import * as express from 'express';
import{ErrorHandler} from '../../base/conf';
// const express = import('express');

/**
 * Importing related Models
 */
import { SizeModel } from '../index';

export class SizeController {
  constructor() { }


  /**
   * Get All Recrods
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  findAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    new SizeModel()
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
    console.log('Notfiy user controller create called------------------')
    new SizeModel().create(req.body).then(result => {
    console.log('Category controller create called', result)
      res.json(result);

    }).catch(err => {
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

    new SizeModel()
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


  // /**
  //  * find One
  //  *
  //  * @param req express.Request
  //  * @param res express.Response
  //  * @param next express.NextFunction
  //  */
  // find(req: express.Request, res: express.Response, next: express.NextFunction) {
  //   let id = req.params.id;

  //   new ProfileModel()
  //     .find(id, ['id', 'username', 'name', 'phoneNumber', 'address', 'gender'])
  //     .then(result => {
  //       if (result) {
  //         res.json(result);
  //       } else {
  //         //res.status(ErrorHandler.recordNotFound.status).send(ErrorHandler.recordNotFound);
  //       }
  //     })
  //     .catch(err => {
  //       //ErrorHandler.sendServerError(err, res, next);
  //     });
  // }

  // /**
  //  * Update
  //  *
  //  * @param req express.Request
  //  * @param res express.Response
  //  * @param next express.NextFunction
  //  */
  // update(req: express.Request, res: express.Response, next: express.NextFunction) {
  //   let id = req.params.id;

  //   let reqBody = req.body;
  //   // restrict user only update these fields from profile update
  //   let item = { name: reqBody.name, phoneNumber: reqBody.phoneNumber, address: reqBody.address, gender: reqBody.gender }
  //   new ProfileModel()
  //     .update(id, item)
  //     .then(result => {
  //       res.json(result);
  //     })
  //     .catch(err => {
  //       //ErrorHandler.sendServerError(err, res, next);
  //     });
  // }

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
