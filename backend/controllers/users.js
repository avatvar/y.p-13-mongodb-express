const User = require('../models/user');

const getUsers = (req, res) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
};

const getProfile = (req, res) => {
  return User.findOne({ id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }

      return res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err));
};

const createProfile = (req, res) => {
  User.estimatedDocumentCount().then((id) => {
    return User.create({ ...req.body, id })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(400).send(err));
  });
};

const deleteProfile = (req, res) => {
  return User.deleteOne({ id: req.params.id })
    .then((data) => {
      if (data.ok === 1) {
        res.status(200).send({ message: 'success' });
        return;
      }
      res.status(400).send({ message: 'failed' });
    })
    .catch((err) => res.status(400).send(err));
};

module.exports = { getUsers, getProfile, createProfile, deleteProfile };
