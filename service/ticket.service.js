const repository = require("../repository/ticket.repository");
const build = require("../helper/buildresponse");
const moment = require("moment");

const create = async (req) => {
  let response;
  try {
    let { name, description, type, helpdesk_name } = req.body;

    let dataCreate = {
      code: "TICKET" + Date.now(),
      name: name,
      description: description,
      type: type,
      helpdesk_name: helpdesk_name,
      status: "OPEN",
    };

    await repository.create(dataCreate);

    response = build.buildResponse(0, "success", dataCreate);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

const done = async (req) => {
  let response;
  try {
    let { id } = req.body;

    let ticket = await repository.checkByID(id);
    if (!ticket) {
      response = build.buildResponse(400, "ticket not found", null);
      return response;
    }

    let dataUpdate = {
      status: "DONE",
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      updated_by: req.id,
    };

    await repository.update(ticket.id, dataUpdate);

    response = build.buildResponse(0, "success", ticket);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

const all = async (req) => {
  let response;
  try {
    let ticket = await repository.all();

    response = build.buildResponse(0, "success", ticket);
  } catch (error) {
    response = build.buildResponse(500, error.message, null);
  }

  return response;
};

module.exports = { create, done, all };
