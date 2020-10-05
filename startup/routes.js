//routes
const logs = require('../routes/logs');
const techs = require('../routes/techs');
const auth = require('../routes/auth');
const users = require('../routes/users');
const express = require('express');
//middleware
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const jwt = require('express-jwt');

//custom middleware
const attachUser = require('../middleware/attachUser');

const csrfProtection = csrf({ cookie: true });

const verifyToken = jwt({
  secret: process.env.JWT_SECRET,
  iss: 'api.it-logger',
  aud: 'api.it-logger',
  algorithms: ['HS256'],
  getToken: (req) => req.cookies.token,
});

//function to run all middleware in index.js
module.exports = function (app) {
  app.use(cookieParser());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'build', 'index.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
  }
  app.use('/api/auth', auth);
  app.use(attachUser);
  app.use(verifyToken);
  app.use(csrfProtection);
  app.use('/api/users', users);
  app.use('/api/techs', techs);
  app.use('/api/logs', logs);
};
