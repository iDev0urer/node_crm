/*jshint node: true */
/*jshint esnext: true */
"use strict";

var pry = require('pryjs');

module.exports = {
    
    index: function*() {
        yield this.render('home', { title: 'Test page', users: Users });
    },

    add: function*() {
        yield {status: 200};
    }

};
