const { SuccessStatus } = require("../Constants/Success/successStatus");
const { prepareSuccessResponse } = require("./common/presenter");
const { PaginationResponseModel } = require("./models/responseModels/Pagination/paginationResponseModel");


/**
 * paginationPresenter prepares the response for the client side
 */
 const paginationPresenter = async (req, res, next) => {
    let values = {
        totalDocs: req.totalDocs,
        totalPages: req.totalPages,
        docs: req.docs,
        page: req.parmsModel.currentPage
    }
    const responseModel = new PaginationResponseModel(values);
    req.statusCode = SuccessStatus.RETRIEVED_SUCCESSFULLY.code;
    req.presenterModel = prepareSuccessResponse(
        SuccessStatus.RETRIEVED_SUCCESSFULLY,
        null,
        responseModel
    );
    next();
};

module.exports = {
    paginationPresenter
}