/*jshint node: true */
/*jshint esnext: true */
"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

var model = mongoose.model('Group', schema);

module.exports = model;
