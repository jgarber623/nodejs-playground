'use strict';

module.exports = (factory, { Author }) => {
  factory.define('author', Author, {
    name: 'Jason Garber',
    url: 'https://sixtwothree.org',
    photo: 'https://assets.sixtwothree.org/jgarber.png',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return factory;
};
