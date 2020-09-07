const users = require('express').Router();
const { getAllUsers, getUserById } = require('../controllers/users');

users.get('/users', getAllUsers);

users.get('/users/:id', getUserById);

module.exports = users;
