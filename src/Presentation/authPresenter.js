const {SuccessStatus} = require("../Constants/Success/successStatus");
const {
    LoginResponseModel,
} = require("../Presentation/models/responseModels/auth/LoginResponseModel");
const {prepareSuccessResponse} = require("./common/presenter");

/**
 * Responsible for preparing the response to be sent to the frontend
 * @param {request will include a property called responseModel prepared from the dataHandler} req
 * @param {response will be used to return an immediate response if needed} res
 * @param {goes to the next step of the process} next
 */

/**
 * LoginPresenter prepares the response for the client side
 */
const loginPresenter = async (req, res, next) => {
    const responseModel = new LoginResponseModel(req.responseModel);
    req.statusCode = SuccessStatus.LOGIN_SUCCESSFUL.code;
    req.presenterModel = prepareSuccessResponse(
        SuccessStatus.LOGIN_SUCCESSFUL,
        null,
        responseModel
    );
    next();
};
//second commit

/**
 * LogoutPresenter prepares the response for the client side
 */
const logoutPresenter = async (req, res, next) => {
    req.statusCode = SuccessStatus.LOGOUT_SUCCESSFUL.code;
    req.presenterModel = prepareSuccessResponse(
        SuccessStatus.LOGOUT_SUCCESSFUL,
        null,
        null
    );
    next();
};

/**
 * ForgotPasswordPresenter prepares the response for the client side
 */
const forgotPasswordPresenter = async (req, res, next) => {
    req.statusCode = SuccessStatus.FORGOT_PASSWORD_SUCCESSFUL.code;
    req.presenterModel = prepareSuccessResponse(
        SuccessStatus.FORGOT_PASSWORD_SUCCESSFUL,
        null,
        null
    );
    next();
};

module.exports = {
    loginPresenter,
    logoutPresenter,
    forgotPasswordPresenter
};
