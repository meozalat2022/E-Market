const User = require("../models/user");
exports.getAuth = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie").split(";")[2].split("=")[1] === "true";
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Log In",
    isAuthenticated: false,
  });
};

exports.postAuth = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
