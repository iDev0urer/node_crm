"use strict";

let pry = require('pryjs'),
    Promise = require('bluebird'),
    config = require('../../config/config'),
    fn = require(config.base + '/config/functions'),
    UserModel = require(config.base + '/app/models/user');

module.exports = {

    index: function*(next) {
        let _this = this,
            user_query;
        yield user_query = UserModel.find({}).exec();

        yield user_query.then(function(users) {
           _this.render('users/index', { users: users });
        });
    },

    show: function*(id) {
        let _this = this,
            user_query;
        yield user_query = UserModel.findById(id).exec();

        yield user_query.then(function(user) {
            _this.render('users/show', { user: user });
        });
    },

    new: function*() {
        
    },

    create: function*() {
        let _this = this,
            user_query,
            req = this.request.body;

        yield user_query = new UserModel({
            name: {
                first: req.first_name,
                last: req.last_name
            },
            email: req.email,
            password: req.password
        }).save().then(function() {
            // Record saved
        }, function(err) {
            if (err) {
                _this.body = { message: 'Error adding user' };
            } else {
                _this.body = { message: 'Added user' };
            }
        });
        
    },

    edit: function*(id) {
        this.body = `Edit user ${id}`;
    },

    update: function*() {
        this.body = { message: 'User updated' };
    },

    delete: function*() {
        this.body = { message: 'User deleted' };
    }

};
