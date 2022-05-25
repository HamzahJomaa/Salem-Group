const { GeneralErrorStatus } = require("./generalErrorStatus");
const { UserErrorStatus } = require("./userErrorStatus");
const {RoleErrorStatus}=require("./roleErrorStatus")

const ErrorStatus = {
  ...GeneralErrorStatus,
  ...UserErrorStatus,
  ...RoleErrorStatus
};

module.exports = {
    ErrorStatus,
};
