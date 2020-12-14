'use strict';

const models = require('../models');

class AuthorsController {
  static async getAllAuthors(req, rsp, next) {
    const authors = await models.Author.findAll();

    rsp.status(200).json(authors);
  }

  static async getAuthor(req, rsp, next) {
    const authorId = req.params.id;
    const author = await models.Author.findByPk(authorId);

    if (author) {
      rsp.status(200).json(author);
    } else {
      rsp.status(404).json({ message: `No author found where id = ${authorId}`});
    }
  }
};

module.exports = AuthorsController;
