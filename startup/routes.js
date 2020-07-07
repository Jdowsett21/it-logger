const express = require('express');
const logs = require('../routes/logs');
const techs = require('../routes/techs');
const users = require('../routes/users');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.json());
  app.use('/it-logger/user', users);
  app.use('/it-logger/techs', techs);
  app.use('/it-logger/logs', logs);
};
