const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => winston.info(`Connected to ${process.env.MONGODB_URL}`))
    .catch((err) => console.log(err));
};
