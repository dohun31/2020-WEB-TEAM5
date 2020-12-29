const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password : 'dmswjddldldl12',
  // password: "tkfka5470",
  password: "123456",
  database: "practice",
  port: "3307",
});
