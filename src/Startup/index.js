const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const _ = require("lodash");
const routes = require("../routes/index");
const { prepareDbConnection } = require("../Database/Connection");
const app = express();
const port = process.env.PORT || 8080;

const prepareAppStartUp = () => {
    //.env file for DB_URL and port
    require("dotenv").config();

    prepareDbConnection();

    //Using middlewares
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(cors({ origin: "*", methods: "GET, POST, PATCH, DELETE" }));
    app.use(express.json({ limit: "5mb" }));
    app.use(cookieParser());


    //Public folder will be used for public uploads
    app.use("/static", express.static(path.join(__dirname, "public")));

    routes(app);

    app.get("/", (req, res) => {
        res.send("Test Backend")
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

module.exports = {
    prepareAppStartUp,
};
