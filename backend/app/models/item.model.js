const mongoose = require("mongoose");

const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    name: String,
    description: String,
    cost: String,
    url: String,
  })
);

module.exports = Item;
