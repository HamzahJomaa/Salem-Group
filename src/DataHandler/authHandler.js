const {isEmpty} = require("lodash")
const UserQueries = require("../Database/Queries/User")
const {ErrorStatus} = require("../Constants/Error/errorStatus")
const {prepareErrorResponse} = require("../Error/errorhandler")
const {prepareErrorLog} = require("../Helpers/loggingKit")


/**
 * Responsible for fetching the data from the database and preparing the needed data
 * for the next step
 * @param {request will include a property called requestModel prepared from the previous step} req
 * @param {response will be used to return an immediate response if needed} res
 * @param {goes to the next step of the process} next
 */

/**
 * LoginDataHandler prepares the user data needed from the database
 */
const loginDataHandler = async (req, res, next) => {
    try {
        const requestModel = req.requestModel;
        let user = undefined
        if(requestModel.username) {
            user = await UserQueries.getUserByUsername(requestModel.username)
        }else{
            user = await UserQueries.getUserByEmail(requestModel.email)
        }
        if (isEmpty(user)) {
            return res
                .status(ErrorStatus.EMAIL_OR_USERNAME_IS_INCORRECT.code)
                .json(prepareErrorResponse(ErrorStatus.EMAIL_OR_USERNAME_IS_INCORRECT));
        } else {
            req.user = user
            next();
        }
    } catch (error) {
        prepareErrorLog(error, loginDataHandler.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
};

// /**
//  * ForgotPasswordDataHandler prepares the user data needed from the database
//  */
// const forgotPasswordDataHandler = async (req, res, next) => {
//     try {
//         const requestModel = req.requestModel;
//         const user = await UserQueries.getUserByEmail(requestModel.email);
//         if (isEmpty(user)) {
//             return res
//                 .status(ErrorStatus.DOES_NOT_EXIST.code)
//                 .json(prepareErrorResponse(ErrorStatus.DOES_NOT_EXIST));
//         } else {
//             sendEmail(user.email, EmailTypes.ForgotPassword)
//             req.user = user
//             next();
//         }
//     } catch (error) {
//         prepareErrorLog(error, forgotPasswordDataHandler.name);
//         return res
//             .status(ErrorStatus.SERVER_DOWN.code)
//             .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
//     }
// };

module.exports = {
    loginDataHandler,
    // forgotPasswordDataHandler
};
