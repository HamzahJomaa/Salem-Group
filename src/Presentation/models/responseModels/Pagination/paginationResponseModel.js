class PaginationResponseModel {
    docs=undefined
    totalDocs = undefined
    totalPages = undefined
    page = undefined
    

    constructor(values) {
        this.docs=values.docs || []
        this.totalDocs = values.totalDocs || -1
        this.totalPages = values?.totalPages || -1
        this.page = values?.page || -1
    }
}

module.exports = {
    PaginationResponseModel,
};