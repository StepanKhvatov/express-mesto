const fs = require('fs');
const users = require('express').Router();
const path = require('path');

users.get('/users', (req, res) => {
  fs.readFile(path.join(__dirname, '../data', 'users.json'), { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.status(404).send({ message: err });
      return;
    }
    const usersData = JSON.parse(data);
    res.send(usersData);
  });
});

users.get('/users/:id', (req, res) => {
  fs.readFile('./data/users.json', { encoding: 'utf-8' }, (err, data) => {
    const usersData = JSON.parse(data);
    if (!usersData[req.params.id]) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res.send(usersData[req.params.id]);
  });
});

module.exports = users;
