const express = require('express');
const router = express.Router();
const Log = require('../models/log');
const jwt = require('json-web-token');
const bcrypt = require('bcryptjs');
const asyncMiddleware = require('../middleware/async');
router.use(asyncMiddleware);
router.get('/', async (req, res) => {
  const log = await Log.find('');
});

router.post('/', async (req, res) => {
  const log = await Log.findById(req.log._id);

  log = new Log(req.body);

  await log.save();

  res.send(log);
});

router.patch('/:id', async (req, res) => {
  const log = await Log.findById(req.log._id);
  a;
});
