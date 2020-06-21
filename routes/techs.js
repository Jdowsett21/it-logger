const express = require('express');
const router = express.Router();
const jwt = require(json - web - token);
const bcrypt = require('bcryptjs');
const Tech = require('../models/tech');

router.get('/', async (req, res) => {
  const techs = await Tech.find('');
  res.send();
});

router.post('/', async (req, res) => {
  const tech = await Tech.findById(req.params._id);

  tech = new Tech(req.body);

  await tech.save();

  res.send(tech);
});

router.patch('/:id', async (req, res) => {
  const tech = await Tech.findById(req.params._id);
});
