const {isEmpty} = require("lodash");
const ProductQueries = require("../Database/Queries/Product");
const {ErrorStatus} = require("../Constants/Error/errorStatus");
const {prepareErrorResponse} = require("../Error/errorhandler");
const {prepareErrorLog} = require("../Helpers/loggingKit");
const {generateIdbyName} = require("../Helpers/common")
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")


/**
 * createProductDataHandler creates a new user
 */
 const updateProductDataHandler = async (req, res, next) => {
    try {
        if (isEmpty(req.requestModel)) {
            return res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST));
        }
        const productRequest = req.requestModel
        const product = await ProductQueries.getProductByCustomId(productRequest.id)
        if (!product) {
            return res
                .status(ErrorStatus.PRODUCT_DOES_NOT_EXIST.code)
                .json(prepareErrorResponse(ErrorStatus.PRODUCT_DOES_NOT_EXIST));
        }
        productRequest["id"] = generateIdbyName(productRequest.name)
        await ProductQueries.updateProductById(product._id,productRequest)
        req.product = productRequest
        next();
    } catch (error) {
        prepareErrorLog(error, updateProductDataHandler.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
}


/**
 * createProductDataHandler creates a new user
 */
 const createProductDataHandler = async (req, res, next) => {
    try {
        if (isEmpty(req.requestModel)) {
            return res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST));
        }
        const productRequest = req.requestModel
        productRequest["id"] = generateIdbyName(productRequest.name)
        await ProductQueries.createProduct(productRequest)
        const product = await ProductQueries.getProductByCustomId(productRequest.id)
        req.product = product
        next();
    } catch (error) {
        prepareErrorLog(error, createProductDataHandler.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
}


const ProductPaginationDataHandler = async ( req, res, next ) =>{
    try {
        if (isEmpty(req.parmsModel)) {
            return res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST));
        }
        const parmsRequest = req.parmsModel

        const products = await ProductQueries.getAllProducts(parmsRequest.perPage,parmsRequest.currentPage)
        const totalProducts = await ProductQueries.getCount()
        req.totalDocs = totalProducts
        req.totalPages = Math.ceil(totalProducts / parmsRequest.perPage)
        req.docs = products
        next();
    } catch (error) {
        prepareErrorLog(error, createProductDataHandler.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
}

const DeleteProductByIdDataHandler = async ( req, res, next) =>{
    try{
        if (isEmpty(req.params)) {
            return res
                .status(ErrorStatus.BAD_REQUEST.code)
                .json(prepareErrorResponse(ErrorStatus.BAD_REQUEST));
        }
        const { id } = req.params
        const product = await ProductQueries.DeleteProduct(id)
        
        if (isEmpty(product)) {
            return res
                .status(ErrorStatus.NOT_FOUND.code)
                .json(prepareErrorResponse(ErrorStatus.NOT_FOUND));
        }
        req.product = product
        next();
    } catch (error) {
        prepareErrorLog(error, DeleteProductByIdDataHandler.name);
        return res
            .status(ErrorStatus.SERVER_DOWN.code)
            .json(prepareErrorResponse(ErrorStatus.SERVER_DOWN));
    }
}

module.exports = {
    createProductDataHandler,
    updateProductDataHandler,
    ProductPaginationDataHandler,
    DeleteProductByIdDataHandler
};