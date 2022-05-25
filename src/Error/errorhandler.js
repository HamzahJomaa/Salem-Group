const { cleanUpModel } = require("../Helpers/responseModelCleanerKit");
const {
    ErrorResponseModel,
} = require("../Presentation/models/responseModels/common/ErrorResponseModel");

/**
 *
 * @param {One of the error statuses in the constants folder} errorStatus
 * @param {Potential custom error message generated by the validator} message
 * @returns {Cleaned up ErrorResponseModel}
 */
const prepareErrorResponse = (errorStatus, message) => {
    const model = new ErrorResponseModel({
        message: message ?? errorStatus.message,
        statusCode: errorStatus.code,
    });
    return cleanUpModel(model);
};

module.exports = {
    prepareErrorResponse,
};
