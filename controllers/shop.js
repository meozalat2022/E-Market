// const products = [];

const { render } = require("pug");
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  // const products = adminData.products;
  Product.fetchAll()
    .then(([row, filedData]) => {
      res.render("shop/product-list", {
        prods: row,
        pageTitle: "All products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.getProduct = (req, res, next) => {
//   const prodId = req.params.productId;

//   Product.findById(prodId, (product) => {
//     res.render("shop/product-details", {
//       pageTitle: product.title,
//       product: product,
//       path: "/products",
//     });
//   });
// };

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([product]) => {
      res.render("shop/product-details", {
        pageTitle: product.title,
        product: product[0],
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

// exports.getIndex = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("shop/index", {
//       prods: products,
//       pageTitle: "Shop",
//       path: "/",
//     });
//   });
// };

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, filedData]) => {
      res.render("shop/index", {
        prods: rows,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData)
          cartProducts.push({ productData: product, qty: cartProductData.qty });
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.postDeleteCartProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  });
};

exports.getOrder = (req, res, next) => {
  res.render("shop/order", {
    path: "/order",
    pageTitle: "Your Order",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
