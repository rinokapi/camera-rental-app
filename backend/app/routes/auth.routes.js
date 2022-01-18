const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // user register
  app.post("/api/auth/signup", controller.signup);

  //user login
  app.post("/api/auth/signin", controller.signin);

  // admin register
  app.post("/api/auth/admin/signup", controller.adminSignup);

  //admin login
  app.post("/api/auth/admin/signin", controller.adminSignin);
};
