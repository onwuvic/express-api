import express from 'express';
import logger from 'morgan';
import { connect } from './database';
import indexRouter from './routes/index';
// Declare an app from express
const app = express();

app.use(logger('dev'));

// setup database
connect();



app.use('/', indexRouter);

export default app;