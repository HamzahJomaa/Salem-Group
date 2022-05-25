const mongoose = require("mongoose");

/**
 * Prepares connection to the database
 */

const prepareDbConnection = () => {
    console.log(`Connecting to DB: ${process.env.DB_NAME}`);
    console.log(`Connection URL: ${process.env.DB_URL}`);
    mongoose.connect(
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        },
        (err) => {
            if (err) return console.log(err);
            console.log("Connection to DB Successful");
        }
    );
};

module.exports = {
    prepareDbConnection,
};
