const path = require('path');
const { readCardsJson } = require('../helpers/read-file');

const getAllCards = (req, res) => readCardsJson(path.join(__dirname, '..', 'data', 'cards.json')) // Метод, возвращающий массив всех карточек
  .then(
    (data) => res.send(data),
  )
  .catch(
    (error) => res.status(500).send({ message: error.message }),
  );

module.exports = {
  getAllCards,
};
