'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      this.belongsTo(models.Author, {
        foreignKey: 'authorId'
      });
    }
  };

  Photo.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    syndications: DataTypes.ARRAY(DataTypes.STRING),
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });

  return Photo;
};
