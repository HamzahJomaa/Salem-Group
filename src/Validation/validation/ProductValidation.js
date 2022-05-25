const Joi = require("joi");
const ObjectIdJoi = require('joi-oid')
const {emailValidation, typeValidation} = require("./common");

const updateProductValidationScheme = Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
});

const DeleteProductValidationScheme = Joi.object().keys({
    id: ObjectIdJoi.objectId().required()
})

const createProductValidationScheme = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
});


module.exports = { createProductValidationScheme,updateProductValidationScheme,DeleteProductValidationScheme }