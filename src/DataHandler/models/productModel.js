class ProductRequestModel {
    name = undefined
    description = undefined


    constructor(values) {
        this.name = values?.name || ""
        this.description = values?.description || ""
    }
}

module.exports = { ProductRequestModel }
