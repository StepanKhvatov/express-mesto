const path = require('path');
const { readUsersJson } = require('../helpers/read-file');

const getAllUsers = (req, res) => readUsersJson(path.join(__dirname, '..', 'data', 'users.json')) // Метод, возвращающий всех пользователей
  .then(
    (data) => res.send(data),
  )
  .catch(
    (error) => res.status(500).send({ message: error.message }),
  );

const getUserById = (req, res) => readUsersJson(path.join(__dirname, '..', 'data', 'users.json')) // Метод, возвращающий пользователя по id
  .then(
    (data) => {
      const userById = data.find((user) => user._id === req.params.id);
      if (userById) {
        res.send(userById);
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    },
  )
  .catch(
    (error) => res.status(500).send({ message: error.message }),
  );

module.exports = {
  getAllUsers,
  getUserById,
};
