export const GLOBALS = {
    appName: 'Idrak',
    PORTAL: {
      INSTITUTE: 'institute',
      REGISTRATION: 'registration',
      CAMPUS: 'campus',
    },
    pageActions: { 
      home: 'home', 
      sale: 'sale', 
      newArrival: 'newArrival', 
      summerCollection: 'summerCollection',
      view: 'view',
      update: 'update',
      create: 'create',
      delete: 'delete' },


    deleteDialog: {
      width: '350px',
      message: 'Do you want to delete it permanently?',
      alertMessage: 'This Record cannot be deleted'
    },
    displayARecordDialog: {
      width: '450px',
    },
    masks: {
      mobile: [/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
      contact: [/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
      cnic: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/],
      zip: [/[0-9]/, /\d/, /\d/, /\d/, /\d/],
      time: [/[0-9]/, /\d/, ':', /\d/, /\d/],
      yearMonth: [/[0-9]/, /\d/],
      year: [/[0-9]/, /\d/, /\d/, /\d/]
    },
    CRBuildingType: {
      own: 'own',
      rented: 'rented',
      lease: 'lease'
    },
    weekDays: [
      { dayId: 'SUN', name: 'Sunday', abbreviation: 'sun' },
      { dayId: 'MON', name: 'Monday', abbreviation: 'mon' },
      { dayId: 'TUE', name: 'Tuesday', abbreviation: 'tue' },
      { dayId: 'WED', name: 'Wednesday', abbreviation: 'wed' },
      { dayId: 'THR', name: 'Thursday', abbreviation: 'thr' },
      { dayId: 'FRI', name: 'Friday', abbreviation: 'fri' },
      { dayId: 'SAT', name: 'Saturday', abbreviation: 'sat' },
    ],
    configurationKeys: {
      appName: 'appName',
      city: 'city',
      tehsil: 'tehsil',
      province: 'province',
      country: 'country',
      natureOfWork: 'natureOfWork',
      natureOfCourse: 'natureOfCourse',
      instrumentType: 'instrumentType',
      bank: 'bank',
      natureOfFeeHeads: 'natureOfFeeHeads',
      typeOfFeeHeads: 'typeOfFeeHeads',
      concessionCategory: 'concessionCategory',
      concessionType: 'concessionType',
      singleConf: 'singleConf',
      maxCreditHour: 'maxCreditHour',
      showRemittance: 'showRemittance',
    },
    CRApplicationType: {
      create: { title: 'New Campus', value: 'create' },
      transfer: { title: 'Transfer Campus', value: 'transfer' }
    },
    CRApplicationStatus: {
      approve: { title: 'Approve', value: 'approve' },
      reject: { title: 'Reject', value: 'reject' },
      new: { title: 'New', value: 'new' },
      submit: { title: 'Submit', value: 'submit' }
    },
    session: {
      spring: { title: 'Spring', value: 'spring' },
      summer: { title: 'Summer', value: 'summer' },
      fall: { title: 'Fall', value: 'fall' }
    },
  
    courseTypes: {
      theoratical: { title: 'Theoratical', value: 'theoratical' },
      practical: { title: 'Practical', value: 'practical' }
    },
    creditHours: [{ id: 0, value: '0' }, { id: 1, value: '1' }, { id: 2, value: '2' }, { id: 3, value: '3' }, { id: 4, value: '4' }, { id: 5, value: '5' }, { id: 6, value: '6' }],
  
    // Evaluation Sheet -> Sections -> Questions -> has many options
    ESQOptions: [
      {form:'all' , questionOptions:[
        { type: 'ratingTypeOne', label: 'Rating', value: ['Strongly Agree', 'Agree', 'Neither Agree nor Disagree', 'Disagree', 'Strongly Disagree'] },
        { type: 'ratingTypeTwo', label: 'Rating', value: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'] },
        { type: 'selection', label: 'Selection', value: ['Yes', 'No'] },
        { type: 'selectionWithCount', label: 'Selection', value: ['Yes', 'No'] },
        { type: 'textInput', label: 'Custom Answer (text input)', value: [] },
        { type: 'countInput', label: 'Count', value: [] },
        { type: 'textArea', label: 'Custom Answer (text area)', value: [] }
      ]},
      {form:'campus-application-form' , questionOptions:[
        { type: 'selection', label: 'Selection', value: ['Yes', 'No'] },
        { type: 'textInput', label: 'Custom Answer (text input)', value: [] },
        { type: 'countInput', label: 'Count', value: [] },
      ]},
      
  
    ],
  
    // Evaluation Sheet Forms
    ESForms: [{ label: 'Application Form', value: 'application-form' }, { label: 'Examination Form', value: 'examination-form' },
    { label: 'Interview Sheet', value: 'interview-sheet' }, { label: 'Campus Application Form', value: 'campus-application-form' }],
  
    // System configurations and their options to be used.
  
    configurations: [
      { key: 'appName', label: 'App Name', options: [], type: 'text' },
      {
        key: 'country',
        label: 'Country',
        options: [{ key: 'abbreviation', label: 'Abbreviation' }, { key: 'countryCode', label: 'Country Code', required: true }],
        type: 'text'
      },
      {
        key: 'province',
        label: 'Province',
        options: [{ key: 'abbreviation', label: 'Abbreviation' }],
        parent: { parentKey: 'country', label: 'Country' },
        type: 'text'
      },
  
      {
        key: 'city',
        label: 'City',
        options: [{ key: 'abbreviation', label: 'Abbreviation' }],
        type: 'text',
        parent: { parentKey: 'province', label: 'Province' }
      },
      {
        key: 'tehsil',
        label: 'Tehsil',
        options: [{ key: 'abbreviation', label: 'Abbreviation' }],
        type: 'text',
        parent: { parentKey: 'city', label: 'City' }
      },
      { key: 'instituteAffiliation', label: 'Institute Affiliation', options: [], type: 'text' },
      { key: 'instrumentType', label: 'Instrument Type', options: [], type: 'text' },
      { key: 'natureOfWork', label: 'Nature of Work', options: [], type: 'text' },
      { key: 'natureOfCourse', label: 'Nature of Course', options: [{ key: 'natureOfCourseOrder', label: 'Order' }], type: 'text' },
      { key: 'natureOfFeeHeads', label: 'Nature of Fee Heads', options: [], type: 'text' },
      { key: 'typeOfFeeHeads', label: 'Type of Fee Heads', options: [], type: 'text' },
      { key: 'concessionCategory', label: 'Concession Category', options: [], type: 'text' },
      { key: 'concessionType', label: 'Concession Type', options: [], type: 'text' },
      { key: 'maxCreditHour', label: 'Max Credit Hour', options: [], type: 'number', validation: 'int' },
      { key: 'appName', label: 'App Name', options: [], type: 'text' },
      { key: 'showRemittance', label: 'Show Remittance', options: [], type: 'number', validation: 'int' },
    ],
  
    /**
     * WF State Flows Rules
     * We need to perform some actions when document state is moved from current state to next state.
     * So before sending it to next state there might be something to do.
     * Those actions may be anthing which is defined in our rule.s
     */
    StateFlowRules: [
      {
        workFlow: 'pre-registration',
        rules: [{ toState: 'reject', action: 'confirm-reject', options: { message: 'Are you sure your want to reject Pre-Registration application?' } }]
      },
      {
        workFlow: 'post-registration',
        rules: [
          { toState: 'reject', action: 'remarks-for-reject', options: { message: 'Reject Remarks' } },
  
          // Here action (remarks-for-approve) means Forward Application to Create MOU.
          { toState: 'forward-for-create-mou', action: 'remarks-for-approve', options: { message: 'Evaluation Approval Remarks' } },
          { toState: 'forward-for-analysis', action: 'attach-evaluation-sheet' }
        ]
      }
    ],
  
    /**
     * Amount Formates in percentage and amount
     * Being used in Concession & Fee Heads
     */
    AmountFormat: {
      percentage: 'Percentage',
      amount: 'Amount'
    },
  
    // scholarships type
    scholarshipTypes: {
      annual: { title: 'Annual', value: 'annual' },
      monthly: { title: 'Monthly', value: 'monthly' }
    },
  
    /**
     * Classroom types to add classroom in campus->building->floor->room 
     */
    classRoomTypes: [
      { label: 'Classroom', value: 'classroom' },
      { label: 'Lab', value: 'lab' }
    ],
  
    /**
     * Data Grid / Data Table Settings
     * 
     */
    dataTable: {
      pageSize: 25,
      pageSizeOptions: [25, 50, 100]
    },
  
    /**
     * Application workflows
     * Used to retreive list of specific workflow states
     */
    WORKFLOW: {
      PRE_REGISTRATION: {
        name: 'pre-registration', states: [{ label: 'All', value: 'all' }, { label: 'New', value: 'submit' }, { label: 'Approved', value: 'approve' }, { label: 'Rejected', value: 'reject' }],
        COMPLETE_LIST: { label: 'All', value: 'all' }
      },
      POST_REGISTRATION: {
        name: 'post-registration', states: [
          { label: 'All', value: 'all' }, { label: 'Draft', value: 'draft' }, { label: 'New', value: 'submit' }, { label: 'Evaluation', value: 'forward-for-analysis' }, { label: 'Evaluated', value: 'submit-analysis' },
          { label: 'Create MOU', value: 'forward-for-create-mou' }, { label: 'MOU Verification', value: 'mou-approval' }, { label: 'Create Campus', value: 'create-campus' },
          { label: 'Campus Account Details', value: 'forward-for-account-info' }, { label: 'Approved', value: 'done' }, { label: 'Rejected', value: 'reject' }
        ],
        COMPLETE_LIST: { label: 'All', value: 'all' },
        ACTION_PERFORMED: { label: 'Action Perfomed', value: 'action-performed' }
      }
    },
  
    /**
   * Campus status list campus
   */
    CMAPUS_STATES: [
      { label: 'All', value: 'all' },
      { label: 'Awating', value: 'draft' },
      { label: 'Approved', value: 'done' },
      { label: 'Rejected', value: 'close' }
    ],
  
  
    /**
   * For Purpose list on campus
   */
    MOU_VERIFICATION_PURPOSES: ['Application Form', 'Registration Form', 'MOU Fee'],
  
  
    /**
     * For Management Fee type
     */
    FEE_TYPES: [{ key: 'application-form', label: 'Application Form' }, { key: 'license-fee', label: 'License Fee' }, { key: 'registration-form', label: 'Registration Form' }],
  
    /**
     * months
     */
  
    MONTHS: [
      {
        number: 1, name: 'January', abbreviation: 'JAN'
      },
      {
        number: 2, name: 'Febuary', abbreviation: 'FEB'
      },
      {
        number: 3, name: 'March', abbreviation: 'MAR'
      },
      {
        number: 4, name: 'April', abbreviation: 'APR'
      },
      {
        number: 5, name: 'May', abbreviation: 'MAY'
      },
      {
        number: 6, name: 'June', abbreviation: 'JUN'
      },
      {
        number: 7, name: 'July', abbreviation: 'JUL'
      },
      {
        number: 8, name: 'August', abbreviation: 'AUG'
      },
      {
        number: 9, name: 'Sepetember', abbreviation: 'SEP'
      },
      {
        number: 10, name: 'October', abbreviation: 'OCT'
      },
      {
        number: 11, name: 'November', abbreviation: 'NOV'
      },
      {
        number: 12, name: 'December', abbreviation: 'DEC'
      }
    ],
  
    /**
     * These are for document CRUD
     */
    docTypes: {
      original: { title: 'Original', value: 'original' },
      photocopy: { title: 'Photocopy', value: 'photocopy' }
    },
    docFors: {
      admissionFormCollection: { value: 'admissionFormCollection', title: 'Admission Form Collection' },
    },
  
    /**
     * These are for roadmap
     */
    RMCategories: {
      fall: { title: 'Fall', value: 'fall' },
      spring: { title: 'Spring', value: 'spring' },
      summer: { title: 'Summer', value: 'summer' },
    },
  
    academicYears: [2018, 2019, 2020, 2021, 2022, 2023]
  
  };
  