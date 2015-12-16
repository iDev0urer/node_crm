/*jshint node: true */
/*jshint esnext: true */
"use strict";

var pry = require('pryjs');
var crypto = require('crypto-js');
var userModel = require('../models/user');

module.exports = {
    
    index: function*() {
        var users;

        userModel.find({}, function(err, doc) {
            if (!err) {
                users = doc;
            } else {
                throw(err);
            }
        });

        this.render('users/index', { title: 'Test page', users: users });
    },

    create: function*() {
        var params = this.query;
        var user = new userModel;
        var result, _this = this;
        user.real_name = params.real_name;
        user.server_name = params.server_name;
        user.save(function(err) {
            if (err) {
                console.log(err);
            } else {
                _this.body = { message: 'Added successfully' }
            }
        });
    },

    show: function*(id) {
        var user;

        userModel.find({_id: id}, function(err, doc) {
            if (!err) {
                user = doc;
            } else {
                throw(err);
            }
        });

        this.render('users/show', { title: `Viewing ${user[0].real_name}`, user: user[0] });
    },

    delete: function*(id) {
        var success = true;
        userModel.remove({_id: id}, function(err) {
            if (err) success = false;
        });
        if (success) {
            yield this.body = { message: 'Deleted successfully' }
        }
    }
}
