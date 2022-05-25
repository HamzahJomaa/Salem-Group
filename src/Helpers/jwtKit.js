const jwt = require("jsonwebtoken");

const prepareJWTPayload = (user) => {
  return {
    user: {
      id: user.id,
    },
  };
};

const generateJWT = (user) => {
  const JWT_SECRET = process.env.JWT_SECRET || "template_design";
  const jwtData = prepareJWTPayload(user);
  jwtData.expiry = new Date().getTime() + 3600 * 24;
  const jsonToken = jwt.sign(jwtData, JWT_SECRET);
  return jsonToken;
};

const jwtUserEncryption = (user) => {
  const JWT_SECRET = process.env.JWT_SECRET || "template_design";
  const payload = { user };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

module.exports = {
  generateJWT,
  jwtUserEncryption,
};
