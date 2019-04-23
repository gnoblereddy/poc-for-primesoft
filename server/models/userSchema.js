var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    mobileNumber : String,
    email : String,
    password : String,
    confirmPassword : String,
})


module.exports = mongoose.model('userSchema', userSchema)