import express from 'express';
import { urlencoded } from 'body-parser';
import { index, user } from './../controllers/UserController';

const router = express.Router();

router.use(urlencoded({ extended: true}));

router.get('/', index);

router.get('/users', user);

// router.post('/users', UserController.create());


export default router;