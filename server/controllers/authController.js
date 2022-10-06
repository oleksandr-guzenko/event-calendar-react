const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authValidator = require('../validator/auth/authValidator');
const keys = require("../config/keys");

const User = require('../models/User');

module.exports = {
    login: (req, res) => {
        const { errors, isValid } = authValidator.login(req.body);

        console.log(errors, isValid);
        if(!isValid) return res.status(400).json(errors);

        User
            .findOne({name: req.body.name})
            .then(user => {
                if(!user) return res.status(400).json({name: 'That user does not exist'});
                bcrypt
                    .compare(req.body.password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                        // User matched
                        // Create JWT Payload
                        const payload = {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            disable: user.disable,
                            verified: user.verified,
                            role: user.role
                        };
                
                        // Sign token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {
                            expiresIn: 3600
                            },
                            (err, token) => {
                            res.json({ token });
                            }
                        );
                        } else {
                        return res
                            .status(400)
                            .json({ password: "Incorrect Password" });
                        }
                    });
                })
                .catch(err => console.log(err));
    },
    verify: (req, res) => {
        User
            .findById(req.params.id)
            .then(user => {
                if(user) {
                    if(user.verified) res.json(user);
                    else {
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
                    }
                }
            })
            .catch(err => console.log(err));
    },

    getVerified: (req, res) => {
        User
            .findById(req.params.id)
            .then(user => res.json({verified: user.verified}))
            .catch(err => console.log(err));
    }
}