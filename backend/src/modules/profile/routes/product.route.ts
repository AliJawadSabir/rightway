// import { Router } from 'express';

const express = require('express');
import { ProductController } from '../index';
import { ErrorHandler } from '../../base/conf';
const multer = require('multer');
const router = express.Router();
/**
 * / route
 *
 * @class Profile
 */
export class ProductRoute {
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
    let controller = new ProductController();

    this.router.route('/product/create').post(controller.create);

    this.router.route('/product/findWithCode/:id').get(controller.findWithCode);
    
    this.router.route('/product/find/:id').get(controller.find);

    this.router.route('/product/updateQuantity/:id').put(controller.updateQuantity);

    this.router.route('/product/update/:id').put(controller.update);

    this.router.route('/product/findByDiscount/:discount').get(controller.findByDiscount);

    this.router.route('/product/findBySeason/:season').get(controller.findBySeason);

    this.router.route('/product/findByType/:type').get(controller.findByType);

    this.router.route('/product/findAll').get(controller.findAll);

    // this.router.route('/product/uploadImage').post(controller.uploadImage);
    
    var store = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname)
      }
    })
     
    var upload = multer({ storage: store });
    // var upload = multer({ dest:'uploads' });

    this.router.post('/product/uploadImage',upload.single('file'), function (req, res, next) {

    console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('UPLOAD IMAGE CALLED IN ROUTER')
    console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      if (!req.file) {
        return res.send({
          success: false
        });
      } else {
        let status = {success:true, file:req.file};
        return res.send(status);
      }
    })
    // this.router.route('/product/uploadImage', function(req,res,next){
      
    // });

    

  }
}
