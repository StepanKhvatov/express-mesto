const fsPromises = require('fs').promises;

const getAllCards = (path) => fsPromises.readFile(path, { encoding: 'utf-8' })
  .then((data) => JSON.parse(data));

const getAllUsers = (path) => fsPromises.readFile(path, { encoding: 'utf-8' })
  .then((data) => JSON.parse(data));

module.exports = {
  getAllCards,
  getAllUsers,
};
