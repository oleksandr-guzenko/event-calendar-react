const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    timezones: [
        {
            type: Object,
            required: true
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    description: {
        type: String,
        required: true
    },
    timestamps: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('events', EventSchema);