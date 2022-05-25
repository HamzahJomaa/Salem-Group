const GeneralErrorStatus = {
  BAD_REQUEST: { code: 400, message: "Bad Request" },
  NOT_AUTHORIZED: { code: 401, message: "Not Authorized" },
  NOT_FOUND: { code: 404, message: "Not Found" },
  SERVER_DOWN: { code: 500, message: "Server Down" },
  OUT_DATED: { code: 600, message: "Out Dated" },
};

module.exports = {
  GeneralErrorStatus,
};
