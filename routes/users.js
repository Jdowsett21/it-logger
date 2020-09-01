const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const asyncMiddleware = require('../middleware/async');

//get individual user
router.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});
router.get(
  '/me',
  asyncMiddleware(async (req, res) => {
    const user = await User.findById(req.user._id);

    res.send(user);
  })
);

module.exports = router;
