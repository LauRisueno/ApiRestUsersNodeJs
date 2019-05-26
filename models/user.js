var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    'fullname': String,
    'email': String,
    'password': String
});

module.exports = mongoose.model('User', UserSchema);