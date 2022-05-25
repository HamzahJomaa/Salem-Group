const bcrypt = require("bcryptjs");

/**
 *
 * @param {Password to Validate} password
 * @param {Saved User to check validate the password on} saveUser
 * @returns {If the passwords match or not}
 */
const isPasswordEncryptionValid = async (password, userPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const passMatch = await bcrypt.compare(password, userPassword);
    const passMatchHash = await bcrypt.compare(hashedPassword, userPassword);
    return passMatch || passMatchHash;
};

module.exports = {
    isPasswordEncryptionValid,
};
