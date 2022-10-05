const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const User = require('../models/User');

module.exports = {
    add: (req, res) => {
        const {name, email, role} = req.body;
        const newUser = new User({
            name,
            email,
            role
        });
        
        newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    },

    verify: (req, res) => {
        User
            .findById(req.body.id)
            .then(user => {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                      if (err) throw err;
                      user.password = hash;
                      user.verified = true;

                      user
                        .save()
                        .then(savedUser => res.json(savedUser))
                        .catch(err => console.log(err));
                    });
                });
            })
            .catch(err => console.log(err));
    },
}