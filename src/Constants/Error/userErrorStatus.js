const UserErrorStatus = {
  DOES_NOT_EXIST: { code: 404, message: "User doesn't exist" },
  PRODUCT_DOES_NOT_EXIST: { code: 404, message: "Product doesn't exist" },
  EMAIL_OR_USERNAME_IS_INCORRECT: { code: 403, message: "Email or Username is incorrect" },
  USER_EXIST:{code:400,message:"Email already exists"},
  USERNAME_EXIST:{code:400,message:"Username already exists"},
  PHONE_NUMBER_EXIST:{code:400,message:"Phone Number already exists"},
  WRONG_PASSWORD: { code: 401, message: "Wrong Password" },
};

module.exports = {
  UserErrorStatus,
};
