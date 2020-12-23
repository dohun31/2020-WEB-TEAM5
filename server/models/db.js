const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
<<<<<<< HEAD
  password : 'dmswjddldldl12',
  //password: "123456",
=======
  password: "tkfka5470",
>>>>>>> cf1b39c (moon)
  database: "practice",
  port: "3307",
});
