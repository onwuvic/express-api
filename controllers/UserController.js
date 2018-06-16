import { User } from './../models/User';

export const create = (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password 
    },
    function(error, user) {
        if(error) return res.status(500).send('There was a problem adding the information to the database');
        res.status(200).send(user);
    });
};

export const user = (req, res) => {
    let user = {
        name: 'victor onwuzor',
        email: 'onwuzorvictor@outlook.com',
        password: 'vicky4all'
    };
    let db = process.env.DATA_URL;
    res.status(200).send({user, db});

};

export const index = (req, res) => {
    res.status(200).send('Home Page');
};
