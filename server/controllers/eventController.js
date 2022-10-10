const Event = require('../models/Event');
const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = {
    add: (req, res) => {
        const newEvent = new Event({
            title: req.body.title,
            description: req.body.description,
            timezones: req.body.timezones,
            datetime: new Date(req.body.datetime),
            user: req.user.id
        });

        newEvent
            .save()
            .then(savedEvent => {
                User
                .findById(req.user.id)
                .then(user => {
                    user.events.push(savedEvent._id);

                    user
                        .save()
                        .then(() => {
                            Event
                                .findById(savedEvent._id)
                                .populate('user')
                                .then(event => res.json(event))
                                .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    },

    all: (req, res) => {
        if(req.user.role === 'Master') {
            Event
                .find({})
                .populate({path: 'user', select: '-password'})
                .then(events => res.json(events))
                .catch(err => console.log(err))
        } else {
            User
                .find({$or: [{_id: req.user.id}, {createdBy: req.user.id}]})
                .then(users => {
                    const userIds = users.map(user => user._id);

                    Event
                        .find({ user: {$in: userIds}})
                        .populate({path: 'user', select: '-password'})
                        .then(events => res.json(events))
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        }
    },

    get: (req, res) => {
        Event
            .findById(req.params.id)
            .then(event => res.json(event))
            .catch(err => console.log(err));
    },

    update: (req, res) => {
        Event
            .findById(req.params.id)
            .then(event => {
                event.title = req.body.title;
                event.description = req.body.description;
                event.timezones = req.body.timezones;
                event.datetime = req.body.datetime;

                event
                    .save()
                    .then(() => {
                        Event
                            .find({})
                            .then(events => res.json(events))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }
}