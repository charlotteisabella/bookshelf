const { Router } = require('express');
const books = require('./books');

module.exports = new Router()
  .use('/books', books)
  .get('/', (req, res) => {
    res.json({ ok: true });
  });
