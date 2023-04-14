const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const blogSchema = new Schema({
    title: {
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
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 1000,
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},{
    timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;