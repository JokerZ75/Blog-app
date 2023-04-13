const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const imageSchema = new Schema({
    imageUrl : { type: String, required: true },
    imageAlt : { type: String, required: true }
    }, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;