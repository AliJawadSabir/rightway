import * as express from 'express';
import{ErrorHandler} from '../../base/conf';
// const express = import('express');

/**
 * Importing related Models
 */
import { ProductModel } from '../index';

export class ProductController {
  constructor() { }


  /**
   * Get All Recrods
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  findAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    new ProductModel()
      .findAll()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }


  /**
   * Get Recrods Having Same Code
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  findWithCode(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    console.log('find wit code controller', id)
    new ProductModel()
      .findWithCode(id)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * Get Recrods Having Same Code
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  findByDiscount(req: express.Request, res: express.Response, next: express.NextFunction) {
    let discount = req.params.discount;
    console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('discount worked in controller',discount)
    console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>')
    new ProductModel()
      .findByDiscount(discount)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * Get Recrods Having Same Code
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  findBySeason(req: express.Request, res: express.Response, next: express.NextFunction) {
    let season = req.params.season;
    console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('discount worked in controller',season)
    console.log('==============>>>>>>>>>>>>>>>>>>>>>>>>>')
    new ProductModel()
      .findBySeason(season)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * Get Recrods Having Same Code
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  findByType(req: express.Request, res: express.Response, next: express.NextFunction) {
    let type = req.params.type;
    new ProductModel()
      .findByType(type)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * Get Recrods Having Same Id
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  find(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    new ProductModel()
      .find(id)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(err, res, next);
      });
  }

  /**
   * UPLOAD IMAGE
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  // uploadImage(req: express.Request, res: express.Response, next: express.NextFunction) {
  //   console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  //   console.log('UPLOAD IMAGE CALLED IN CONTROLLER')
  //   console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  //   let productModel = new ProductModel();
  //   productModel.configureMulter(req.body);

  //     productModel.upload(req, res, err => {
  //       return productModel.uploader(req, res, err, next);
  //     });
  // }


  /**
   * Create record
   * 
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  create(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('Product controller create called------------------')
    new ProductModel().create(req.body).then(result => {
    console.log('Product controller create called', result)
      res.json(result);

    }).catch(err => {
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

  /**
   * Update
   *
   * @param req express.Request
   * @param res express.Response
   * @param next express.NextFunction
   */
  updateQuantity(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    let reqBody = req.body;
    // restrict user only update these fields from profile update
    let item =reqBody.quantity
    console.log('UPDATE QUANTITY IN PRODUCT CONTROLLER', item, id);

    new ProductModel()
      .updateQuantity(id, item)
      .then(result => {
        res.json(result);
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
    // let item =reqBody.quantity
    // console.log('UPDATE QUANTITY IN PRODUCT CONTROLLER', reqBody, id);

    new ProductModel()
      .update(id, reqBody)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        //ErrorHandler.sendServerError(err, res, next);
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
