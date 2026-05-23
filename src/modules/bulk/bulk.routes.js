const express = require("express");
const bulkRoute = express.Router();
const BulkUploadController=require( './bulkUpload.controller');
const  socketMiddleware =require( '../../middleware/socketmiddleware');
const multer =require('multer');
const upload = multer({ storage: multer.memoryStorage() });


bulkRoute.post(
  '/upload', 
  socketMiddleware, 
  upload.single('file'), 
 BulkUploadController.uploadBulkAppointments
);

module.exports=bulkRoute