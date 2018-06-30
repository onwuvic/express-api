import User from '../models/User';

// GET ALL USERS FROM THE DATABASE
export const users = (req, res) => {
  User.find({}, (error, user) => {
    if (error) return res.status(500).send('There was a problem finding the users');
    return res.status(200).json(user);
  });
};

// CREATE A NEW USER
export const create = (req, res) => {
  new User(req.body)
    .save()
    .then(user => res.status(201).json(user))
    .catch(error => res.status(500).send(error.message));
};

// GET A SINGLE USER FROM THE DATABASE
export const show = (req, res) => {
  User.findOne({ _id: req.params.id }, (error, user) => {
    if (error) return res.status(500).send('There was a problem finding the user.');
    if (!user) return res.status(404).send('No user found');
    return res.status(200).json(user);
  });
};

// UPDATE A SINGLE USER FROM THE DATABASE
export const update = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true },
    (error, user) => {
      if (error) return res.status(500).send('There was a problem updating the user.');
      return res.status(200).json(user);
    }
  );
};

// DELETE A SINGLE USER FROM THE DATABASE
export const destroy = (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id }, (error, user) => {
    if (error) return res.status(500).send('There was a problem deleting the user.');
    return res.status(200).send(`User ${user.username} was deleted`);
  });
};

// HOME PAGE
export const index = (req, res) => res.status(200).send('Home Page');
