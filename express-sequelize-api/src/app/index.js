'use strict';

const express = require('express');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(express.json());

app.use('/authors', require('./routes/authors'));
app.use('/photos', require('./routes/photos'));

module.exports = app;
