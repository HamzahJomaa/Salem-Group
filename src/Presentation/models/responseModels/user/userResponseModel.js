class UserResponseModel {
    fullName = undefined
    username = undefined
    email = undefined
    password = undefined
    token = undefined
    lastLogin = undefined


    constructor(values) {
        this.fullName = values?.fullName || ""
        this.username = values?.username || ""
        this.email = values?.email || ""
        this.password = values?.password || ""
        this.token = values?.token || ""
        this.lastLogin = values?.lastLogin || ""
    }
}

module.exports = {UserResponseModel}
