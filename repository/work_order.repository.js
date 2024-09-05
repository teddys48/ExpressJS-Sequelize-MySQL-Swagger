const WorkOrder = require("../model/work_oder.model");
const Ticket = require("../model/ticket.model");

const checkByCode = async (code) => {
  return await WorkOrder.findOne({ where: { code: code } });
};

const checkByID = async (id) => {
  return await WorkOrder.findOne({ where: { id: id } });
};

const checkByIDTicket = async (id) => {
  return await Ticket.findOne({ where: { id: id } });
};

const create = async (data) => {
  return await WorkOrder.create(data);
};

const update = async (id, data) => {
  return await WorkOrder.update(data, { where: { id: id } });
};

const updateTicket = async (id, data) => {
  return await Ticket.update(data, { where: { id: id } });
};

const all = async () => {
  return await WorkOrder.findAll();
};

module.exports = { checkByCode, create, update, all, checkByID, updateTicket, checkByIDTicket };
