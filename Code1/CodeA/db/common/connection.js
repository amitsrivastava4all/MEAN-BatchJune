const mongoose = require("mongoose");
const dbConfig = require("./config");
mongoose.connect(dbConfig.dbURL);
module.exports = mongoose;
