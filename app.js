const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHBS = require("express-handlebars");
const errorController = require("./controllers/error");
// const db = require("./util/database");
const User = require("./models/user");
const adminRouter = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const mongoConnect = require("./util/database");
const app = express();
// const Product = require("./models/product");
// const Cart = require("./models/cart");
// const CartItem = require("./models/cart-item");
// const Order = require("./models/order");
// const OrderItem = require("./models/order-item");
// const sequelize = require("./util/database");
// app.engine(
//   "hbs",
//   expressHBS({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );

app.set("view engine", "ejs");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
app.use(shopRoutes);

app.use(errorController.get404);

// db.execute("SELECT * FROM products")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

//user created a product

// Product.belongsTo(User, { constrains: true, onDelete: "CASCADE" });

// //optional revers Product user relation

// User.hasMany(Product);

// User.hasOne(Cart);
// //optional

// Cart.belongsTo(User);

// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });

// Order.belongsTo(User);

// // optional the reverse relation

// User.hasMany(Order);

// Order.belongsToMany(Product, { through: OrderItem });

// //optional the revers relation

// Product.belongsToMany(Order, { through: OrderItem });

// sequelize
//   // .sync({ force: true })
//   .sync()
//   .then((result) => {
//     return User.findByPk(1);
//     // console.log(result);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "Max", email: "test@test.com" });
//     }
//     return user;
//   })
//   .then((user) => {
//     // console.log(user);
//     return user.createCart();
//   })
//   .then((cart) => {
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
