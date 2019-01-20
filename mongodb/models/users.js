const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    displayName: String,
    fullName: String,
    password: String
})

const User = mongoose.model('user', userSchema);

module.exports = {
    User
};