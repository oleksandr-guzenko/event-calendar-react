const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require('../models/User');
const accountValidator = require('../validator/accountValidator');

module.exports = {
    add: (req, res) => {
        // const {errors, isValid} = accountValidator(req.body);

        // if(!isValid) return res.status(400).json(errors);
        
        const {name, email, role} = req.body;

        // if((req.user.role === 'Admin' && (role === 'Admin' || role === 'Master')) || req.user.role === 'User') return res.status(400).json({role: "You cannot create the account with this role"});
        const newUser = new User({
            name,
            email,
            role,
            createdBy: req.user.id
        });
        
        newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    },

    all: (req, res) => {
        if(req.user.role === 'Master') {
            User
                .find({})
                .populate('events')
                .then(users => res.json(users))
                .catch(err => console.log(err));
        } else if(req.user.role === 'Admin') {
            User
                .find({$or: [{_id: req.user.id}, {createdBy: req.user.id}]})
                .populate('events')
                .then(users => res.json(users))
                .catch(err => console.log(err));
        }
    },

    disable: (req, res) => {
        User
            .findById(req.params.id)
            .then(user => {
                if(user.createdBy === req.user.id || req.user.role === 'Master') {
                    user.disabled = true;

                    user
                        .save()
                        .then(() => {
                            User
                                .find({})
                                .populate('events')
                                .then(users => res.json(users))
                                .catch(err => console.log(err))
                        })
                        .catch(err => console.log(err));
                }
            })
    },

    get: (req, res) => {
        User
            .findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => console.log(err));
    },

    update: (req, res) => {
        User
            .findById(req.params.id)
            .then(user => {
                user.name = req.body.name;
                user.email = req.body.email;
                user.role = req.body.role;

                user
                    .save()
                    .then(() => {
                        User
                            .find({})
                            .then(users => res.json(users))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }
}