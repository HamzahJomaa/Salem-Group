const { SuccessStatus } = require("../Constants/Success/successStatus");
const { prepareSuccessResponse } = require("./common/presenter");
const { ProductResponseModel } = require("./models/responseModels/product/productResponseModel");

/**
 * Responsible for preparing the response to be sent to the frontend
 * @param {request will include a property called responseModel prepared from the dataHandler} req
 * @param {response will be used to return an immediate response if needed} res
 * @param {goes to the next step of the process} next
 */


/**
 * UpdateProductByIdPresenter prepares the response for the client side
 */
 const updateProductPresenter = async (req, res, next) => {
    const responseModel = new ProductResponseModel(req.product);
    req.statusCode = SuccessStatus.UPDATED_SUCCESSFULLY.code;
    req.presenterModel = prepareSuccessResponse(
        SuccessStatus.UPDATED_SUCCESSFULLY,
        null,
        responseModel
    );
    next();
};

/**
 * DeleteProductByIdPresenter prepares the response for the client side
 */
 const deleteProductPresenter = async (req, res, next) => {
    const responseModel = new ProductResponseModel(req.product);
    req.statusCode = SuccessStatus.DELETED_SUCCESSFULLY.code;
    req.presenterModel = prepareSuccessResponse(
        SuccessStatus.DELETED_SUCCESSFULLY,
        null,
        responseModel
    );
    next();
};


/**
 * CreateProductByIdPresenter prepares the response for the client side
 */
const createProductPresenter = async (req, res, next) => {
    const responseModel = new ProductResponseModel(req.product);
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
    createProductPresenter,
    updateProductPresenter,
    deleteProductPresenter
};
