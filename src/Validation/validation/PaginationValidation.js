const Joi = require("joi");
const ObjectIdJoi = require('joi-oid')

const paginationValidationScheme = Joi.object().keys({
    perPage: Joi.number().required(),
    currentPage: Joi.number().required(),
});


module.exports = {
    paginationValidationScheme
};