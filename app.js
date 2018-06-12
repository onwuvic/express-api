const express = require('express');
const app = express();
// need a database

const indexRouter = require('./routes/index');


app.use('/', indexRouter);

module.exports = app;