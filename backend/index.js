

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
// var server = require('./src/server.ts').Server;
var route = require('./dist/modules/base/router/base-route.js');
// import {BaseRoute} from './src/modules/base/router/base-route.ts';
//var bodyparser = require('bodyparser');

var app = express();
// port number
const port = 3000;


//cors
app.use(cors());

//
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
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
app.use(express.static(path.join(__dirname, 'public')));

//Temporary route here
// app.get('/',(req,res)=>{
//     res.send('hello here');
// });



// let router: express.Router;
router = express.Router();
// router.use(this.authorize);
// new BaseRoute(router);
// below line is bcz we need to import base route
new route.BaseRoute(router);
app.use('/', router);


// app.get('/', route);

app.listen(port,()=>{
    console.log('Server has successfully started at '+ port);
});


