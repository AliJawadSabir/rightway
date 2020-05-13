// var express = require('express');
import * as express from 'express';

var cors = require('cors');
// import * as cors from 'cors';

// var bodyparser = require('body-parser');
import * as bodyparser from 'body-parser';

// var path = require('path');
import * as path from 'path';

// var route = require('./dist/modules/base/router/base-route.js');
import {BaseRoute} from './src/modules/base/router/base-route';

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
// app.post('notifyuser/create',(req,res)=>{
//     res.send('hello here');
//     console.log('------------------------------in route');
// });


// router = express.Router();
// new route.BaseRoute(router);
// app.use('/', router);

let router: express.Router;
router = express.Router();
new BaseRoute(router);
this.app.use('/', router);


// app.get('/', route);

app.listen(port,()=>{
    console.log('TS Server has successfully started at '+ port);
});