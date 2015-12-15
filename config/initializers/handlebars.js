/*jshint node: true */
/*jshint esnext: true */
"use strict";

const app = require('koa')(),
      hbs = require('koa-hbs'),
      pry = require('pryjs');

app.use(hbs.middleware({
    viewPath: _ + '/app/views',
    partialsPath: _ + '/app/views/partials',
    layoutsPath: _ + '/app/views/layouts',
    defaultLayout: 'main',
    disableCache: true
}));

console.log('Handlebars initializer loaded');
