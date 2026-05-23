// const http = require("http");
// const app = require("./src/config/express.config");

// const port = process.env.PORT || 9006;  
// const server = http.createServer(app);

// server.listen(port, (err) => {
//     if (!err) {
//         console.log(`Server is running successfully on port ${port}`);
//         console.log("I am Neha");
//         console.log("Press CTRL C to disconnect");
//     }
// });


// Initialize Socket.io
require("dotenv").config();
require("./src/config/db.config");
const socketConfig = require("./src/config/socket");
require("./src/modules/bulk/appointment.worker");
const http = require("http");
const app = require("./src/config/express.config");

const port = process.env.PORT || 9006;

const server = http.createServer(app);

socketConfig.init(server);

server.listen(port, () => {
  console.log(`Server is running successfully on port ${port}`);
  console.log("I am Neha");
});