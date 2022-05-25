const { ErrorStatus } = require("../../Constants/Error/errorStatus")
const { prepareErrorResponse } = require("../../Error/errorhandler")
const { LoginRequestModel } = require("../../DataHandler/models/loginModel")
const {loginValidationScheme} = require("../validation/authValidation")
const { prepareErrorLog } = require("../../Helpers/loggingKit");



const loginValidator = (req, res, next) => {
    try {
        let bodyReceived = new LoginRequestModel(req.body)
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (bodyReceived.user.match(regexEmail)) {
            bodyReceived.email = bodyReceived.user
            delete bodyReceived.user
        }
        else{
            bodyReceived.username = bodyReceived.user
            delete bodyReceived.user
        }
        const result = loginValidationScheme.validate(bodyReceived)
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(
                    prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message)
                );
        } else {
            req.requestModel = bodyReceived;
            next();
        }
    } catch (error) {
        prepareErrorLog(error, loginValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
};

module.exports = {
    loginValidator
}
