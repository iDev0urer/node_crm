/*jshint node: true */
/*jshint esnext: true */
"use strict";

const app = require('koa')(),
      kc = require('koa-controller'),
      path = require('path'),
      pry = require('pryjs');

app.use(kc.tools());

app.use(kc.router({
    routesPath: _ + 'app/routes.js',
    controllerPath: _ + 'app/controllers/{controller}.js', // note that {controller} is a variable
    constraintPath: _ + 'app/constraints/{constraint}.js', // note that {constraint} is a variable
    logger: console.log // custom logger function
}));

console.log('Controllers initializer imported');
