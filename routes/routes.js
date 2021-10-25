const express = require("express");
const sessions = require("./sessions");
const debit = require("./debit");
const billing = require("./billing");

const routes = express.Router();

routes.use("/api", sessions);
routes.use("/api", debit);
routes.use("/api", billing);

module.exports = routes;
