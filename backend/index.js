// importing modules

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

    



// 'use strict';

// //module dependencies
// var server = require('./dist/server');
// var debug = require('debug')('express:server');
// var http = require('http');

// //create http server
// var httpPort = normalizePort(process.env.PORT || 3000);
// var app = server.Server.bootstrap().app;
// app.set('port', httpPort);
// var httpServer = http.createServer(app);

// //listen on provided ports
// httpServer.listen(httpPort);

// //add error handler
// httpServer.on('error', onError);

// //start listening on port
// httpServer.on('listening', onListening);

// /**
//  * Normalize a port into a number, string, or false.
//  */
// function normalizePort(val) {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// }

// /**
//  * Event listener for HTTP server "error" event.
//  */
// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   var bind =
//     typeof httpPort === 'string' ? 'Pipe ' + httpPort : 'Port ' + httpPort;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */
// function onListening() {
//   var addr = httpServer.address();
//   var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
//   debug('Listening on ' + bind);
// }
