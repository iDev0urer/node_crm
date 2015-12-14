/*jshint node: true */
/*jshint esnext: true */
"use strict";

var assert = require('assert'),
    should = require('should'),
    pry = require('pryjs');

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});


describe('User Model', function() {
    it('should be able to save', () => {
        var UserModel = require('../app/models/user');
        var User = new UserModel();
        UserModel.find({}, (err, docs) => {
            console.log('Hi');
            eval(pry.it);\
        });
    });
});
