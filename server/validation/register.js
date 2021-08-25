const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    //check empty fields
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    //name check
    if(Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }
    //email check
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }
    else if(!Validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }
    //password checks
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "Need to confirm password";
    }
    if(!Validator.isLength(data.password, {min:6, max:32})) {
        errors.password = "Password must be at least 6 characters";
    }
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords do not match";
    }
    return {
        errors,
        isValid:isEmpty(errors)
    };
}