require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
const routerAPIdocs = require('./routes/apidocs');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api-docs', routerAPIdocs);
app.use('/users', usersRouter);

module.exports = app;
