const mongoose = require('mongoose');

mongoose
  .connect(process.env.PORT)
  .then('Connected to database')
  .catch('Error connecting');
