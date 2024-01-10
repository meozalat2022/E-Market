// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "0123162554",
// });

// module.exports = pool.promise();

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete-db", "root", "0123162554", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://zalatdodo:0123162554@cluster0.0fyw2ou.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
