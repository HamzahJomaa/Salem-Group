/**
 * Create user into the system
 * @returns {SuccessResponseModel<CreateReponseModel>}
 */
const CreateUser = (req, res) => {
    return res.status(req.statusCode).json(req.presenterModel);
};


/**
 * Logs user into the system
 * @returns {SuccessResponseModel<LoginResponseModel>}
 */
const loginUser = (req, res) => {
    return res.status(req.statusCode).json(req.presenterModel);
};

/**
 * Logs user out of the system
 * @returns {SuccessResponseModel}
 */
const logoutUser = async (req, res) => {
    return res.status(req.statusCode).json(req.presenterModel);
};

/**
 * Send an email to the user
 * @returns {SuccessResponseModel}
 */
const forgotPassword = async (req, res) => {
    return res.status(req.statusCode).json(req.presenterModel);
};


module.exports = {
    loginUser,
    logoutUser,
    forgotPassword,
    CreateUser
};
