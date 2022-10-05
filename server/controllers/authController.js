const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const User = require('../models/User');

module.exports = {
    login: (req, res) => {
        User
            .findOne({name: req.body.name})
            .then(user => {
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
                            expiresIn: 3600 // 1 year in seconds
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
    }
}