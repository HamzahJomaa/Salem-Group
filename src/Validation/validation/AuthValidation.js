const Joi = require("joi");
const { emailValidation } = require("./Common");

const loginValidationScheme = Joi.alternatives().try(
    Joi.object().keys({
        email: Joi.string().required().custom(emailValidation),
        password: Joi.string().required(),
    }),
    Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),

)
// commit
const forgotPasswordValidationScheme = Joi.object().keys({
    email: Joi.string().required().custom(emailValidation)
});

module.exports = {
    loginValidationScheme,
    forgotPasswordValidationScheme
};
