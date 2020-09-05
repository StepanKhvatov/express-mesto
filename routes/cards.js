const fs = require('fs');
const cards = require('express').Router();
const path = require('path');

cards.get('/cards', (req, res) => {
  fs.readFile(path.join(__dirname, '../data', 'cards.json'), { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.status(404).send({ message: err });
      return;
    }
    const cardsData = JSON.parse(data);

    res.send(cardsData);
  });
});

module.exports = cards;
