const mongoose = require("../common/connection");
var Schema = mongoose.Schema;
var UserSchema = new Schema({'userid':String,'password':String});
var UserModel = mongoose.model('usermasters',UserSchema);
module.exports = UserModel;

