const mongoose = require("mongoose")
const PermissionsModel = require("./Permission")

const RoleModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        permissions: PermissionsModel
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Roles", RoleModel)
