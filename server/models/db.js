const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config()

module.exports = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'dmswjddldldl12',
    database : 'practice',
    port : '3307'
})