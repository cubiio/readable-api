const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./handlers/logger');
const routes = require('./routes/index');

const app = express();

app.use(logger.devLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

module.exports = app;
