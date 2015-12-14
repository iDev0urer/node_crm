/*jshint node: true */
/*jshint esnext: true */
"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var User = new Schema({
    real_name: { type: String },
    server_name: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

User = mongoose.model('users', User);

module.exports = User;
