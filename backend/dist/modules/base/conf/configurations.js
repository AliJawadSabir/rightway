"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIGURATIONS = void 0;
exports.CONFIGURATIONS = {
    appName: 'E.I.S.',
    connection: null,
    GDataObject: {},
    SECRET: 'rightway_secret_value',
    PUBLIC_URLS: [
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
    ENUMS: {
        ETAParents: {
            stateflow: 'stateflow'
        },
        LogParents: {
            campus: 'campus'
        }
    },
    EmailTemplateVar: {
        CRApplicantEmail: '{{campus-owner-email}}',
        CRApplicantName: '{{campus-owner-name}}',
        CRApplicantUsername: '{{campus-owner-username}}',
        campusName: '{{campus-name}}',
        userEmail: '{{user-email}}',
        homeUrl: '{{home-url}}',
        changePasswordUrl: '{{change-password-url}}'
    },
    CAMPUS_EVALUATION_SHEET: {
        STATUS: {
            DRAFT: 'draft',
            DONE: 'done'
        }
    },
    EmailTemplateCodes: {
        forgotPassword: 'forgot-password'
    },
    APPLICATION_WORKFLOW: {
        PRE_REGISTRATION: 'pre-registration',
        POST_REGISTRATION: 'post-registration',
    },
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
    FEE_TYPE: { applicationForm: 'application-form' }
};
//# sourceMappingURL=configurations.js.map