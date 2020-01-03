const router = require('express').Router();
let User = require('../models/user.model');

// get all data from DB
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// signup a new user
router.route('/signup').post((req, res) => {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  const email = req.body.email;
  const newUser = new User({
    username,
    firstname,
    lastname,
    password,
    email
  });

  newUser.save()
    .then(() => {
      console.log("User Added!");
      res.status(200).json("User Added!")
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// login an user
router.route('/login').post((req, res) => {
  User.find({
    username: req.body.username,
    password: req.body.password,
  })
    .then(users => {
      if (users.length !== 0) {
        res.status(200).json("User Found!");
        console.log("User Found");
      } else {
        res.status(204).json("User Not Found");
        console.log("User Not Found");
      }
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

