/*jshint node: true */
/*jshint esnext: true */
"use strict";

const passport = require('koa-passport');

var pry = require('pryjs');

require('../../config/auth');

module.exports = {
    
    getLogin: function*() {
        this.render('auth/login', { title: 'Login' });
    },

    postLogin: function*() {
        eval(pry.it);
        this.res.status = 404;
        this.body = { message: "Success!" }
    },

    register: function*() {
        this.render('auth/register',{ title: 'Register' });
    },

    forgot_password: function*() {
        this.render('auth/forgot_password', { title: 'Forgotten password' });
    }

};
