const repository = require("../repository/user.repository");
const build = require("../helper/buildresponse");
const bcrypt = require("bcrypt");
const jwt = require("../helper/jwt");

const login = async (req) => {
  let response;
  try {
    let { username, password } = req.body;

    let users = await repository.checkByUsername(username);

    let checkPassword = await bcrypt.compare(password, users.password);
    if (!checkPassword) {
      response = build.buildResponse(500, "Password salah", null);
      return response;
    }

    let token = await jwt.generateToken({ id: users.id });

    let responseData = {
      token: token,
    };

    response = build.buildResponse(0, "success", responseData);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

module.exports = { login };
