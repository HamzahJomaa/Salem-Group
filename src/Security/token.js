const jwt = require("jsonwebtoken");
const { ErrorStatus } = require("../Constants/Error/errorStatus");
const { prepareErrorResponse } = require("../Error/errorhandler");
const UserQueries = require("../Database/Queries/User");
const { prepareErrorLog } = require("../Helpers/loggingKit");

/**
 * Validates that the token received in the authorization header belongs to a user or not
 */
const tokenSecurity = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res
                .status(ErrorStatus.NOT_AUTHORIZED.code)
                .json(prepareErrorResponse(ErrorStatus.NOT_AUTHORIZED));
        }
        const data = jwt.decode(
            token.replace("Bearer", "").trim(),
            process.env.JWT_SECRET
        );
        if (data) {
            const user = await UserQueries.getUserById(data.user.id ?? data.user._id);
            if (!user)
                return res
                    .status(ErrorStatus.NOT_AUTHORIZED.code)
                    .json(prepareErrorResponse(ErrorStatus.NOT_AUTHORIZED));
            req.user = user;
            next();
        } else {
            return res
                .status(ErrorStatus.NOT_AUTHORIZED.code)
                .json(prepareErrorResponse(ErrorStatus.NOT_AUTHORIZED));
        }
    } catch (error) {
        prepareErrorLog(error, tokenSecurity.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
};

module.exports = {
    tokenSecurity,
};
