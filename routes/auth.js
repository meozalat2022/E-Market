const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

router.get("/login", authController.getAuth);
router.post("/login", authController.postAuth);

module.exports = router;
