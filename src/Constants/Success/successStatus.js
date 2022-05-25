const {GeneralSuccessStatus} = require("./generalSuccessStatus");
const {UserSuccessStatus} = require("./userSuccessStatus");
const {RoleSuccessStatus} = require("./roleSuccessStatus");

const SuccessStatus = {
    ...GeneralSuccessStatus,
    ...UserSuccessStatus,
    ...RoleSuccessStatus
};

module.exports = {
    SuccessStatus,
};
