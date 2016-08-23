const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.get('/thing/:id', (req, res) => {
  res.send(`hello: ${req.params.id}`);
});

module.exports = app;
