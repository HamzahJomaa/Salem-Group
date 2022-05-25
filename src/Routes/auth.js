const express = require("express");
const router = express.Router();
const { partial } = require("lodash");
const { createUserValidator } = require("../Validation/validator/UserValidator")
const { createUserDataHandler } = require("../DataHandler/UserHandler")
const { createUserByIdPresenter } = require("../Presentation/userPresenter")
const { CreateUser, loginUser } = require("../Controllers/UserController")
const { loginValidator } = require("../Validation/validator/AuthValidator")
const { loginDataHandler } = require("../DataHandler/authHandler")
const { loginSecurity } = require("../Security/authSecurity")
const { loginPresenter } = require("../Presentation/authPresenter")

router.post("/signup",
    createUserValidator,
    createUserDataHandler,
    createUserByIdPresenter,
    partial(CreateUser)
)

router.patch("/signin",
    loginValidator,
    loginDataHandler,
    loginSecurity,
    loginPresenter,
    partial(loginUser)
)


module.exports = router;


