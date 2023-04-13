const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8008;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb conntection established successfully");
});

const blogRouter = require('./routes/blogs');
const userRouter = require('./routes/users');
const subjectRouter = require('./routes/subjects');
const imageRouter = require('./routes/images');

// app.use('/blogs', blogRouter);
app.use('/users', userRouter);
app.use('/images', imageRouter);
// app.use('/subjects', subjectRouter);

app.listen(port, () => {
    console.log(`Staring on port: ${port}`);
});