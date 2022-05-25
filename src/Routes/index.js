const AuthRoutes = require("./auth")
const ProductRoutes = require("./product")

const router = (app) => {
    app.use("/products", ProductRoutes)
    app.use("/auth", AuthRoutes)

};

module.exports = router;
