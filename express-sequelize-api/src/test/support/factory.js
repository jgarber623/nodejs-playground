'use strict';

const fs = require('fs');
const path = require('path');

const { factory, SequelizeAdapter } = require('factory-bot');

factory.setAdapter(new SequelizeAdapter());

const database = require('../../app/models');

const factoriesPath = path.join(__dirname, 'factories');

fs
  .readdirSync(factoriesPath)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-11) === '.factory.js');
  }).forEach(file => {
    const definedFactory = require(path.join(factoriesPath, file));

    return definedFactory(factory, database);
  });

module.exports = factory;
