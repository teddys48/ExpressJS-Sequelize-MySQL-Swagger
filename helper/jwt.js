const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = async (payload) => {
  let signOptions = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, process.env.TOKEN_SECRET, signOptions);
};

module.exports = { generateToken };
