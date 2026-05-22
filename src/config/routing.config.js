const express =require("express")
const authRouter = require('../modules/auth/auth.routing')
const serviceRouter =require('../modules/Salonservices/service.routing')
const appintmentRoute=require('../modules/appointment/appointment.routing')
const appointmentRouting = require("../modules/appointment/appointment.routing")
const mainRoute=express.Router()
mainRoute.use('/auth',authRouter)
mainRoute.use('/services',serviceRouter)
mainRoute.use('/appointment',appointmentRouting)

module.exports=mainRoute