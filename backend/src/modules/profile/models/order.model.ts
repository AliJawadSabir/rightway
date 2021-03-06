// import * as nodemailer from 'nodemailer';
// import { Promise } from 'bluebird';
import { BaseModel } from '../../base/models/base.model';
import { Order } from '../index';
import { ErrorHandler } from '../../base/conf';
import { Promise } from 'bluebird';
import { ProductOrderModel } from './product-order.model';
import { ProductModel } from './product.model';
import { CustomerModel } from './customer.model';
// import { BaseModel, CONFIGURATIONS } from '../../base';
// import { User } from '../../security';
// import { ErrorHandler } from '../../base/conf/error-handler';
// import { EmailSenderModel } from '../../setting';
// import { Helper } from '../../base/helpers/helper';

export class OrderModel extends BaseModel {
  public model;
  constructor() {
    super(Order);
    this.model = Order;
    // super(1);
  }

  
  /**
   * Function to add email of notify user
   * @param item Order object
   */
  public create(item) {

        return super.create(item).then(result => {
          for(let i=0;i<item.products.length;i++) {
            let prodOrder = {orderId:result['dataValues']['id'], 
            productId:item.products[i]['id'], quantity: item.quantity[i]}
            console.log('----------------------------------------');
            console.log('result showing in order model '+ prodOrder);
            console.log('-------------------------------------------');
            new ProductOrderModel().create(prodOrder).then(resp => {
              console.log('----------------------------------------');
              console.log('result showing of id '+ resp['dataValues']);
              console.log('-------------------------------------------');
            })
          }
          return result;
        })
      // }
    // })
  }

  public findAll()
  {
    return this.model.findAll().then(result => {
      console.log('----------------------------------------');
      console.log('result skowing ');
      console.log('-------------------------------------------');
      return result;
    })

  }

  public findAllWithProducts()
  {
    return this.model.findAll().then(result => {
      if (result) {
        let orders = [];
        return Promise.each(result, order =>{
          return this.findWithProducts(order['dataValues']['id']).then(resp =>{
            orders.push(resp);
          })
        }).then(() =>{
          return orders;
        })
      }
    })

  }

  public findWithProducts(orderId)
  {
    return this.find(orderId).then(orderResult => {
      if (orderResult) {
        let products=[];
        let customerId = orderResult['dataValues']['customerId'];
        return new CustomerModel().find(customerId).then(customer =>{
          if (customer) {
            orderResult['dataValues']['customer'] = customer;
            return new  ProductOrderModel().findAll().then(productOrderResponse=>{
              return Promise.each(productOrderResponse, productOrder => {
                if (productOrder['dataValues']['orderId'] == orderId) {
                  let productId = productOrder['dataValues']['productId'];
                  return new ProductModel().find(productId).then(productResponse =>{
                    productResponse['dataValues']['quantity'] = productOrder['dataValues']['quantity'];
                    products.push(productResponse);
                  })
                }
                // let products = resp['dataValues']['productId']
              }).then(() =>{
                orderResult['dataValues']['products'] = products;
                return orderResult;
              })
            })
          }
        })
      }
      // return result;
    })

  }

  public find(id){
    return this.model.findOne({where:{id: id}}).then(res=>{
      console.log('-------findddd workeddddddd in order');
      if (res){
        return res;
      }else {

      }
    })
  }

  public delete(id){
    return this.model.delete({where:{id: id}}).then(res=>{
      console.log('-------delete workedddddddddddddddd', res);
      // if (res){
      //   console.log('----------------------------------------');
      //     console.log('result found');
      //     console.log('-------------------------------------------');
      //   return res;
      // }else {

      // }
    })
  }

  public update(id, item){
    return this.model.update(id, item).then(res=>{
      console.log('-------update workedddddddddddddddd', res);
      if (res){
        console.log('----------------------------------------');
          console.log('result updated');
          console.log('-------------------------------------------');
        return res;
      }else {

      }
    })
  }

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
