const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/user');
const asyncMiddleware = require('../middleware/async');
const jwtDecode = require('jwt-decode');
const { hashPassword } = require('../utils');

router.post(
  '/login',
  asyncMiddleware(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findByCredentials(email, password);

    if (user) {
      const { password, ...rest } = user;
      const usersInformation = Object.assign({}, { ...rest });

      const token = await user.generateAuthToken();
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      res.cookie('token', token, { httpOnly: true });
      const { firstName, lastName, email, role } = usersInformation._doc;

      const userInfo = {
        firstName,
        lastName,
        email,
        role,
      };

      res.json({
        message: 'Login successful',
        token,
        userInfo,
        expiresAt,
      });
    }
  })
);
//want to populate user logs
router.post(
  '/signup',
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, firstName, lastName, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const userData = {
      email: email.toLowerCase(),
      firstName,
      lastName,
      password: hashedPassword,
      role: 'admin',
    };

    const existingEmail = await User.findOne({ email: userData.email }).lean();

    if (existingEmail)
      return res.status(400).json({ message: 'User already exists' });

    const newUser = new User(userData);

    const savedUser = await newUser.save();

    if (savedUser) {
      const token = await newUser.generateAuthToken();

      const decodedToken = jwtDecode(token);

      const expiresAt = decodedToken.exp;

      const { firstName, lastName, email, role } = savedUser;

      const userInfo = {
        firstName,
        lastName,
        email,
        role,
      };

      res.cookie('token', token, { httpOnly: true });

      return res.json({
        message: 'User Created!',
        userInfo,
        token,
        expiresAt,
      });
    }
  })
);
module.exports = router;
