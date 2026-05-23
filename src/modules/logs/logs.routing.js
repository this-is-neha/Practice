const express = require('express');
const router = express.Router();
const logController = require('./logs.controller');
const auth = require('../../middleware/auth.middleware');

router.get('/', auth, logController.getAppointmentLogs);
module.exports = router;