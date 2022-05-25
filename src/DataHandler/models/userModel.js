class InfoRequestModel {
    fullName = undefined
    username = undefined
    email = undefined
    password = undefined


    constructor(values) {
        this.fullName = values?.fullName || ""
        this.username = values?.username || ""
        this.email = values?.email || ""
        this.password = values?.password || ""
    }
}

module.exports = {InfoRequestModel}
