// import * as nodemailer from 'nodemailer';
// import { Promise } from 'bluebird';
import { BaseModel } from '../../base/models/base.model';
import { Product } from '../index';
import { ErrorHandler } from '../../base/conf';
import { Promise } from 'bluebird';
import { CategoryModel } from './category.model';
import { response } from 'express';
import { ColorModel } from './color.model';
import { SizeModel } from './size.model';
const multer = require('multer');
// import { BaseModel, CONFIGURATIONS } from '../../base';
// import { User } from '../../security';
// import { ErrorHandler } from '../../base/conf/error-handler';
// import { EmailSenderModel } from '../../setting';
// import { Helper } from '../../base/helpers/helper';

export class ProductModel extends BaseModel {
  public upload:any;
  public model;
  constructor() {
    super(Product);
    this.model = Product;
    // super(1);
  }

  
  /**
   * Function to add email of notify user
   * @param item notify user object
   */
  public create(item) {

    return this.model.findOne({where:{name: item.name, sizeId:item.sizeId, 
      colorId:item.colorId, categoryId: item.categoryId}}).then(res=>{
      console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd', res);
      if (res){
        console.log('----------------------------------------');
          console.log('result is duplicate');
          console.log('-------------------------------------------');
        return ErrorHandler.duplicateEntry;
      }else {
        console.log('-------in createeeeeeeee portionnnnnn', item);
        // let item1 = {name: item.name, sizeId:item.size, price:item.price, sold:item.sold, 
        //   colorId:item.color, categoryId: item.category, description:item.description,
        // url:item.url, code:item.code, type:item.tupe, available:item.available,
        // discount:item.discount}
        return super.create(item).then(result => {
          console.log('----------------------------------------');
          console.log('result showing '+res);
          console.log('-------------------------------------------');
          return result;
        })
      }
    })
  }

  public findAll()
  {
    return this.model.findAll().then(result => {
      console.log('----------------------------------------');
      console.log('result skowing in find all', result);
      console.log('-------------------------------------------');
      return result;
    })

  }

  public findWithCode(id)
  {
    console.log('-------id worked', id);
    return this.find(id).then(res=>{
      // console.log('-------id worked', res['dataValues']);
      // console.log('-------id worked', id);
      if (res){
        let code = res.code;
        console.log('----------------------------------------');
          console.log('item code in find code', code);
          console.log('-------------------------------------------');
        return this.findCodeItems(code);
        
        // return ErrorHandler.duplicateEntry;
      }
    })

  }
  public findBySeason(season)
  {
    console.log('-------season workedddddddddddddddd', season);
    // let attributes = ['id','name','url','price','code','description',
    // 'discount','sold','available','colorId','categoryId','sizeId','type','season'];
    // let conditions = {discount:+season}
    return this.model.findAll().then(res=>{
      // console.log('-------find with discount workedddddddddddddddd', res);
      if (res){
        let response = [];
        return Promise.each(res, resp => {
          if(resp['dataValues']['season'] == season){
            console.log('-----------------category id', resp['dataValues']['categoryId'])
            return new CategoryModel().find(resp['dataValues']['categoryId']).then(categoryResponse=>{
              resp['dataValues']['category'] = categoryResponse;
              return new ColorModel().find(resp['dataValues']['colorId']).then(colorResponse=>{
                resp['dataValues']['color'] = colorResponse;
                return new SizeModel().find(resp['dataValues']['sizeId']).then(sizeResponse=>{
                  resp['dataValues']['size'] = sizeResponse;
                  response.push(resp);
                })
              })
            })
          }
        }).then(() => {
          return response;
        });
      }else{
        return ErrorHandler.recordNotFound;
      }
    })
  }
  public findByDiscount(discount)
  {
    console.log('-------discount workedddddddddddddddd', discount);
    // let attributes = ['id','name','url','price','code','description',
    // 'discount','sold','available','colorId','categoryId','sizeId','type','season'];
    // let conditions = {discount:+season}
    return this.model.findAll().then(res=>{
      // console.log('-------find with discount workedddddddddddddddd', res);
      if (res){
        let response = [];
        return Promise.each(res, resp => {
          if(resp['dataValues']['discount'] >= discount){
            console.log('-----------------category id', resp['dataValues']['categoryId'])
            return new CategoryModel().find(resp['dataValues']['categoryId']).then(categoryResponse=>{
              resp['dataValues']['category'] = categoryResponse;
              return new ColorModel().find(resp['dataValues']['colorId']).then(colorResponse=>{
                resp['dataValues']['color'] = colorResponse;
                return new SizeModel().find(resp['dataValues']['sizeId']).then(sizeResponse=>{
                  resp['dataValues']['size'] = sizeResponse;
                  response.push(resp);
                })
              })
            })
          }
        }).then(() => {
          return response;
        });
      }else{
        return ErrorHandler.recordNotFound;
      }
    })
  }
  public findByType(type)
  {
    console.log('-------type workedddddddddddddddd', type);
    let attributes = ['id','name','url','price','code','description','season',
    'discount','sold','available','colorId','categoryId','sizeId','type'];
    let conditions = {discount:type}
    return this.model.findAll(attributes,conditions).then(res=>{
      console.log('-------find with type workedddddddddddddddd', res);
      if (res){
        let i=0; 
        let response = [];
        while(i<res.length){
          if(res[i]['dataValues']['type'] == type){
            response.push(res[i]['dataValues']);
          }
          i++;
        }
        return response;
      }
    })

  }

  public find(id)
  {
    return this.model.findOne({where:{id:id}}).then(res=>{
      console.log('-------find worked', res['dataValues']['id']);
      if (res){
        return new CategoryModel().find(res['dataValues']['categoryId']).then(categoryResponse=>{
          res['dataValues']['category'] = categoryResponse;
          return new ColorModel().find(res['dataValues']['colorId']).then(colorResponse=>{
            res['dataValues']['color'] = colorResponse;
            return new SizeModel().find(res['dataValues']['sizeId']).then(sizeResponse=>{
              res['dataValues']['size'] = sizeResponse;
              return res;
            })
          })
        })
        // return ErrorHandler.duplicateEntry;
      }
    })
  }

  public updateQuantity(id, quantity) {
    return this.model.findOne({where:{id:id}}).then(res=>{
      if (res){
        let item = res['dataValues'];
        item['available'] = item['available'] - quantity;
        item['sold'] = item['sold'] + quantity;
        return this.update(id,item).then(response=>{
          return response;
        })
      }
    });
  }


  /**
   * Update a record for given id
   * @param item
   * @param id
   */
  update(id, item) {
    item = BaseModel.extendItem(item, false);
    return this.sequelizeModel.update(item, { where: { id: id } });

  }

  // public find(id)
  // {
  //   return this.model.findOne({where:{id:id}}).then(res=>{
  //     console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd', res);
  //     if (res){
  //       return res;
  //       // return ErrorHandler.duplicateEntry;
  //     }
  //   })
  // }

  public findCodeItems(code){
    console.log('----------------------------------------');
    console.log('item code in find code items', code);
    console.log('-------------------------------------------');
    return this.findAll()
    .then(res=>{
      if (res){
        let response = [];
        return Promise.each(res, product=>{
          if(product['dataValues']['code'] == code){
            return this.find(product['dataValues']['id']).then(resp => {
              response.push(resp);
              console.log('=========================================')
              console.log('response of find function', resp['dataValues']['id'])
            })
          }
        }).then(() => {
          console.log('=======================================');
          console.log('retuning response', response)
          return response;
        })
      }
    })
  }



  // public configureMulter(item)
  // {

  //   var store = multer.diskStorage({
  //     destination: function (req, file, cb) {
  //       cb(null, './uploads')
  //     },
  //     filename: function (req, file, cb) {
  //       cb(null, Date.now() + '.' + file.originalname)
  //     }
  //   })
     
  //   this.upload = multer({ storage: store });

    

  //   // return this.model.findAll().then(result => {
  //   //   console.log('----------------------------------------');
  //   //   console.log('result skowing '+result);
  //   //   console.log('-------------------------------------------');
  //   //   return result;
  //   // })

  // }

  // uploader(req, res, err, next) {
  //   if (err) {
  //     if (err.code === 'INVALID_FILE_TYPE') {
  //       ErrorHandler.sendFileTypeError(err, res, next);
  //     } else if (err.code === 'LIMIT_FILE_SIZE') {
  //       console.log(err);
  //       ErrorHandler.sendFileSizeError(err, res, next);
  //     }
  //   } else {
  //       res.send({originalname:req.body});
  //   }
  // }

  // forgotPassword(item) {
  //   return super.findByCondition(['id', 'username'], { username: item.username }).then(user => {
  //     if (user) {
  //       return this.doHash(user.id).then(hashedString => {
  //         return super.update(user.id, { verificationCode: hashedString }).then(() => {
  //           // Sending Variables For email
  //           //TODO:high need to implement environment variables for backend to manage website url
  //           let variableData = [
  //           //   { variableName: CONFIGURATIONS.EmailTemplateVar.changePasswordUrl, variableValue: CONFIGURATIONS.environment.frontendURL + `/home/resetPassword?verificationCode=${hashedString}` },
  //           //   { variableName: CONFIGURATIONS.EmailTemplateVar.userEmail, variableValue: user.username }
  //           ];
  //           // return new EmailSenderModel().sendEmailsByCode(CONFIGURATIONS.EmailTemplateCodes.forgotPassword, variableData);
  //         });
  //       });
  //     } else {
  //       // return ErrorHandler.notFound;
  //     }
  //   });
  // }

  // private doHash(userId) {
  //   let timestmp = new Date().getTime();
  //   let stringToHash = CONFIGURATIONS.SECRET + userId + timestmp;
  //   return new Promise((resolve, reject) => {
  //     return Helper.encrypt(stringToHash).then(hash => {
  //       return super.findByCondition(['id'], { verificationCode: hash }).then(result => {
  //         if (result) {
  //           return this.doHash(userId);
  //         } else {
  //           return resolve(hash);
  //         }
  //       });
  //     });
  //   });
  // }

  // changePassword(id, item) {
  //   return super.find(id, ['id', 'password']).then(result => {
  //     return Helper.verifyPassword(item.currentPassword, result.password).then(match => {
  //       if (match) {
  //         return Helper.encrypt(item.newPassword).then(hashedPassword => {
  //           return super.update(id, { password: hashedPassword });
  //         });
  //       } else {
  //         return ErrorHandler.invalidPassword;
  //       }
  //     });
  //   });
  // }

  // resetPassword(item) {
  //   if (item.verificationCode && item.password) {
  //     return super.findByCondition(['id'], { verificationCode: item.verificationCode }).then(user => {
  //       if (user) {
  //         return Helper.encrypt(item.password).then(hashedPassword => {
  //           return super.update(user.id, { password: hashedPassword, verificationCode: null });
  //         });
  //       } else {
  //         return ErrorHandler.notFound;
  //       }
  //     });
  //   } else {
  //   //   return ErrorHandler.missingRequiredQueryParameter;
  //   }
  // }

  // /**
  //  *
  //  * @param _from sender email address
  //  * @param _fromPassword sender password
  //  * @param _to receiver email adresses
  //  * @param _subject subject of email
  //  * @param _text text of email
  //  * @param _html html in email
  //  */
  // private sendEmail(_from: string, _fromPassword: string, _to: string, _subject: string, _text: string, _html: string) {
  //   return new Promise((resolve, reject) => {
  //     nodemailer.createTestAccount((err, account) => {
  //       let transporter = nodemailer.createTransport({
  //         from: 'noreply@gmail.com',
  //         host: 'smtp.gmail.com', // hostname
  //         secureConnection: false, // use SSL
  //         // port: 465, // port for secure SMTP
  //         transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  //         auth: {
  //           user: 'developer.muhammadumair@gmail.com',
  //           pass: 'Programming4Fun'
  //         }
  //       });
  //       let mailOptions = {
  //         from: _from, // sender address
  //         to: _to, // list of receivers
  //         subject: _subject, // Subject line
  //         text: _text, // plain text body
  //         html: _html
  //       };

  //       transporter.sendMail(mailOptions, (error, info) => {
  //         if (error) {
  //           reject({ error: 'Something went wrong.', detail: error });
  //         } else {
  //           resolve({ success: 'Sent', detail: info });
  //         }
  //       });
  //     });
  //   });
  // }
}
