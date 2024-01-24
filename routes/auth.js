const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const authController = require("../controllers/auth");
const user = require("../models/user");

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("please enter a valid mail")
      .custom((value, { req }) => {
        return user
          .findOne({ email: value })
          .then((userDoc) => {
            if (userDoc) {
              return Promise.reject("E-mail already exists");
            }
          })
          .catch((err) => console.log(err));
      })
      .normalizeEmail()
      .trim(),
    body(
      "password",
      "Please enter password with only number and text at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password have to match");
        }
        return true;
      })
      .trim(),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);
router.get("/reset", authController.getReset);
router.post("/reset", authController.postReset);
router.get("/reset/:token", authController.getNewPassword);
router.post("/new-password", authController.postNewPassword);

module.exports = router;
