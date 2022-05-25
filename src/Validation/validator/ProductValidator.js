const {ErrorStatus} = require("../../Constants/Error/errorStatus")
const {
    prepareErrorResponse,
} = require("../../Error/errorhandler")
const {
    createProductValidationScheme,
    updateProductValidationScheme,
    DeleteProductValidationScheme
} = require("../validation/ProductValidation");
const {
    paginationValidationScheme,
} = require("../validation/PaginationValidation")
const {prepareErrorLog} = require("../../Helpers/loggingKit");
const { ProductRequestModel } = require("../../DataHandler/models/productModel");
const { PaginationModel } = require("../../DataHandler/models/paginationModel");


const updateProductValidator = (req, res, next) => {
    try {
        const bodyReceived = new ProductRequestModel(req.body);
        bodyReceived["id"] = req.body.id
        const result = updateProductValidationScheme.validate(bodyReceived);
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message))
        } else {
            req.requestModel = bodyReceived;
            next()
        }
    } catch (error) {
        prepareErrorLog(error, createUserValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN))
    }
}

const createProductValidator = (req, res, next) => {
    try {
        const bodyReceived = new ProductRequestModel(req.body);
        const result = createProductValidationScheme.validate(bodyReceived);
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message))
        } else {
            req.requestModel = bodyReceived;
            next()
        }
    } catch (error) {
        prepareErrorLog(error, createUserValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN))
    }
}
const DeleteProductValidator = ( req, res, next ) =>{
    try{
        const result = DeleteProductValidationScheme.validate(req.params)
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message))
        } else {
            next()
        }
    }catch (error) {
        prepareErrorLog(error, DeleteProductValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN))
    }
}

const ProductPaginationValidator = ( req, res, next ) =>{
    try{
        const parmsReceived = new PaginationModel(req.params);
        const result = paginationValidationScheme.validate(parmsReceived)
        if (result.error) {
            res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST, result.error?.message))
        } else {
            req.parmsModel = parmsReceived;
            next()
        }
    }catch (error) {
        prepareErrorLog(error, ProductPaginationValidator.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN))
    }
}

module.exports = { createProductValidator, updateProductValidator, ProductPaginationValidator, DeleteProductValidator }