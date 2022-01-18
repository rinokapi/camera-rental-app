const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    photo: String,
    date: String,
    time: String,
    item: String,
    cost: Number,
  })
);

module.exports = Order;
