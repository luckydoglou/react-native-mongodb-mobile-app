/**
 * Authentication routes check if use is in the database or need to register
 */

const router = require('express').Router();
const joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

// Validation schemas
const signupValidationSchema = joi.object({
  username: joi.string().min(3).max(20).required(),
  firstname: joi.string().max(20).required(),
  lastname: joi.string().max(20).required(),
  password: joi.string().required(),
  email: joi.string().required().email()
});

const loginValidationSchema = joi.object({
  username: joi.string().max(20).required(),
  password: joi.string().required()
});

//=================================================================
// signup a new user
router.route('/signup').post(async (req, res) => {

  try {
    // validate the data
    const validatedData = signupValidationSchema.validate(req.body);
    if (validatedData.error) {
      return res.status(400).send(validatedData.error.details[0].message);
    }

    // check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    const usernameExist = await User.findOne({ username: req.body.username });
    if (emailExist) throw Error("Signup fail: email already exist");
    if (usernameExist) throw Error("Signup fail: username already exist");

    // hash the password use bcrypt
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Error using bcrypt');
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    if (!hash) throw Error('Error hashing password');

    // create an user use the model and fill up the fields
    const newUser = new User({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: hashedPassword,
      email: req.body.email
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  // save data to database and send response back to user
  newUser.save()
    .then(data => {
      res.status(200).send({ user_id: data._id });
      console.log("User Added!");
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

//=================================================================
// login an user
router.route('/login').post(async (req, res) => {

  try {
    // validate the data before login an user
    const validatedData = loginValidationSchema.validate(req.body);
    if (validatedData.error) {
      return res.status(400).send(validatedData.error.details[0].message);
    }

    // check if the user is already in the database
    const user = await User.findOne({ $or: [{username: req.body.username}, {email: req.body.email}] });
    // check if the email exists
    if (!user) throw Error("Lginin fail: username or email does not exist");

    // check if the password is correct
    const pwMatch = await bcrypt.compare(req.body.password, user.password);
    if (!pwMatch) throw Error("Login fail: invalid password")

    // generate authToken
    const authToken = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, { expiresIn: '10h' });
    res.header('auth-token', authToken).send(authToken);
    console.log("auth.js, Login Success");

  } catch(err) {
    res.status(400).json({ error: err.message })
  }
});

module.exports = router;