const Ticket = require("../model/ticket.model");

const checkByCode = async (code) => {
  return await Ticket.findOne({ where: { code: code } });
};

const checkByID = async (id) => {
  return await Ticket.findOne({ where: { id: id } });
};

const create = async (data) => {
  return await Ticket.create(data);
};

const update = async (id, data) => {
  return await Ticket.update(data, { where: { id: id } });
};

const all = async () => {
  return await Ticket.findAll();
};

module.exports = { checkByCode, create, update, all, checkByID };
