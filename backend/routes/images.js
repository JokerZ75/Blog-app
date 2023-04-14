const router = require('express').Router();
const fs = require('fs');
let Image = require('../models/image.model');

router.route('/').get((req, res) => {
    Image.find()
        .then((images) => res.json(images))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/byid/:id').get((req, res) => {
    Image.findById(req.params.id)
        .then((image) => {
            const imageUrl = image.imageUrl;
            const imageAlt = image.imageAlt;
            const filePath = `public/images/${imageUrl}`;
            const ImageData = fs.readFileSync(filePath);
            const base64Data = Buffer.from(ImageData).toString('base64');
            res.json({
                imageUrl,
                imageAlt,
                base64Data
            });
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    if (Image.find({imageUrl: req.body.imageUrl}).length > 0) {
        Image.find({imageUrl: req.body.imageUrl})
            .then((image) => {
                res.json(image._id + ': Image already exists!')
            })
            .catch(err => res.status(400).json('Error: ' + err));
    }
    else{
        const data = req.body.imageData;
        const imageUrl = req.body.imageUrl;
        const filePath = `public/images/${imageUrl}`;
        const blob = new Buffer.from(data, 'base64');
        fs.writeFileSync(filePath, blob);
        const imageAlt = req.body.imageAlt;
    
        const newImage = new Image({
            imageUrl,
            imageAlt,
        });
    
        newImage.save()
            .then(() => res.json( newImage._id  + ': Image added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    }

});

router.route('/delete/:id').delete((req, res) => {
    Image.findByIdAndDelete(req.params.id)
        .then(image => {
            const filePath = `public/images/${image.imageUrl}`;
            fs.unlinkSync(filePath);
            res.json('Image deleted!');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;