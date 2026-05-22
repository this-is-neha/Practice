const express = require("express");
const authRoute = express.Router();
const authCtrl = require("./auth.controller");

authRoute.post("/register",  authCtrl.register);
authRoute.get("/activate/:token", authCtrl.activate);
authRoute.post("/login", authCtrl.login);
authRoute.get("/me", authCtrl.getLoggedIn);
authRoute.get("/all", authCtrl.getAllUsers);
authRoute.get('/isloggedIn', authCtrl.loginCheck)

module.exports = authRoute;