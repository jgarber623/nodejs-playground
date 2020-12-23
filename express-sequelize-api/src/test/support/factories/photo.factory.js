'use strict';

module.exports = (factory, { Photo }) => {
  factory.define('Photo', Photo, {
    name: 'Textures',
    url: 'https://sixtwothree.org/photos/1',
    syndications: [
      'https://www.flickr.com/photos/jgarber/23207722914/',
      'https://www.instagram.com/p/_c-DL7txhI/'
    ],
    authorId: factory.assoc('Author', 'id'),
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return factory;
};
