const UserSuccessStatus = {
  LOGIN_SUCCESSFUL: { code: 200, message: "User Logged In Successfully" },
  LOGOUT_SUCCESSFUL: { code: 200, message: "User Logged Out Successfully" },
  PASSWORD_UPDATED_SUCCESSFULLY: { code: 203, message: "Password Updated Successfully" },
  FORGOT_PASSWORD_SUCCESSFUL: { code: 200, message: "Successfully sent an email" },
};

module.exports = {
  UserSuccessStatus,
};
