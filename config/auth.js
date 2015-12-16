/*jshint node: true */
/*jshint esnext: true */
"use strict";

const passport = require('koa-passport'),
      LocalStrategy = require('passport-local'),
      FacebookStrategy = require('passport-facebook');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
    // retrieve user ...
    if (username === 'test' && password === 'test') {
        done(null, user);
    } else {
        done(null, false);
    }
}));

passport.use(new FacebookStrategy({
    clientID: 'your-client-id',
    clientSecret: 'your-secret',
    callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/facebook/callback'
},
function(token, tokenSecret, profile, done) {
    // retrieve user ...
    done(null, user);
}));

module.exports = passport;
