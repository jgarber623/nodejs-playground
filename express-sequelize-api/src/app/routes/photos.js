'use strict';

const router = require('express').Router();

const database = require('../models');

router.get('/', async (req, rsp) => {
  const photos = await database.Photo.findAll({ include: database.Author });

  rsp.status(200).json(photos);
});

router.get('/:id', async (req, rsp) => {
  const photoId = req.params.id;
  const photo = await database.Photo.findByPk(photoId, { include: database.Author });

  if (photo) {
    rsp.status(200).json(photo);
  } else {
    rsp.status(404).json({ message: `No photo found where id = ${photoId}`});
  }
});

module.exports = router;
