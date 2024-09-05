const database = require("../config/db");
const { DataTypes } = require("sequelize");
const Ticket = require("./ticket.model");

const WorkOrder = database.define(
  "work_orders",
  {
    code: {
      type: DataTypes.STRING,
    },
    technician_name: {
      type: DataTypes.STRING,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      references: "ticket",
      key: "id",
    },
    status: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.STRING,
    },
    created_by: {
      type: DataTypes.STRING,
    },
    updated_at: {
      type: DataTypes.STRING,
    },
    updated_by: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

// WorkOrder.hasOne(Ticket);

module.exports = WorkOrder;
