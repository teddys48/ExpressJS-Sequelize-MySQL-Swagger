const Users = require("../model/user.model");

const checkByUsername = async (username) => {
  return await Users.findOne({ where: { username: username } });
};

module.exports = { checkByUsername };
