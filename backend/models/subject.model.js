const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
        maxlength: 50
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }]
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;