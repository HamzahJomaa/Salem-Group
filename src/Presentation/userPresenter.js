const { SuccessStatus } = require("../Constants/Success/successStatus");
const { prepareSuccessResponse } = require("./common/presenter");
const { UserResponseModel } = require("./models/responseModels/user/userResponseModel");

/**
 * Responsible for preparing the response to be sent to the frontend
 * @param {request will include a property called responseModel prepared from the dataHandler} req
 * @param {response will be used to return an immediate response if needed} res
 * @param {goes to the next step of the process} next
 */


/**
 * CreateUserByIdPresenter prepares the response for the client side
 */
const createUserByIdPresenter = async (req, res, next) => {
    const responseModel = new UserResponseModel(req.user);
    req.statusCode = SuccessStatus.ADDED_SUCCESSFULLY.code;
    req.presenterModel = prepareSuccessResponse(
        SuccessStatus.ADDED_SUCCESSFULLY,
        null,
        responseModel
    );
    next();
};
// commit



module.exports = {
    createUserByIdPresenter,
};
