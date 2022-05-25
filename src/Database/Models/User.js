const mongoose = require("mongoose");


const User = new mongoose.Schema({
        fullName: {
            type: String,
            trim: true,
            required: true,
        },
        username:{
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        token:{
            type: String
        },
        lastLogin:{
            type: Date,
        },
    },
    {
        timestamps: true,
    })


module.exports = mongoose.model("Users", User)
