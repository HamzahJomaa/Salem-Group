const express = require("express");
const router = express.Router();
const { createProductValidator,updateProductValidator, ProductPaginationValidator, DeleteProductValidator } = require("../Validation/validator/ProductValidator")
const { createProductDataHandler, updateProductDataHandler, ProductPaginationDataHandler, DeleteProductByIdDataHandler } = require("../DataHandler/ProductHandler")
const { createProductPresenter , updateProductPresenter, deleteProductPresenter} = require("../Presentation/productPresenter")
const { paginationPresenter } = require("../Presentation/paginationPresenter")

const { CreateProduct,UpdateProduct,GetAllProducts } = require("../Controllers/ProductController");
const { partial } = require("lodash");
const { tokenSecurity } = require("../Security/token")

router.post("/add",
    tokenSecurity,
    createProductValidator,
    createProductDataHandler,
    createProductPresenter,
    partial(CreateProduct)
)


router.patch("/update",
    tokenSecurity,
    updateProductValidator,
    updateProductDataHandler,
    updateProductPresenter,
    partial(UpdateProduct)
)

router.get("/:perPage/:currentPage",
    tokenSecurity,
    ProductPaginationValidator,
    ProductPaginationDataHandler,
    paginationPresenter,
    partial(GetAllProducts)
)

router.delete("/:id",
    tokenSecurity,
    DeleteProductValidator,
    DeleteProductByIdDataHandler,
    deleteProductPresenter,
    partial(GetAllProducts)
)



module.exports = router;


