// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "0123162554",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete-db", "root", "0123162554", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
