const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.item = require("./item.model");
db.order = require("./order.model");
db.admin = require("./admin.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
