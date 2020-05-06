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

    this.router.route('/product/findByDiscount/:discount').get(controller.findByDiscount);

    this.router.route('/product/findByType/:type').get(controller.findByType);

    this.router.route('/product/findAll').get(controller.findAll);
    
    var store = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname)
      }
    })
     
    var upload = multer({ storage: store });

    this.router.post('/product/uploadImage',upload.single('file'), function (req, res, next) {

    console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('UPLOAD IMAGE CALLED IN ROUTER')
    console.log('=====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      // upload(req,res,function(err){
      //   if (err){
      //     return ErrorHandler.sendFileTypeError(err, res, next);
      //   }
      //   return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
      // })
      if (!req.file) {
        console.log("Your request doesn’t have any file");
        return res.send({
          success: false
        });
      } else {
        let status = {success:true, file:req.file};
        console.log('Your file has been received successfully', req.file);
        return res.send(status);
      }
    })
    // this.router.route('/product/uploadImage', function(req,res,next){
      
    // });

    

    // this.router.route('/profile/profile/update/:id').put(controller.update);

    // this.router.route('/profile/profile/forgotPassword').post(controller.forgotPassword);

    // this.router.route('/profile/profile/changePassword/:id').post(controller.changePassword);

    // this.router.route('/profile/profile/resetPassword').post(controller.resetPassword);

    // this.router.route('/profile/profile/validateVerificationCode').post(controller.validateVerificationCode);

  }
}
