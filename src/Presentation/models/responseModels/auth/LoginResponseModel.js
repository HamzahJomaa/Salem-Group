const {UserResponseModel} = require("../user/userResponseModel");

class LoginResponseModel {
    token = undefined
    user = undefined

    constructor(values) {
        this.token = values.token
        this.user = new UserResponseModel(values.user)
    }

    setToken(token) {
        this.token = token;
    }
}

module.exports = {
    LoginResponseModel,
};
