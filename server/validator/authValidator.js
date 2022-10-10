const validator = require('validator');

let errors = {};
let isValid = false;

module.exports = {
    login: (input) => {
        const { name, password } = input;
        errors = {};
        isValid = false;

        if(!validator.isAlphanumeric(name)) errors.name = 'Only characters and numbers';
        if(validator.isEmpty(name)) errors.name = 'Required field';
        if(!validator.isLength(password, {min: 6})) errors.password = 'The password must be at least 8 characters';
        if(validator.isEmpty(password)) errors.password = 'Required field';

        isValid = Object.keys(errors).length === 0;

        return {errors, isValid};
    }
}