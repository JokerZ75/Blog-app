const router = require('express').Router();
const fs = require('fs');

let Blog = require('../models/blog.model');
let Image = require('../models/image.model');
let User = require('../models/user.model');
let Subject = require('../models/subject.model');

router.route('/').get((req, res) => {
    Blog.find()
        .then((blogs) => res.json(blogs))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:blogTitle').get((req, res) => {
    Blog.findOne({title: req.params.blogTitle})
        .then((blogs) => res.json({
            title: blogs.title,
            description: blogs.description,
            content: blogs.content,
            date: blogs.createdAt,
            image: blogs.image,
            subject: blogs.subject,
            user: blogs.user
        }))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const content = req.body.content;
    const image = req.body.image;
    const subject = req.body.subject;
    const user = req.body.user;
    const newBlog = new Blog({
        title,
        description,
        content,
        image,
        subject,
        user
    });

    newBlog.save()
        .then(() => res.json(newBlog._id + ': Blog created!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then((blog) => {
            if (Blog.find({image: blog.image}).length === 1 && User.find({user: blog.image}).length === 0){
                Image.findByIdAndDelete(blog.image)
                    .then((image) => {
                        const imageUrl = image.imageUrl;
                        const imagePath = `public/images/${imageUrl}`
                        fs.unlinkSync(imagePath);
                        Subject.findById(blog.subject)
                            .then((subject) => {
                                const subjectIndex = subject.blogs.indexOf(blog._id);
                                subject.blogs.splice(subjectIndex, 1);
                                subject.save()
                                    .then(() => res.json('Blog deleted!'))
                                    .catch((err) => res.status(400).json('Error: ' + err));
                            })
                            .catch((err) => res.status(400).json('Error: ' + err));
                    })
                    .catch((err) => res.status(400).json('Error: ' + err));
            }
            else{
                Subject.findById(blog.subject)
                .then((subject) => {
                    const subjectIndex = subject.blogs.indexOf(blog._id);
                    subject.blogs.splice(subjectIndex, 1);
                    subject.save()
                        .then(() => res.json('Blog deleted!'))
                        .catch((err) => res.status(400).json('Error: ' + err));
                })
                .catch((err) => res.status(400).json('Error: ' + err));
            }
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});