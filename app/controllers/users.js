"use strict";

let pry = require('pryjs'),
    Promise = require('bluebird'),
    config = require('../../config/config'),
    fn = require(config.base + '/config/functions'),
    UserModel = require(config.base + '/app/models/user');

module.exports = {

    index: function*(next) {
        let _this = this;
        yield UserModel.find({}).exec()
            .then(function(users) {
                console.log(users);
                _this.render('users/index', { users: users });
        });
    },

    show: function*(id) {
        this.body = `Show user ${id}`;
    },

    new: function*() {
        this.body = 'Add user'
    },

    create: function*() {
        this.body = { message: 'User added' };
    },

    edit: function*(id) {
        this.body = `Edit user ${id}`;
    },

    update: function*() {
        this.body = { message: 'User updated' }
    },

    delete: function*() {
        this.body = { message: 'User deleted' };
    }

};
