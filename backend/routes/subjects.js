const router = require('express').Router();

let Subject = require('../models/subject.model');
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
    Subject.find()
        .then((subjects) => res.json(subjects))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:name').get((req, res) => {
    Subject.findOne({subjectName: req.params.name})
        .then((subjects) => res.json({
            subjectName: subjects.subjectName,
            subjectDescription: subjects.subjectDescription,
            blogs: subjects.blogs
        }))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/byid/:id').get((req, res) => {
    Subject.findById(req.params.id)
        .then((subjects) => res.json(subjects))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
        const subjectName = req.body.subjectName;
        const subjectDescription = req.body.subjectDescription;    
        const newSubject = new Subject({
            subjectName,
            subjectDescription,
        });

        newSubject.save()
            .then(() => res.json('Subject added!'))
            .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/addBlog/:blogId/:subjectId').post((req, res) => {
    Subject.findById(req.params.subjectId)
        .then((subject) => {
            subject.blogs.push(req.params.blogId);
            subject.save()
                .then(() => res.json('Blog added to subject!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        });
});

router.route('/delete/:id').delete((req, res) => {
    Subject.findByIdAndDelete(req.params.id)
        .then((subject) =>{
            subject.blogs.forEach((blog) => {
                Blog.findByIdAndDelete(blog)
                    .then(() => res.json('Blog deleted!'))
                    .catch((err) => res.status(400).json('Error: ' + err));
            });
        })
        .catch((err) => res.status(400).json('Error: ' + err));
    
});