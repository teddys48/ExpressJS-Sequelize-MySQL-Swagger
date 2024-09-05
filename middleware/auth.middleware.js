const build = require("../helper/buildresponse");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authJwtMiddleware = async (req, res, next) => {
  let authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.json(build.buildResponse(400, "header not found", null));
  }

  let token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.json(build.buildResponse(400, "token not found", null));
  }

  await jwt.verify(token, process.env.TOKEN_SECRET, "", (err, data) => {
    if (err) {
      return res.json(build.buildResponse(400, err.message, null));
    }

    req.id = data.id;
    next();
  });
};

module.exports = { authJwtMiddleware };
