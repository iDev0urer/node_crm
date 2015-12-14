/*jshint node: true */
/*jshint esnext: true */
"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var Group = new Schema({
    name: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

User = mongoose.model('User', User);

module.exports = User;
