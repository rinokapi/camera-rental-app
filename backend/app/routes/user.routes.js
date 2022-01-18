const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // get all items
  app.get("/api/test/all", controller.allAccess);

  // get last order
  app.get("/api/test/print", controller.lastOrder);

  // to order item
  app.post("/api/test/order", controller.orderItem);

  // find item by id
  app.get("/api/test/all/:id", controller.findOne);

  // add item to db
  app.post("/api/test/admin/add", controller.addItem);

  // remove item from db
  app.delete("/api/test/admin/delete/:id", controller.removeItem);

  // update the item by id
  app.put("/api/test/admin/update/:id", controller.updateItem);

  // export data
  app.get("/api/test/admin/export", controller.exportData);

  // get all users
  app.get("/api/test/admin/users", controller.getAllUsers);

  // get user by id
  app.get("/api/test/admin/users/:id", controller.getUserById);

  // delete user by id
  app.delete("/api/test/admin/user/delete/:id", controller.removeUser);
};
