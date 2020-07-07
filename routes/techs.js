const express = require('express');
const router = express.Router();
const Tech = require('../models/tech');
const asyncMiddleware = require('../middleware/async');

router.get('/', async (req, res) => {
  const techs = await Tech.find();
  res.send(techs);
});

router.post(
  '/',
  asyncMiddleware(async (req, res) => {
    let tech = new Tech(req.body);

    await tech.save();

    res.send(tech);
  })
);

router.put('/:id', async (req, res) => {
  const techs = await Tech.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      allSkills: req.body.allSkills,
    },
    { new: true }
  );

  res.send(techs);
});

router.delete('/:id', async (req, res) => {
  const techs = await Tech.findByIdAndDelete(req.params.id);
  res.send(techs);
});

module.exports = router;
