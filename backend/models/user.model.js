const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isBanned: {
        type: Boolean,
        required: true,
        default: false
    },
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;