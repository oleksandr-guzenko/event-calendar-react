const validator = require('validator');

let errors = {};
let isValid = false;

module.exports = {
    add: (input) => {
        const { name, email, role } = input;
        errors = {};
        isValid = false;

        if(!validator.isAlphanumeric(name)) errors.name = 'Only characters and numbers';
        if(validator.isEmpty(name)) errors.name = 'Required field';
        if(!validator.isEmail(email)) errors.email = 'Invalid Email';
        if(validator.isEmpty(email)) errors.email = 'Required field';
        if(!validator.isIn(role, ['Master', 'User', 'Admin'])) errors.role = 'Invalid Role';
        if(validator.isEmpty(role)) errors.role = 'Required field';

        isValid = Object.keys(errors).length === 0;

        return {errors, isValid};
    }
}