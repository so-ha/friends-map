const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//loading input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
//load user model
const User = require("../../models/User");
//load friends model
const Friends = require("../../models/Friends");
//@route POST api/users/register
//@desc Register user
//@access Public

router.post("/register", (req, res) => {
  //form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      //hash the password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  }).catch(err => console.log("Error registering"));
});

//@route POST api/users/login
//@desc Login user and return JWT token
//@access Public
router.post("/login", (req,res) => {
  //form validation
  const {errors, isValid} = validateLoginInput(req.body);
  if(!isValid) {
    return res.status(400).json(errors);
  }
  // console.log(req.body);
  const {email, password} = req.body;
  //find user by email
  User.findOne({email})
  .then(user => {
    if(!user) 
    {
      return res.status(404).json({ emailnotfound : "Email not found"})
    }
    //check password 
    bcrypt.compare(password, user.password)
    .then(isMatch=> {
      if(isMatch) {
        //user matched
        //create JWT Payload
        const payload = {
          id:user.id, 
          name:user.name
        }
        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn:31556926 //1 year in seconds
          },
          (err, token) => {
            res.json({
              success : true, 
              token : "Bearer"+token
            });
          }
        );
      }
        else {
          //user not matched with password being incorrect
          return res.status(400).json({passwordincorrect: "Incorrect Password"})
        }
    });
  })
  .catch(err => console.log("Error logging in"));
});

module.exports = router;
