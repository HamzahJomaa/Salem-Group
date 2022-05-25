class LoginRequestModel {
    user = undefined
    password = undefined
    constructor(values) {
        this.user = values.user || ""
        this.password = values.password || ""
    }
}

module.exports = {
    LoginRequestModel,
};
