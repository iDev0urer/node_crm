"use strict";

const app = require('koa')(),
      path = require('path'),
      kc = require('koa-controller'),
      Jade = require('koa-jade'),
      bodyparser = require('koa-bodyparser'),
      serve = require('koa-static'),
      passport = require('koa-passport'),
      convert = require('koa-convert'),
      session = require('koa-session'),
      logger = require('koa-logger'),
      mongoose = require('mongoose');

let pry = require('pryjs');
let __config = require('./config/config');

mongoose.connect('mongodb://localhost/node_crm');

app.use(logger());
app.use(bodyparser());
app.keys = [__config.secret_key];
app.use(session(app));

app.use(passport.initialize());
app.use(passport.session());

app.use(serve(__dirname + '/public'));

const jade = new Jade({
    viewPath: path.resolve(__dirname, 'app/views'),
    debug: true,
    pretty: true,
    compileDebug: true,
    noCache: true,
    locals: {},
    basedir: './app/views',
    helperPath: [
        path.resolve(__dirname, 'app/helpers'),
        { _: require('lodash') }
    ]
});
app.use(jade.middleware);

app.use(kc.tools());
app.use(kc.router({
    routesPath: __dirname + '/app/routes.js',
    controllerPath: __dirname + '/app/controllers/{controller}.js', // note that {controller} is a variable
    constraintPath: __dirname + '/app/constraints/{constraint}.js', // note that {constraint} is a variable
    logger: logger() // custom logger function
}));

app.listen(3000);
