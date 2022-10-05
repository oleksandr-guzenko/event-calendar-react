const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: new String()
    },
    role: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('users', UserSchema);