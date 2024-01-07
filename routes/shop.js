const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");
// const adminData = require("./admin");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);
router.get("/products/:productId", shopController.getProduct);

router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.post("/cart-delete-item", shopController.postDeleteCartProduct);
router.get("/order", shopController.getOrder);
router.get("/checkout", shopController.getCheckout);
module.exports = router;
