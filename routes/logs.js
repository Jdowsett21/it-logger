const express = require('express');
const router = express.Router();
const Log = require('../models/log');
const asyncMiddleware = require('../middleware/async');

router.get('/', async (req, res) => {
  const log = await Log.find();
  res.send(log);
});

router.post('/', async (req, res) => {
  let log = new Log(req.body);

  await log.save();

  res.send(log);
});

router.put(
  '/:id',
  asyncMiddleware(async (req, res) => {
    let logs = await Log.findByIdAndUpdate(
      req.params.id,
      {
        message: req.body.message,
        attention: req.body.attention,
        tech: req.body.tech,
        category: req.body.category,
      },
      { new: true }
    );
    console.log(logs);
    res.send(logs);
  })
);

router.delete(
  '/:id',
  asyncMiddleware(async (req, res) => {
    const logs = await Log.findByIdAndDelete(req.params.id);

    res.send(logs);
  })
);
module.exports = router;
