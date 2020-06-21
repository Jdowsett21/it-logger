const express = require('express');
const app = express();
const logs = require('../routes/logs');
const techs = require('../routes/techs');

module.exports = function (app) {
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use('/logger/techs', techs);
  app.use('/logger/logs', logs);
};
