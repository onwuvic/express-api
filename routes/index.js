import express from 'express';
import { urlencoded } from 'body-parser';

const router = express.Router();

router.use(urlencoded({ extended: true}));

router.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

router.get('/users', (req, res) => {
    res.status(200).send('Users Page');
});


export default router;