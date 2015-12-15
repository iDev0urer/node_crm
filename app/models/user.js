/*jshint node: true */
/*jshint esnext: true */
"use strict";

const mongoose = require('mongoose'),
      validate = require('mongoose-validator'),
      Schema = mongoose.Schema;

var nameValidator = [
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z\- ]+$/i,
        message: 'Name must include only letters, hyphens, and spaces'
    })
];

var serverNameValidator = [
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z0-9\-_]+$/i,
        message: 'Server name must be alphanumeric'
    })
];

var schema = new Schema({
    real_name: { type: String, validate: nameValidator },
    server_name: { type: String, validate: serverNameValidator },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

var model = mongoose.model('User', schema);

module.exports = model;
