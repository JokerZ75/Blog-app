const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;