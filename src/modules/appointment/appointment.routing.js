
const express = require("express");
const appointmentRoute = express.Router();

const appointmentCtrl = require("./appointment.controller");
const authMiddleware = require("../../middleware/user.middleware");
const roleCheck = require("../../middleware/role.middleware"); 
appointmentRoute.post("/",authMiddleware,appointmentCtrl.create);
appointmentRoute.get("/",authMiddleware,appointmentCtrl.listAll);
appointmentRoute.patch("/:id",authMiddleware,appointmentCtrl.update);
appointmentRoute.delete("/:id",authMiddleware,appointmentCtrl.deleteAppointment);
appointmentRoute.get("/admin/all", authMiddleware,roleCheck("admin"),appointmentCtrl.listAll);
appointmentRoute.get( "/customer/:customerId",authMiddleware,appointmentCtrl.getByCustomer);

module.exports = appointmentRoute;