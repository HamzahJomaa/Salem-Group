const mongoose = require("mongoose");


const Product = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description:{
            type: String,
            required: true,
        },
        id:{
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true,
    })


module.exports = mongoose.model("Product", Product)
