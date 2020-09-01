const express = require('express');
const router = express.Router();
const Tech = require('../models/tech');

router.get('/', async (req, res) => {
  const techs = await Tech.find();
  res.send(techs);
});

router.post('/', async (req, res) => {
  let tech = new Tech(req.body);

  await tech.save();

  res.send(tech);
});

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
