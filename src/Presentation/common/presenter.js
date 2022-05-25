const { cleanUpModel } = require("../../Helpers/responseModelCleanerKit");
const {
  SuccessResponseModel,
} = require("../models/responseModels/common/SuccessResponseModel");

/**
 *
 * @param {One of the success statuses in the constants folder} successStatus
 * @param {Potential custom success message} message
 * @param {Potential data to be returned} data
 * @returns {Cleaned up SuccessResponseModel}
 */
const prepareSuccessResponse = (successStatus, message, data) => {
  const model = new SuccessResponseModel({
    data: data,
    message: message ?? successStatus.message,
    statusCode: successStatus.code,
  });
  return cleanUpModel(model);
};

module.exports = {
  prepareSuccessResponse,
};
