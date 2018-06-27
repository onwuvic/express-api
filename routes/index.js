import express from 'express';
import { index, users, create, update, destroy, show } from './../controllers/UserController';

const router = express.Router();

// HOME PAGE
router.get('/', index);

// GET ALL USERS
router.get('/users', users);

// GET ONE USER
router.get('/user/:id', show);

// CREATE NEW USER
router.post('/user', create);

// UPDATE ONE USER
router.patch('/user/:id', update);

// DELETE ONE USER
router.delete('/user/:id', destroy);


export default router;