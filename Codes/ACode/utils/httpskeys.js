const fs = require("fs");
const path = require("path");
const pathConfig = require("../utils/config");
const httpOptions = {
  cert:fs.readFileSync(path.join(pathConfig.HTTPSBASEPATH,"/cert.pem")),
  key:fs.readFileSync(path.join(pathConfig.HTTPSBASEPATH,"/key.pem"))
}
module.exports = httpOptions;
