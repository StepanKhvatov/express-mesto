const cards = require('express').Router();
const { getAllCards } = require('../helpers/read-file');

cards.get('/cards', (req, res) => {
  try {
    getAllCards('./data/cards.json')
      .then(
        (data) => res.send(data),
        (error) => res.status(500).send({ message: error.message }),
      );
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = cards;
