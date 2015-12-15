/*jshint node: true */
/*jshint esnext: true */
"use strict";

// const router = require('koa-router')();

// router
//     .get('/', function *(next) {
//         yield this.render('home', {title: 'Test page'});
//     });

// module.exports = router;

module.exports = {

    // controller#action
    'get /': { to: 'static#index' },
    'get /users': { to: 'users#index' },
    'post /users': { to: 'users#create' },
    'get /users/:id': { to: 'users#show' },
    'delete /users/:id': { to: 'users#delete' }
    // 'put|post /users/:id': { to: 'users#update' },
    // 'get /users/:id/words/:slug*': { to: 'events#words' },
    // 'get /event/:slug+': { to: 'events#index', constraint: 'api#ip' },

    // // redirections
    // 'get /to/google': { to: 'http://www.google.com' },
    // 'get /to/home': { to: '/' },

    // // using a function
    // 'get /events/:id': { to: function *(id) { this.body = ... } },

};
