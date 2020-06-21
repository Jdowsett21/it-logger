const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  attention: {
    type: Boolean,
    default: true,
  },
  tech: {
    techSchema,
  },
  issue: {
    type: String,
    required: true,
  },
});

const Log = mongoose.model('log', logSchema);

module.exports = Log;
