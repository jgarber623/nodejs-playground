'use strict';

const router = require('express').Router();

const database = require('../models');

router.get('/', async (req, rsp) => {
  const authors = await database.Author.findAll();

  rsp.status(200).json(authors);
});

router.get('/:id', async (req, rsp) => {
  const authorId = req.params.id;
  const author = await database.Author.findByPk(authorId);

  if (author) {
    rsp.status(200).json(author);
  } else {
    rsp.status(404).json({ message: `No author found where id = ${authorId}`});
  }
});

module.exports = router;
