import express from 'express';
const app = express();
// need a database

import indexRouter from './routes/index';


app.use('/', indexRouter);

module.exports = app;