const router = require('express').Router();
let Image = require('../models/image.model');

router.route('/').get((req, res) => {
    Image.find()
        .then((images) => res.json(images))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/byid/:id').get((req, res) => {
    Image.findById(req.params.id)
        .then((images) => res.json(images))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const image = req.body.image;
    const alt = req.body.alt;

    const newImage = new Image({
        image,
        alt,
    });

    newImage.save()
        .then(() => res.json('Image added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});