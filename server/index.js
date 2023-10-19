const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dbConnection = require("../server/config/dataBaseConfig")
const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRoutes")
const socketHandler = require("./socketConnection/socketConnection");

require("dotenv").config();
const PORT = process.env.PORT
const server = app.listen(PORT, "localhost", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const io = new Server(server, {
  cors: true,
});

// Call the socketHandler function and pass the `io` object
socketHandler(io);

const Localhost = process.env.LOCALHOST
const WebHostName = process.env.WEBHOSTNAME
const corsOptions = {
  origin:Localhost || WebHostName ,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/user-route", userRoute);
app.use("/api/admin-route", adminRoute);

// Disable strictQuery option
dbConnection
