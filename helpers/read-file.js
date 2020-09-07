const fsPromises = require('fs').promises;

const readCardsJson = (path) => fsPromises.readFile(path, { encoding: 'utf-8' })
  .then((data) => JSON.parse(data));

const readUsersJson = (path) => fsPromises.readFile(path, { encoding: 'utf-8' })
  .then((data) => JSON.parse(data));

module.exports = {
  readCardsJson,
  readUsersJson,
};
