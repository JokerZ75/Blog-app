const validation = require("../utils/validateEmail.js");
const fs = require("fs");
const router = require("express").Router();
let User = require("../models/user.model");
let Blog = require("../models/blog.model");
let Image = require("../models/image.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/byid/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:username").get((req, res) => {
  User.findOne({ username: req.params.username })
    .then((users) =>
      res.json({
        username: users.username,
        email: users.email,
        profileImage: users.profileImage,
      })
    )
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = await validation
    .validateEmail(req.body.email)
    .then((response) => {
      if (response) {
        return req.body.email;
      } else {
        return null;
      }
    });
  const isAdmin = req.body.isAdmin || false;
  const isBanned = req.body.isBanned || false;

  const newUser = new User({
    username,
    password,
    email,
    isAdmin,
    isBanned,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id).then(async (user) => {
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = await validation
      .validateEmail(req.body.email)
      .then((response) => {
        if (response) {
          return req.body.email;
        } else {
          return null;
        }
      });
    user.isAdmin = req.body.isAdmin || false;
    user.isBanned = req.body.isBanned || false;

    user
      .save()
      .then(() => res.json("User updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateProfileImage/:id").post((req, res) => {
  User.findById(req.params.id).then((user) => {
    const currentImage = user.profileImage;
    // if (
    //   Blog.find({ image: currentImage }) === 0 &&
    //   User.find({ profileImage: currentImage }) === 1
    // ) {
    //   Image.findByIdAndDelete(currentImage)
    //     .then((image) => {
    //       const imageUrl = image.imageUrl;
    //       const path = `public/images/${imageUrl}`;
    //       fs.unlinkSync(path);
    //       user.profileImage = req.body.profileImage;
    //       user
    //         .save()
    //         .then(() => res.json("Profile image updated!"))
    //         .catch((err) => res.status(400).json("Error: " + err));
    //     })
    //     .catch((err) => res.status(400).json("Error: " + err));
    // } else {
    user.profileImage = req.body.profileImage;
    user
      .save()
      .then(() => res.json("Profile image updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
    // }
  });
});

module.exports = router;
