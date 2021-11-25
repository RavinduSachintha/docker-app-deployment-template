const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const calcRouter = require('./routes/calc');

const app = express();

if (process.env.NODE_ENV === 'development') {
    console.log("dev mode!");
    app.use(cors());
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/calc', calcRouter);

module.exports = app;
