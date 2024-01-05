const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHBS = require("express-handlebars");
const errorController = require("./controllers/error");
const app = express();

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

const adminRouter = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
