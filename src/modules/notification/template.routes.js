const express = require("express");
const router = express.Router();
const { getTemplates } = require("./template.controller");
const  authenticate  = require("../../middleware/auth.middleware"); 

router.get("/templates", authenticate, getTemplates);

module.exports = router;