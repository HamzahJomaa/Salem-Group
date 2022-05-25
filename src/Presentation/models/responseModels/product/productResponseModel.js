class ProductResponseModel {
    id = undefined
    name = undefined
    description = undefined


    constructor(values) {
        this.id = values?.id || ""
        this.name = values?.name || ""
        this.description = values?.description || ""
    }
}

module.exports = { ProductResponseModel }
