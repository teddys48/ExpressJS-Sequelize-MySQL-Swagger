const service = require("../service/ticket.service");

const create = async (req, res) => {
  let response = await service.create(req);
  res.json(response);
};

const done = async (req, res) => {
  let response = await service.done(req);
  res.json(response);
};

const all = async (req, res) => {
  let response = await service.all(req);
  res.json(response);
};
module.exports = { create, all, done };
