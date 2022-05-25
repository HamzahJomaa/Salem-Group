const { UserTypes } = require("../constants/general/general");

const prepareUserTypeToSave = (value) => {
    let types = UserTypes.map((type) => { return type.value })
    let typeKeys = UserTypes.map((type) => { return type.key })
    if (types.includes(value)) {
        return value;
    } else if(typeKeys.includes(parseInt(value))) {
        return UserTypes.find((type) => { return type.key === parseInt(value) })?.value ?? ""
    } else {
        return "";
    }
  };

  module.exports = {
    prepareUserTypeToSave,
  };
