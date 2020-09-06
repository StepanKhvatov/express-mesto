const users = require('express').Router();
const path = require('path');
const { getAllUsers } = require('../helpers/read-file');

users.get('/users', (req, res) => {
  try {
    getAllUsers(path.join(__dirname, '../data', 'users.json'))
      .then(
        (data) => res.send(data),
        (error) => res.status(500).send({ message: error.message }),
      );
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

users.get('/users/:id', (req, res) => {
  try {
    getAllUsers(path.join(__dirname, '../data', 'users.json'))
      .then(
        (data) => {
          const userById = data.find((user) => user._id === req.params.id);
          if (userById) {
            res.send(userById);
          } else {
            res.status(404).send({ message: 'Нет пользователя с таким id' });
          }
        },
        (error) => res.status(404).send({ message: error.message }),
      );
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = users;
