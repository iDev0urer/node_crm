/*jshint node: true */
/*jshint esnext: true */
"use strict";

const app = require('koa')(),
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

console.log('Mongoose initializer loaded');
