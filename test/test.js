/*jshint node: true */
/*jshint esnext: true */
"use strict";

const assert = require('assert'),
      should = require('should'),
      pry = require('pryjs'),
      mongoose = require('mongoose'),
      dbURI = 'mongodb://localhost/node_crm_test';

let UserModel = require('../app/models/user');

describe('User Model', function() {

    beforeEach(function(done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });

    it("can be saved", function(done) {
        new UserModel({
            name: {
                prefix: '',
                first: 'Chris',
                middle: '',
                last: 'Watson',
                suffix: ''
            },
            email: 'chris@marginzero.co',
            password: 'Pi31415926'
        }).save(done);
    });

});
