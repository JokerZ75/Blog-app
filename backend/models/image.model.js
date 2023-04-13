const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const imageSchema = new Schema({
    image: {data: Buffer, contentType: String},
    alt: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    }
    }, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;