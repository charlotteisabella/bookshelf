const { Router } = require('express');

module.exports = new Router()
  .get('/', (req, res) => {
    res.json({ ok: true });
  });
