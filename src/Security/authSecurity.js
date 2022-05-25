

const {ErrorStatus} = require("../Constants/Error/errorStatus");
const {prepareErrorResponse} = require("../Error/errorhandler");
const {generateJWT} = require("../Helpers/jwtKit");
const {prepareErrorLog} = require("../Helpers/loggingKit");
const {isPasswordEncryptionValid} = require("./common");

const loginSecurity = async (req, res, next) => {
    try {
        const user = req.user;
        const requestModel = req.requestModel;
        const isValidPassword = await isPasswordEncryptionValid(
            requestModel.password,
            user?.password || ""
        );
        if (!isValidPassword) {
            return res
                .status(ErrorStatus.WRONG_PASSWORD.code)
                .json(prepareErrorResponse(ErrorStatus.WRONG_PASSWORD));
        } else {
            const registeredToken = await generateJWT(user);
            res.cookie("token", registeredToken);
            req.responseModel = {token: registeredToken, user};
            user.lastLogin = new Date()
            user.token = registeredToken
            user.save()
            next();
        }
    } catch (error) {
        prepareErrorLog(error, loginSecurity.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
};

const logoutSecurity = async (req, res, next) => {
    try {
        await res.clearCookie("token");
        next();
    } catch (error) {
        prepareErrorLog(error, loginSecurity.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
};

module.exports = {
    loginSecurity,
    logoutSecurity,
};
