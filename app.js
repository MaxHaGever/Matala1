const express = require('express');
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const dotenv = require('dotenv').config()
const port = process.env.PORT
const dbURI = process.env.dbURI
app.use(express.json());

mongoose.connect(dbURI, {})
    .then(() => console.log('DB connected'))
    .catch(err => console.error('DB connection error:', err));

const indexRouter = require('./routes')
app.use('/',indexRouter);

const postRouter = require('./routes/post_routes')
app.use('/post',postRouter)

const commentRouter = require('./routes/comment_routes');
app.use('/comments', commentRouter);

app.listen(port, () => {
    console.log(`App listening to port: ${port}`)
});

