/**
 *
 * @param {Model to clean up} model
 * @returns {Cleaned up model from null values}
 */
const cleanUpModel = (model) => {
  const modelJSONString = JSON.stringify(model);
  return JSON.parse(modelJSONString, (key, value) => {
    if (value !== null) return value;
  });
};

/**
 *
 * @param {Model to clean up} model
 * @returns {remove null keys }
 */
const removeFalsyKeys = (model) => {
  let newObj = {};
  Object.keys(model).forEach((prop) => {
    if (model[prop]) { newObj[prop] = model[prop]; }
  });
  return newObj;
};

module.exports = {
  cleanUpModel,
  removeFalsyKeys
};
