const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const imageSchema = new Schema({
    image: {data: Buffer, contentType: String},
}, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;