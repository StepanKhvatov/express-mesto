const users = require('express').Router();
<<<<<<< HEAD
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

users.get('/users', getAllUsers);

users.get('/users/:userId', getUserById);

users.post('/users', createUser);

users.patch('/users/me', updateUser);

users.patch('/users/me/avatar', updateAvatar);
=======
const { getAllUsers, getUserById } = require('../controllers/users');

users.get('/users', getAllUsers);

users.get('/users/:id', getUserById);
>>>>>>> b8d7ba23d867dcc0cf0b3b113c50ddd951581e43

module.exports = users;
