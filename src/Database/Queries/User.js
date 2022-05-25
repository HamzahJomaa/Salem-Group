const { isEmpty } = require("lodash");
const { prepareUserTypeToSave } = require("../../Helpers/userTypeKit");
const UserModel = require("../Models/User");

/**
 *
 * @param {email to find the user by} email
 * @returns {potential user if found}
 */
const getUserByEmail = async (email) => {
    const user = await UserModel.findOne({
        "email": email,
    })

    return user
};

/**
 *
 * @param {username to find the user by} username
 * @returns {potential user if found}
 */
const getUserByUsername = async (username) => {
    const user = await UserModel.findOne({
        "username": username,
    })

    return user
};

/**
 *
 * @param {phone to find the user by} phone
 * @returns {potential user if found}
 */
const getUserByPhoneNumber = async (phone) => {
    const user = await UserModel.findOne({
        "phone": phone
    })
    return user
}
/**
 *
 * @param {id to find the user by} id
 * @returns {potential user if found}
 */
const getUserById = async (id) => {
    return await UserModel.findOne({
        _id: id,
    })
};

/**
 *
 * @returns {potential users if found}
 */
const getAllUsersPaginated = async (req) => {
    const {limit, page, type} = req.query;
    const query = {}
    if (type) {
        let typeToQuery = prepareUserTypeToSave(type);
        console.log("This is",typeToQuery)
        if(!isEmpty(typeToQuery)){
            query["info.type"] = typeToQuery
        }
    }
    query["info.isActive"] = true
    const paginationOptions = {
        limit: parseInt(limit) || 5,
        page: parseInt(page) || 1,
        populate: [
            {
                path: "info.role",
            },
            {
                path: "info.language",
            }
        ],
        sort: {createdAt: -1},
        lean: true,
    }
    return await UserModel.paginate(query, paginationOptions)
};

/**
 *
 * @param {id to find the user by} id
 * @returns { updated user }
 */
const updateUserInfoById = async (id, body) => {
    const query = {}
    if (body.info?.general?.fullName) {
        query["info.general.fullName"] = body.info.general.fullName
    }
    if (body.info?.general?.email) {
        query["info.general.email"] = body.info.general.email
    }
    if (body.info?.general?.phone) {
        query["info.general.phone"] = body.info.general.phone
    }
    if (body.info?.general?.country) {
        query["info.general.country"] = body.info.general.country
    }
    if (body.info?.general?.address) {
        query["info.general.address"] = body.info.general.address
    }
    if (body.info?.general?.gender) {
        query["info.general.gender"] = body.info.general.gender
    }
    if (body.info?.general?.accountVerification) {
        query["info.general.accountVerification"] = body.info.general.accountVerification
    }
    if (body.info?.general?.type) {
        query["info.general.type"] = body.info.general.type
    }
    if (body.info?.general?.language) {
        query["info.general.language"] = body.info.general.language
    }
    if (body.info?.general?.role) {
        query["info.general.role"] = body.info.general.role
    }

    return await UserModel.updateOne(
        {_id: id},
        {...query}
    )
}

/**
 *
 * @param {id to find the user by} id
 * @param {newPassword} password
 * @returns { updated user }
 */
const changeUserPassword = async (id, newPassword) => {
    return await UserModel.updateOne(
        {
            _id: id,
        },
        {
            "info.password": newPassword
        }
    )
};

/**
 *
 * @param {body} userBody
 * @returns { saved user }
 */
const createUser = async (body) => {
    return await UserModel(body).save()
};

/**
 *
 * @param {id to find the user by} id
 * @returns { updated user }
 */
const updateSavedUserById = async (id, fieldsIds) => {
    const query = {}
    if (fieldsIds.notificationSettingsId) {
        query["notificationSettings"] = fieldsIds.notificationSettingsId
    }
    if (fieldsIds.contactId) {
        query["info.contact"] = fieldsIds.contactId
    }
    if (fieldsIds.bankId) {
        query["info.bank"] = fieldsIds.bankId
    }
    if (fieldsIds.roleId) {
        query["info.role"] = fieldsIds.roleId
    }
    return await UserModel.updateOne(
        {_id: id},
        {...query}
    )
}

/**
 *
 * @param {id to find the user by} id
 * @param {newPassword} password
 * @returns { updated user }
 */
const updateUserRole = async (id, role) => {
    return await UserModel.updateOne(
        {
            _id: id,
        },
        {
            "info.role": role
        }
    )
};

const deleteUserById = async (id) => {
    return await UserModel.updateOne(
        {
            _id: id,
        },
        {
            "info.isActive":false
        }
    )
};

module.exports = {
    getUserByEmail,
    getUserByUsername,
    getUserByPhoneNumber,
    getUserById,
    getAllUsersPaginated,
    updateUserInfoById,
    changeUserPassword,
    createUser,
    updateSavedUserById,
    updateUserRole,
    deleteUserById
}
