/**
 * Create Product into the system
 * @returns {SuccessResponseModel<CreateReponseModel>}
 */
 const CreateProduct = (req, res) => {
    return res.status(req.statusCode).json(req.presenterModel);
};


/**
 * Get All Products into the system
 * @returns {SuccessResponseModel<CreateReponseModel>}
 */
 const GetAllProducts = (req, res) => {
    return res.status(req.statusCode).json(req.presenterModel);
};

/**
 * Update Product into the system
 * @returns {SuccessResponseModel<CreateReponseModel>}
 */
 const UpdateProduct = (req, res) => {
    return res.status(req.statusCode).json(req.presenterModel);
};



module.exports = {
    CreateProduct,
    UpdateProduct,
    GetAllProducts
};
