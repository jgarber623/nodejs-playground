'use strict';

const router = require('express').Router();
const AuthorsController = require('../controllers/AuthorsController');

router.get('/', AuthorsController.getAllAuthors);
router.get('/:id', AuthorsController.getAuthor);

module.exports = router;
