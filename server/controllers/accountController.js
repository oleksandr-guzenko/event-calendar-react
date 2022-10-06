const express = require("express");
const router = express.Router();
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
}