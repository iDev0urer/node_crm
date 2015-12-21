"use strict";

let pry = require('pryjs');

module.exports = {

    index: function*(next) {
        this.render('home', { title: 'Test page' });
    }
};
