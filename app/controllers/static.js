/*jshint node: true */
/*jshint esnext: true */
"use strict";

var pry = require('pryjs');
          
module.exports = {
    
    index: function*(next) {
        this.render('home', { title: 'Test page' });
    }
};
