const mongoose = require("mongoose");
require("dotenv").config();

console.log("mongoURL:", process.env.mongoURL);
const connection = mongoose.connect(process.env.mongoURL);

module.exports = connection;