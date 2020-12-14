'use strict';

require('dotenv').config();

const express = require('express');

const authorsRouter = require('./routes/authors');

const PORT = parseInt(process.env.PORT, 10) || 8080;

const app = express();

app.use(express.json());

app.use('/authors', authorsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
