

// var express = require('express');
// var cors = require('cors');
// var bodyparser = require('body-parser');
// var path = require('path');
// // my change
// var http = require('http');
// var debug = require('debug')('express:server');

// var route = require('./dist/modules/base/router/base-route.js');

// var app = express();
// // port number
// const port = 3000;


// //cors
// app.use(cors());

// //bodyparser
// app.use(bodyparser.json());

// // static files
// app.use(express.static(path.join(__dirname, 'public')));

// router = express.Router();
// new route.BaseRoute(router);
// app.use('/', router);
// // my change
// app.set('port', port);
// var httpServer = http.createServer(app);
// httpServer.listen(port);
// //start listening on port
// httpServer.on('listening', onListening);


// /**
//  * Event listener for HTTP server "listening" event.
//  */
// function onListening() {
//     var addr = httpServer.address();
//     var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
//     debug('Listening on ' + bind);
//   }




var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');
var jwt = require('jsonwebtoken');
// var CONFIGURATIONS = require('./src/modules/base/conf/configurations.ts');
var route = require('./dist/modules/base/router/base-route.js');

var app = express();


// var http = express.createServer();
// http.get('*', function(req, res) {  
//     res.redirect('https://' + req.headers.host + req.url);
// })
// app.get("*", function(request, response){
//   response.redirect("https://" + request.headers.host + request.url);
// });


// port number
const port = 3000;
const SECRET = 'rightway_secret_value';

const PUBLIC_URLS = [
  '/user/register',
  '/user/login',
  '/profile/profile/forgotPassword',
  '/size/findAll',
  '/size/find',
  '/product/findWithCode',
  '/product/find',
  '/product/updateQuantity',
  '/product/findByDiscount',
  '/product/findBySeason',
  '/product/findByType',
  '/product/findAll',
  // '/order/findAll',
  '/order/create',
  '/customer/create',
  '/color/findAll',
  '/color/find',
  '/category/findAll',
  '/category/find'

  // '/size/create',
  // '/product/create',
  // '/order/findAllWithProducts',
  // '/order/delete',
  // '/order/update/:id',
  // '/order/findWithProducts',
  // '/notifyuser/create',
  // '/customer/update/:id',
  // '/customer/delete/:id',
  // '/customer/find/:id',
  // '/color/create',
  // '/color/update/:id',
  // '/color/delete/:id',
  // '/category/create',
];
//cors
var whitelist = [
  'https://www.rightwaycollection.com',
  'http://www.rightwaycollection.com',
  'http://rightwaycollection.com',
  'https://rightwaycollection.com',
  'rightwaycollection.com',
  'http://ec2-34-229-20-55.compute-1.amazonaws.com',
  'http://localhost:4200'
]
var corsOptions = {
  origin: function (origin, callback) {
    console.log('origin: ', origin);
    if (origin) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    } else {
      callback(null, true)
    }

  }
}

app.use(cors(corsOptions));
var invalidLogin = {
  error: true, status: 404, message: 'Invalid username or password.',
  code: 101
};

//
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   if (req.method === 'OPTIONS') {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

//bodyparser
app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname, 'uploads')));

//Temporary route here
// app.get('/',(req,res)=>{
//     res.send('hello here');
// });


// /**
//  * authorize jsonwebtoken
//  * @param req
//  * @param res
//  * @param next
//  */
function authorize(req, res, next) {
  // TODO:low: Following is not proper way to skip auth on public URLs. There should be some configuration in jwt to skip some public urls
  var foundPublicUrl = PUBLIC_URLS.find(element => {

    if (element == req.originalUrl) {
      return true;
    } else {
      // check if url exists in public urls without last parameter i.e id 
      let lastIndex = req.originalUrl.lastIndexOf('/');
      let originalUrl = req.originalUrl.substr(0, lastIndex);
      if (element == originalUrl) {
        return true;
      }
    }

  });

  if (foundPublicUrl) {
    //TODO:high: For now Mohsin has added delay on each request to test the loading issues for user interactivity
    // Remove it before pusing to server.
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 1500);
    // }).then(() => {
    //   next();
    // })
    next();
  } else {
    // check header or url parameters or post parameters for token
    let token = req.headers['token'];
    console.log('IN AUTHORIZE Token', req.headers)
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, SECRET, function (err, decoded) {
        if (err) {
          return res.json({
            error: true,
            message: 'Failed to authenticate token.'
          });
        } else {

          let userId = decoded.id;
          next();
          // Set identity here to be used in base model for created/updated by and for some other cases.
          // CONFIGURATIONS.identity = { userId: userId }

        }
      });
    } else {
      // if there is no token
      console.log('IN AUTHORIZE Token false')
      return invalidLogin;
      // return ErrorHandler.sendAuthorizationError(ErrorHandler.invalidToken, res, next);
    }
  }
};



// let router: express.Router;
router = express.Router();
router.use(authorize);
// new BaseRoute(router);
// below line is bcz we need to import base route
new route.BaseRoute(router);
app.use('/', router);


// app.get('/', route);

app.listen(port, () => {
  console.log('Server has successfully started at ' + port);
});


