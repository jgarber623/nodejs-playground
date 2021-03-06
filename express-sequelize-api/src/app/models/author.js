'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      this.hasMany(models.Photo, {
        foreignKey: 'authorId'
      });
    }
  };

  Author.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });

  return Author;
};
