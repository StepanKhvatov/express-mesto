const cards = require('express').Router();
const { getAllCards } = require('../controllers/cards');

cards.get('/cards', getAllCards);

module.exports = cards;
