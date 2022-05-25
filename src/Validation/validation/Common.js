/**
 *
 * @param {email value} value
 * @param {Joi helpers to be able to add customized error messages} helpers
 * @returns {the email if valid or the error message if not}
 */
const emailValidation = (value, helpers) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (value.match(regexEmail)) {
        return value;
    } else {
        return helpers.message("Invalid Email")
    }
};

/**
 *
 * @param {password value} value
 * @param {Joi helpers to be able to add customized error messages} helpers
 * @returns {the password if valid or the error message if not}
 */
const passwordValidation = (value, helpers) => {
    if (value) {
        if (value.length < 8) {
            return helpers.message("Password must be at least 8 characters");
        } else {
            return value;
        }
    } else {
        return helpers.message("is required");
    }
};

/**
 *
 * @param {type value} value
 * @param {Joi helpers to be able to add customized error messages} helpers
 * @returns {the type if valid or the error message if not}
 */
const typeValidation = (value, helpers) => {
    let type = ["Student", "Instructor", "Admin"]
    if (type.includes(value)) {
        return value;
    } else {
        return helpers.message("Invalid Type");
    }
};

/**
 *
 * @param {permission value} value
 * @param {Joi helpers to be able to add customized error messages} helpers
 * @returns {the permission if valid or the error message if not}
 */
const permissionValidation = (value, helpers) => {
    let permission = ["create", "read", "update", "delete"]
    let invalid = false
    value.forEach(item => {
        if (!permission.includes(item)) {
            invalid = true
        }
    })
    if (invalid) {
        return helpers.message("Invalid Permission");
    } else{
        return value
    }


}

module.exports = {
    emailValidation,
    passwordValidation,
    typeValidation,
    permissionValidation
};
