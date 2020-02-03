// import { Identity } from '../';
export const CONFIGURATIONS = {

  appName: 'E.I.S.',

  connection: null,
  /**
   * Holds the data of user to be used in backend application anywhere.
   * 
   */
  // identity: <Identity>{},


  /**
   * Global Data Object
   * We can assign anything to this object and can use anywhere in application instead of passing values through function parametes.
   * 
   * i.e. in check-permission.model.ts using it to store 'RoleWFStateFlowIds' and using that data in cr-application.
   */
  GDataObject: {},


  SECRET: 'eis_secret',

  // TODO:high: following is not a proper way for public urls.
  PUBLIC_URLS: [
    '/security/users/getPortal',
    '/security/users/login',
    '/security/users/forgotPassword',
    '/tables',
    '/settings/configurations/index/city',
    '/settings/configurations/city',
    '/settings/configurations/index/country',
    '/settings/configurations/index/tehsil',
    '/settings/configurations/index/province',
    '/settings/configurations/index/natureOfWork',
    '/campus/preRegistrations/create',
    '/shared/eligibility-criteria/download',
    '/campus/preRegistrations/validateUniqueEmail',
    '/settings/banks/findAttributesList',
    '/settings/docStateManagers/getStateId',
    '/institute/instituteTypes/findAttributesList',
    '/settings/attachments/fileUpload',
    '/profile/profile/forgotPassword',
    '/profile/profile/resetPassword',
    '/profile/profile/validateVerificationCode',
    '/settings/configurations/findAttributesList/country',
    '/settings/configurations/findAttributesList/city',
    '/settings/configurations/findAllCities',
    '/settings/configurations/findConfiguration'
  ],

  /**
   * ENUMS
   * As per we are not going to use ENUM field in database because mssql does not support it
   * So we are saving string values there. This will increase the risk of hardcoded 'string' values utilization
   * in code. To avoid that we are going to use following ENUMS objec. Define your enum values here and use it
   * in anywhere (only in backend project)
   *
   */
  ENUMS: {
    // Email template assignments
    ETAParents: {
      stateflow: 'stateflow'
    },
    LogParents: {
      campus: 'campus'
    }
  },

  /**
   * We are using some self made defined variables in email templates
   * Configure variables here and use keys to get its values to avoide hardcoded string
   */
  EmailTemplateVar: {
    CRApplicantEmail: '{{campus-owner-email}}',
    CRApplicantName: '{{campus-owner-name}}',
    CRApplicantUsername: '{{campus-owner-username}}',
    campusName: '{{campus-name}}',
    userEmail: '{{user-email}}',
    homeUrl: '{{home-url}}',
    changePasswordUrl: '{{change-password-url}}'
    // loggedInFullname: '{{logged-in-fullname}}' not implement yet
  },

  /**
   * Evaluation sheet are attached to campus with status 'draft' and when evaluator fill out and send back to admin its status
   * changed to 'done'. Avoid to use hardcoded string we use this variable.
   */
  CAMPUS_EVALUATION_SHEET: {
    STATUS: {
      DRAFT: 'draft',
      DONE: 'done'
    }
  },

  /**
   * Code for EmailTemplate
   * We are creating some kind of email t
   */
  EmailTemplateCodes: {
    forgotPassword: 'forgot-password'
  },

  /**
   * Application workflows
   * Used to retreive list of specific workflow states
   */
  APPLICATION_WORKFLOW: {
    PRE_REGISTRATION: 'pre-registration',
    POST_REGISTRATION: 'post-registration',
  },

  /**
   * Campus status used to create, update and list campus
   */
  CMAPUS_STATUS: {
    DRAFT: 'draft',
    DONE: 'done',
    CLOSE: 'close',
    ACTION_PERFORMED: 'action-performed'
  },

  environment: {
    frontendURL: '',
    backendURL: '',
  },

  PORTAL: {
    INSTITUTE: 'institute',
    REGISTRATION: 'registration',
    CAMPUS: 'campus',
  },

  WF_JUMPs: [
    { from: { wf: 'pre-registration', state: 'approve' }, to: { wf: 'post-registration', state: 'draft' } }
  ],

  /**
   * For Management Fee type
   */
  FEE_TYPE: { applicationForm: 'application-form' }

};
