class PaginationModel {
    perPage = undefined
    currentPage = undefined
    constructor(values) {
        this.perPage = parseInt(values?.perPage) || ""
        this.currentPage = parseInt(values?.currentPage) || ""
    }
}

module.exports = {
    PaginationModel,
};
