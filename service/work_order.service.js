const repository = require("../repository/work_order.repository");
const build = require("../helper/buildresponse");
const moment = require("moment");

const create = async (req) => {
  let response;
  try {
    let { ticket_id } = req.body;

    let ticket = await repository.checkByIDTicket(ticket_id);
    if (!ticket) {
      response = build.buildResponse(400, "ticket not found", null);
      return response;
    }

    let dataCreate = {
      code: "WO" + Date.now(),
      ticket_id: ticket_id,
      status: "OPEN",
    };

    await repository.create(dataCreate);

    let dataUpdateTicket = {
      status: "ON PROGRESS",
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      updated_by: req.id,
    };

    await repository.updateTicket(ticket.id, dataUpdateTicket);

    response = build.buildResponse(0, "success", dataCreate);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

const accept = async (req) => {
  let response;
  try {
    let { technician_name, code } = req.body;

    let wo = await repository.checkByCode(code);
    if (!wo) {
      response = build.buildResponse(400, "work_oder not found", null);
      return response;
    }

    let dataUpdate = {
      technician_name: technician_name,
      status: "ON PROGRESS",
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      updated_by: req.id,
    };

    await repository.update(wo.id, dataUpdate);

    response = build.buildResponse(0, "success", wo);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

const done = async (req) => {
  let response;
  try {
    let { id } = req.body;

    let wo = await repository.checkByID(id);
    if (!wo) {
      response = build.buildResponse(400, "work_oder not found", null);
      return response;
    }

    let dataUpdate = {
      status: "DONE",
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      updated_by: req.id,
    };

    await repository.update(wo.id, dataUpdate);

    response = build.buildResponse(0, "success", wo);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

const all = async (req) => {
  let response;
  try {
    let wo = await repository.all();

    response = build.buildResponse(0, "success", wo);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

module.exports = { create, done, all, accept };
