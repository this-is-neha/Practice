const express = require("express");
const serviceRoute = express.Router();
const serviceCtrl = require("./service.controller");
const adminCheck =require('../../middleware/auth.middleware')
serviceRoute.post("/",  adminCheck,serviceCtrl.create);
serviceRoute.get("/", serviceCtrl.listAll);
serviceRoute.patch("/:id", adminCheck,serviceCtrl.update);
serviceRoute.delete("/:id", adminCheck,serviceCtrl.deleteService);
serviceRoute.get("/:id", serviceCtrl.getById);

module.exports = serviceRoute;