const { isEmpty } = require("lodash");
const { default: mongoose } = require("mongoose");
const { prepareUserTypeToSave } = require("../../Helpers/userTypeKit");
const ProductModel = require("../Models/Product");


/**
 *
 * @param {id to find the user by} id
 * @returns {potential user if found}
 */
 const getProductById = async (id) => {
    const product = await ProductModel.findById(id)
    return product
};

/**
 *
 * 
 * @returns {count of products if found}
 */
 const getCount = async () => {
    const products = await ProductModel.find().count()
    return products
};


/**
 *
 * 
 * @returns {count of products if found}
 */
 const DeleteProduct = async (id) => {
    const products = await ProductModel.findOneAndDelete({_id:id})
    return products
};


/**
 * 
 * 
 * @param { find product by } by custom id 
 * @returns { single product if found }
 */
 const getAllProducts = async (perPage,currentPage) =>{
    const product = await ProductModel.find().skip(parseInt(perPage) * (parseInt(currentPage) - 1)).limit(parseInt(perPage))
    return product
}

/**
 * 
 * 
 * @param { find product by } by custom id 
 * @returns { single product if found }
 */
const getProductByCustomId = async (id) =>{
    const product = await ProductModel.findOne({id})
    return product
}

/**
 * 
 * 
 * @param { update product by } by custom id 
 * @returns { single product if found }
 */
 const updateProductById = async (id,data) =>{
    return await ProductModel.updateOne({_id:id},data)
}



/**
 *
 * @param {body} userBody
 * @returns { saved product }
 */
 const createProduct = async (body) => {
    return await ProductModel(body).save()
};


module.exports = {
    getProductById,
    createProduct,
    getProductByCustomId,
    updateProductById,
    getAllProducts,
    getCount,
    DeleteProduct
}