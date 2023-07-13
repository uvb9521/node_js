const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "node-complete",
  password: "root",
  user: "root",
});

module.exports = pool.promise();
