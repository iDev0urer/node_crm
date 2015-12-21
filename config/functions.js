"use strict";

const crypto = require('crypto-js');

exports.generateSalt = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/$%;";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

exports.hashPassword = function(password, salt) {
    return crypto.HmacSHA512(password, salt).toString();
}

exports.checkPassword = function(password, hash, salt) {
    let checkHash = crypto.HmacSHA512(password, salt).toString();
    return checkHash === hash;
}

