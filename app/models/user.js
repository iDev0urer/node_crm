"use strict";
let __config = require('../../config/config');

const mongoose = require('mongoose'),
      validate = require('mongoose-validator'),
      Schema = mongoose.Schema,
      fn = require(__config.base + '/config/functions');

var nameValidator = [
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z. ]+$/i,
        message: 'Please use a real name'
    })
];

let emailValidator = [
    validate({
        validator: 'matches',
        arguments: /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/i,
        message: 'Must be a valid email address'
    })
];

var schema = new Schema({
    name: {
        prefix: String,
        first: String,
        middle: String,
        last: String,
        suffix: String
    },
    email: { type: String, validate: emailValidator, required: 'Email is required' },
    password_hash: { type: String },
    password_salt: { type: String }
});

schema.pre('save', function(next) {
    let password = this.password;
    let salt = fn.generateSalt(8);

    this.password_hash = fn.hashPassword(password, salt);
    this.password_salt = salt;

    this.password = null;

    next();
});

var model = mongoose.model('User', schema);

module.exports = model;
