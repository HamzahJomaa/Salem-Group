const {ErrorStatus} = require("../../Constants/Error/errorStatus")
const {
    prepareErrorResponse,
} = require("../../Error/errorhandler")
const {
    updateUserByIdValidationScheme, changePasswordValidationScheme, createUserValidationScheme
} = require("../validation/userValidation");
const {prepareErrorLog} = require("../../Helpers/loggingKit");
const {InfoRequestModel} = require("../../DataHandler/models/userModel");

const updateUserByIdValidator = (req, res, next) => {
    try {
        const result = updateUserByIdValidationScheme.validate(req.body);
        // const bodyReceived = new UserRequestModel(req.body);
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message))
        } else {
            req.requestModel = bodyReceived;
            next()
        }
    } catch (error) {
        prepareErrorLog(error, updateUserByIdValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN))
    }
}

const changePasswordValidator = (req, res, next) => {
    try {
        const bodyReceived = req.body;
        const result = changePasswordValidationScheme.validate(bodyReceived);
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message))
        } else {
            req.requestModel = bodyReceived;
            next()
        }
    } catch (error) {
        prepareErrorLog(error, changePasswordValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN))
    }
}

const createUserValidator = (req, res, next) => {
    try {
        const bodyReceived = new InfoRequestModel(req.body);
        const result = createUserValidationScheme.validate(bodyReceived);
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message))
        } else {
            req.requestModel = bodyReceived;
            next()
        }
    } catch (error) {
        prepareErrorLog(error, createUserValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN))
    }
}

module.exports = {
    updateUserByIdValidator, changePasswordValidator, createUserValidator
}
