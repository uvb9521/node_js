const sql = require("mysql2");

const pool = sql.createPool({
  user: "root",
  password: "root",
  database: "node-complete",
  host: "localhost",
});
module.exports = pool.promise();
