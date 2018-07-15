import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { connect } from './database';
import indexRouter from './api/routes/index';
// Declare an app from express
const app = express();

// setup database
connect();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', indexRouter);

export default app;