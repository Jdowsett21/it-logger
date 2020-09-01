const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: 'User',
  },
  allSkills: {
    type: Array,
    required: true,
  },
});

const Tech = mongoose.model('tech', techSchema, 'tech');

module.exports = Tech;
