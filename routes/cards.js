const cards = require('express').Router();
<<<<<<< HEAD
const {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

cards.get('/cards', getAllCards);

cards.post('/cards', createCard);

cards.delete('/cards/:cardId', deleteCard);

cards.put('/cards/:cardId/likes', likeCard);

cards.delete('/cards/:cardId/likes', dislikeCard);

=======
const { getAllCards } = require('../controllers/cards');

cards.get('/cards', getAllCards);

>>>>>>> b8d7ba23d867dcc0cf0b3b113c50ddd951581e43
module.exports = cards;
