const service = require("../service/user.service");

const login = async (req, res) => {
  let response = await service.login(req);
  res.json(response);
};

module.exports = { login };
