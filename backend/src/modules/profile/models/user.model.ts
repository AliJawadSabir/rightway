// import * as nodemailer from 'nodemailer';
// import { Promise } from 'bluebird';
import { BaseModel } from '../../base/models/base.model';
import { User } from './schema/user';
import { ErrorHandler } from '../../base/conf';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { CONFIGURATIONS } from '../../base/conf/configurations';

export class UserModel extends BaseModel {
  
  public model;
  SALTROUNDS = 10;

  constructor() {
    super(User)
    this.model = User;
    // super(1);
  }

  create(item: User){
    
    // return super.create(item);
    console.log('-------createeeeeeeeeeeeeee'+ item.email);
    // console.log(item.email);
    return this.model.findOne({where:{email: item.email}}).then(res=>{
      console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd', res);
      if(res){
        
        return ErrorHandler.duplicateEmail;

      }else {

        console.log('-------createeeeeeeeeeeeeee workedddddddddddddddd');
        return this.encrypt(item.password).then(hashedPassword => {
          console.log('-------HASHED PASSWORD--------', hashedPassword);
          item.password = hashedPassword;
          return super.create(item);

        });
      }
    })

  }



  /**
   * Validate user to login and return jwt token and permissions
   * 
   * @param item 
   */
  public login(item: User) {

    return this.model.findOne({where:{email: item.email}}).then(res=>{

      if (res) {

        let userRes = res;
        // let userRes = <User>res;

        return this.verifyPassword(item.password, userRes.password).then(match => {

          if (res && match) {

            console.log('------------------------------success');
            console.log(res);
            let token = jwt.sign({ id: res['id'], email: res['email'], 
            iat: Math.floor(Date.now() / 1000) - 30 }, CONFIGURATIONS.SECRET);

            let result = {
              id: userRes.id, email: userRes.email, isSuperUser: userRes.isSuperUser,
              token: token, gender:userRes.gender, address: userRes.address,
              mobileNumber: userRes.mobileNumber, name:userRes.name
            }
            return result;

          } else {
            // Return invalid credentials message
            console.log('------------------------------password');
            console.log(res);
            return ErrorHandler.invalidLogin;
          }
        });
      } else {
        console.log('------------------------------email');
            console.log(res);
        return ErrorHandler.invalidLogin;
      }
    });
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


    /**
     * Encrypt str with bcrypt
     * @param str 
     */
  encrypt(str) {
      return bcrypt.hash(str, this.SALTROUNDS);
  }

  /**
   * Verify password
   * @param password 
   * @param hashedPassword 
   */
  verifyPassword(password, hashedPassword) {
      return bcrypt.compare(password, hashedPassword);
  }
}
