/*jshint node: true */
/*jshint esnext: true */
"use strict";

const app = require('koa')(),
      path = require('path'),
      kc = require('koa-controller'),
      hbs = require('koa-hbs'),
      bodyparser = require('koa-bodyparser'),
      serve = require('koa-static'),
      mongoose = require('koa-mongoose'),
      passport = require('koa-passport'),
      convert = require('koa-convert'),
      session = require('koa-session'),
      logger = require('koa-logger');

let pry = require('pryjs');
let config = require('./config/config');
global._ = __dirname;

// require('./config/application');


app.use(mongoose({                 
    mongoose: require('mongoose'), 
    user: '',                      
    pass: '',                      
    host: '127.0.0.1',             
    port: 27017,                   
    database: 'servermin',         
    db: {                          
        native_parser: true        
    },                             
    server: {                      
        poolSize: 5                
    }                              
}));                               


app.use(logger());
app.use(bodyparser());
app.keys = [config.secret_key];
app.use(session(app));

app.use(passport.initialize());
app.use(passport.session());

app.use(serve(__dirname + '/public'));


app.use(hbs.middleware({ 
    viewPath: __dirname + '/app/views',                                                                     
    partialsPath: __dirname + '/app/views/partials',                                                       
    layoutsPath: __dirname + '/app/views/layouts',                                                          
    defaultLayout: 'main',                                                                                  
    disableCache: true                                                                                      
}));

require('handlebars-form-helpers').register(hbs);

app.use(kc.tools());                                                                                        
                                                                                                            
app.use(kc.router({                                                                                         
    routesPath: __dirname + '/app/routes.js',                                                               
    controllerPath: __dirname + '/app/controllers/{controller}.js', // note that {controller} is a variable 
    constraintPath: __dirname + '/app/constraints/{constraint}.js', // note that {constraint} is a variable 
    logger: console.log // custom logger function                                                           
}));                                                                                                        


// var routes = require('./app/routes');
// app.use(routes.routes());

app.listen(3000);
