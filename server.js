/*jshint node: true */
/*jshint esnext: true */
"use strict";

const app = require('koa')(),
      kc = require('koa-controller'),
      router = require('koa-router')(),
      hbs = require('koa-hbs'),
      serve = require('koa-static'),
      mongoose = require('koa-mongoose');

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



app.use(serve(__dirname + '/app/public'));

app.use(hbs.middleware({
    viewPath: __dirname + '/app/views',
    partialsPath: __dirname + '/app/views/partials',
    layoutsPath: __dirname + '/app/views/layouts',
    defaultLayout: 'main'
}));

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
