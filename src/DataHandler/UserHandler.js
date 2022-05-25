const {isEmpty} = require("lodash");
const UserQueries = require("../Database/Queries/User");
const {ErrorStatus} = require("../Constants/Error/errorStatus");
const {prepareErrorResponse} = require("../Error/errorhandler");
const {prepareErrorLog} = require("../Helpers/loggingKit");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")


/**
 * CreateUserDataHandler creates a new user
 */
const createUserDataHandler = async (req, res, next) => {
    try {
        if (isEmpty(req.requestModel)) {
            return res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST));
        }
        const userBody = req.requestModel
        const newPassword = userBody.password
        const salt = await bcrypt.genSalt(10),
            hashedPassword = await bcrypt.hash(newPassword, salt)
        userBody.password = hashedPassword
        userBody.email = userBody.email.toLowerCase()
        userBody.username = userBody.username.toLowerCase()
        const emailCheck = await UserQueries.getUserByEmail(userBody.email)
        const usernameCheck = await UserQueries.getUserByUsername(userBody.username)
        if (!isEmpty(emailCheck)){
            return res
                .status(ErrorStatus.USER_EXIST.code)
                .json(prepareErrorResponse(ErrorStatus.USER_EXIST));
        }
        if (!isEmpty(usernameCheck)) {
            return res
                .status(ErrorStatus.USERNAME_EXIST.code)
                .json(prepareErrorResponse(ErrorStatus.USERNAME_EXIST));
        }
        await UserQueries.createUser(userBody)
        const user = await UserQueries.getUserByUsername(userBody.username)
        req.user = user
        next();
    } catch (error) {
        prepareErrorLog(error, createUserDataHandler.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
}


module.exports = {
    createUserDataHandler,
};

