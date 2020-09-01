const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    text: true,
  },
  attention: {
    type: Boolean,
    default: true,
  },
  tech: {
    type: String,
    required: true,
    text: true,
  },
  category: {
    type: String,
    required: true,
    text: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Log = mongoose.model('log', logSchema);

module.exports = Log;
