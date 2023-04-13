const validation = require('../utils/validateEmail.js');
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/byid/:id').get((req, res) => {
    User.findById(req.params.id)
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:username').get((req, res) => {
    User.findOne({username: req.params.username})
        .then((users) => res.json({
            username: users.username,
            email: users.email
        }))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/create').post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = await validation.validateEmail(req.body.email).then((response) => { if (response) { return req.body.email } else { return null } });
    const isAdmin = req.body.isAdmin || false;
    const isBanned = req.body.isBanned || false;

    const newUser = new User({
        username,
        password,
        email,
        isAdmin,
        isBanned,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(async user => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = await validation.validateEmail(req.body.email).then((response) => { if (response) { return req.body.email } else { return null } });
            user.isAdmin = req.body.isAdmin || false;
            user.isBanned = req.body.isBanned || false;

            user.save()
                .then(() => res.json('User updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        });
});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;