"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler {
    static send(err, res, next) {
        return res.status(err['status']).send(err);
    }
    static sendServerError(err, res, next) {
        console.log('Server Error: ' + err);
        return res.status(ErrorHandler.internalServerError.status).send(ErrorHandler.internalServerError);
    }
    static sendAuthorizationError(err, res, next) {
        return res.status(err.status).send(err);
    }
    static sendFileSizeError(err, res, next) {
        return res.status(ErrorHandler.invalidFileSize.status).send(ErrorHandler.invalidFileSize);
    }
    static sendFileTypeError(err, res, next) {
        return res.status(ErrorHandler.invalidFileType.status).send(ErrorHandler.invalidFileType);
    }
}
exports.ErrorHandler = ErrorHandler;
ErrorHandler.invalidLogin = { error: true, status: 404, message: 'Invalid username or password.', code: 101 };
ErrorHandler.noRoleAssigned = { error: true, status: 404, message: 'No role has been assigned to you yet.', code: 102 };
ErrorHandler.noAccountExist = { error: true, status: 404, message: 'Account does not exist.', code: 103 };
ErrorHandler.invalidToken = { error: true, status: 400, message: 'Invalid token or token has been expired.', code: 104 };
ErrorHandler.notPermitted = { error: true, status: 403, message: 'You are not authorized for this action.', code: 105 };
ErrorHandler.recordNotFound = { error: true, status: 400, message: 'Record not found.', code: 106 };
ErrorHandler.missingRequiredHeader = { error: true, status: 400, message: 'A required HTTP header was not specified.', code: 107 };
ErrorHandler.missingRequiredQueryParameter = { error: true, status: 400, message: 'A required query parameter was not specified for this request.', code: 108 };
ErrorHandler.invalidEmail = { error: true, status: 400, message: 'The given email address is not valid.', code: 109 };
ErrorHandler.invalidPassword = { error: true, status: 400, message: 'The given password is not valid.', code: 110 };
ErrorHandler.passwordNotMatched = { error: true, status: 400, message: 'Invalid current password.', code: 111 };
ErrorHandler.authenticationFail = { error: true, status: 400, message: 'The given email or password is not valid.', code: 112 };
ErrorHandler.unAuthorized = { error: true, status: 401, message: 'You are not authorized to access this.', code: 113 };
ErrorHandler.forbidden = { error: true, status: 403, message: 'You are forbidden to access this.', code: 114 };
ErrorHandler.accountIsDisabled = { error: true, status: 403, message: 'The specified account is disabled.', code: 115 };
ErrorHandler.accountAlreadyExists = { error: true, status: 409, message: 'The specified account already exists.', code: 116 };
ErrorHandler.resourceAlreadyExists = { error: true, status: 409, message: 'The specified resource already exists.', code: 117 };
ErrorHandler.notFound = { error: true, status: 404, message: 'The specified resource does not exist.', code: 118 };
ErrorHandler.inActiveUser = { error: true, status: 403, message: 'The specified user is Inactive.', code: 119 };
ErrorHandler.internalServerError = { error: true, status: 500, message: 'The server encountered an internal error. Please retry the request.', code: 120 };
ErrorHandler.invalidFileType = { error: true, status: 400, message: 'This file type is not valid.', code: 121 };
ErrorHandler.invalidFileSize = { error: true, status: 403, message: 'File size is invalid.', code: 122 };
ErrorHandler.duplicateEmail = { error: true, status: 403, message: "Provided email already exists in our system, Please try a different one.", code: 123 };
ErrorHandler.duplicateEntry = { error: true, status: 400, message: "Duplicate record Error.", code: 124 };
ErrorHandler.childrenExists = { error: true, status: 400, message: "This record has children.", code: 125, data: {} };
//# sourceMappingURL=error-handler.js.map