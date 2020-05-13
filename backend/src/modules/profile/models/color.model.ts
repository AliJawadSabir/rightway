// import * as nodemailer from 'nodemailer';
// import { Promise } from 'bluebird';
import { BaseModel } from '../../base/models/base.model';
import { Color } from '../index';
import { ErrorHandler } from '../../base/conf';
// import { BaseModel, CONFIGURATIONS } from '../../base';
// import { User } from '../../security';
// import { ErrorHandler } from '../../base/conf/error-handler';
// import { EmailSenderModel } from '../../setting';
// import { Helper } from '../../base/helpers/helper';

export class ColorModel extends BaseModel {
  public model;
  constructor() {
    super(Color);
    this.model = Color;
    // super(1);
  }

  
  /**
   * Function to add email of notify user
   * @param item notify user object
   */
  public create(item) {

    return this.model.findOne({where:{color: item.color}}).then(res=>{
      console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd', res);
      if (res){
        console.log('----------------------------------------');
          console.log('result is duplicate');
          console.log('-------------------------------------------');
        return ErrorHandler.duplicateEntry;
      }else {

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
      console.log('result skowing '+result);
      console.log('-------------------------------------------');
      return result;
    })

  }

  public find(id){
    return this.model.findOne({where:{id: id}}).then(res=>{
      // console.log('-------findddd workedddddddddddddddd', res);
      if (res){
        console.log('----------------------------------------');
          console.log('result found');
          console.log('-------------------------------------------');
        return res;
      }else {

      }
    })
  }

  public delete(id){
    return this.model.delete({where:{id: id}}).then(res=>{
      // console.log('-------delete workedddddddddddddddd', res);
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
