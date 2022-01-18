const db = require("../models");
const csv = require("csv-express");
const Item = db.item;
const Order = db.order;
const Admin = db.admin;
const User = db.user;

// get all items
exports.allAccess = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Item.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
  console.log(condition);
};

// get last order
exports.lastOrder = (req, res) => {
  Order.find()
    .limit(1)
    .sort({ $natural: -1 })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// to order item
exports.orderItem = (req, res) => {
  const order = new Order({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    photo: req.body.photo,
    date: req.body.date,
    time: req.body.time,
    item: req.body.item,
    cost: req.body.cost,
  });
  order
    .save(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// find item by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Item.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// add item to db
exports.addItem = (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    url: req.body.url,
  });
  item
    .save(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// remove item from db
exports.removeItem = (req, res) => {
  const id = req.params.id;
  Item.findOneAndDelete({ _id: id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found item with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving item with id=" + id });
    });
};

// update item by id
exports.updateItem = (req, res) => {
  const id = req.params.id;
  Item.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found item with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating item with id=" + id });
    });
};

// export data
exports.exportData = (req, res) => {
  Item.find()
    .lean()
    .exec({}, function (err, item) {
      if (err) res.send(err);
      res.send(item);
    });
};

// get all users
exports.getAllUsers = (req, res) => {
  User.find()
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found item with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating item with id=" + id });
    });
};

// get user by id
exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found item with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating item with id=" + id });
    });
};

// remove user from db
exports.removeUser = (req, res) => {
  const id = req.params.id;
  User.findOneAndDelete({ _id: id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found item with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving item with id=" + id });
    });
};
