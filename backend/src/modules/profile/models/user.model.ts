// import * as nodemailer from 'nodemailer';
// import { Promise } from 'bluebird';
import { BaseModel } from '../../base/models/base.model';
import { User } from './schema/user';
import { ErrorHandler } from '../../base/conf';

export class UserModel extends BaseModel {
  constructor() {
    super(User)
    // super(1);
  }

  create(item){
    
    // return super.create(item);
    // console.log('-------createeeeeeeeeeeeeee calleddddddddddddddd'+ item.email);
    // console.log(item.email);
    return super.findByCondition(['id'],{email: item.email}).then(res=>{
      console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd');
      if(res){
        
        return ErrorHandler.duplicateEmail;
      }else {
        console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd');
        return super.create(item).then(user=>{
          console.log('---------------------------------------');
          console.log(user);
        })
      }
    })
  }

  forgotPassword(item) {
    return super.findByCondition(['id', 'username'], { username: item.username }).then(user => {
      if (user) {
        // return this.doHash(user.id).then(hashedString => {
        //   return super.update(user.id, { verificationCode: hashedString }).then(() => {
        //     // Sending Variables For email
        //     //TODO:high need to implement environment variables for backend to manage website url
        //     let variableData = [
        //     //   { variableName: CONFIGURATIONS.EmailTemplateVar.changePasswordUrl, variableValue: CONFIGURATIONS.environment.frontendURL + `/home/resetPassword?verificationCode=${hashedString}` },
        //     //   { variableName: CONFIGURATIONS.EmailTemplateVar.userEmail, variableValue: user.username }
        //     ];
        //     // return new EmailSenderModel().sendEmailsByCode(CONFIGURATIONS.EmailTemplateCodes.forgotPassword, variableData);
        //   });
        // });
      } else {
        // return ErrorHandler.notFound;
      }
    });
  }

//   private doHash(userId) {
//     let timestmp = new Date().getTime();
//     let stringToHash = CONFIGURATIONS.SECRET + userId + timestmp;
//     return new Promise((resolve, reject) => {
//       return Helper.encrypt(stringToHash).then(hash => {
//         return super.findByCondition(['id'], { verificationCode: hash }).then(result => {
//           if (result) {
//             return this.doHash(userId);
//           } else {
//             return resolve(hash);
//           }
//         });
//       });
//     });
//   }

  changePassword(id, item) {
    return super.find(id, ['id', 'password']).then(result => {
    //   return Helper.verifyPassword(item.currentPassword, result.password).then(match => {
    //     if (match) {
    //       return Helper.encrypt(item.newPassword).then(hashedPassword => {
    //         return super.update(id, { password: hashedPassword });
    //       });
    //     } else {
    //       return ErrorHandler.invalidPassword;
    //     }
    //   });
    });
  }

  resetPassword(item) {
    if (item.verificationCode && item.password) {
      return super.findByCondition(['id'], { verificationCode: item.verificationCode }).then(user => {
        // if (user) {
        //   return Helper.encrypt(item.password).then(hashedPassword => {
        //     return super.update(user.id, { password: hashedPassword, verificationCode: null });
        //   });
        // } else {
        //   return ErrorHandler.notFound;
        // }
      });
    } else {
    //   return ErrorHandler.missingRequiredQueryParameter;
    }
  }

  /**
   *
   * @param _from sender email address
   * @param _fromPassword sender password
   * @param _to receiver email adresses
   * @param _subject subject of email
   * @param _text text of email
   * @param _html html in email
   */
  private sendEmail(_from: string, _fromPassword: string, _to: string, _subject: string, _text: string, _html: string) {
    return new Promise((resolve, reject) => {
    //   nodemailer.createTestAccount((err, account) => {
    //     let transporter = nodemailer.createTransport({
    //       from: 'noreply@gmail.com',
    //       host: 'smtp.gmail.com', // hostname
    //       secureConnection: false, // use SSL
    //       // port: 465, // port for secure SMTP
    //       transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    //       auth: {
    //         user: 'developer.muhammadumair@gmail.com',
    //         pass: 'Programming4Fun'
    //       }
    //     });
    //     let mailOptions = {
    //       from: _from, // sender address
    //       to: _to, // list of receivers
    //       subject: _subject, // Subject line
    //       text: _text, // plain text body
    //       html: _html
    //     };

    //     transporter.sendMail(mailOptions, (error, info) => {
    //       if (error) {
    //         reject({ error: 'Something went wrong.', detail: error });
    //       } else {
    //         resolve({ success: 'Sent', detail: info });
    //       }
    //     });
    //   });
    });
  }
}
