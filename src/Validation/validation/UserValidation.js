const Joi = require("joi");
const ObjectIdJoi = require('joi-oid')
const {emailValidation, typeValidation} = require("./common");

const updateUserByIdValidationScheme = Joi.object().keys({
    info: {
        general: {
            fullName: Joi.string(),
            email: Joi.string().custom(emailValidation),
            password: Joi.string(),
            phone: Joi.string(),
            country: Joi.string(),
            address: Joi.string(),
            gender: Joi.string(),
            accountVerification: Joi.boolean(),
            type: Joi.string().custom(typeValidation),
            role: "",
            language: Joi.string()
        },
        // contact: {
        //     userId: ObjectIdJoi.objectId(),
        //     email: Joi.string().custom(emailValidation),
        //     phone: Joi.string(),
        //     fullName: Joi.string(),
        // },
    },

});

const changePasswordValidationScheme = Joi.object().keys({
    newPassword: Joi.string().required()

});

const createUserValidationScheme = Joi.object().keys({
    fullName: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required().custom(emailValidation),
    password: Joi.string().required(),
});

module.exports = {
    updateUserByIdValidationScheme,
    changePasswordValidationScheme,
    createUserValidationScheme
};

