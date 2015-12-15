/*jshint node: true */
/*jshint esnext: true */
"use strict";

const passport = require('koa-passport');

var pry = require('pryjs');

require('../../config/auth');

module.exports = {
    
    getLogin: function*() {
        yield this.render('auth/login', { title: 'Login' });
    },

    postLogin: function*() {
        yield passport.authenticate('local', {
            successRedirect: '/app',
            failureRedirect: '/login'
        });
    }

};
