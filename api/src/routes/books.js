const { Router } = require('express');

const books = [
  {
    id: "123",
    title: 'nikolay',
    rating: 5
  },
  {
    id: "345",
    title: 'pikachu',
    rating: 4
  }
]

module.exports = new Router()
  .get('/', (req, res) => {
    res.json(books);
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const [ book ] = books.filter(book => book.id == id);

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'not found' });
    }
  });
