// db.js

const mongoose = require("mongoose");
require("dotenv").config();
const URL = "mongodb+srv://triangle4business:AiGFvf3UawBWqzma@cluster0.n3ilqah.mongodb.net/?retryWrites=true&w=majority"


mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Set your desired server selection timeout here
  })
  .then(() => {
    console.log("Connected to MongoDB");  
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose.connection;
