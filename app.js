const express = require('express');

const { PORT = 3000 } = process.env;
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();

app.use(express.static('public'));

app.use(users);
app.use(cards);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
