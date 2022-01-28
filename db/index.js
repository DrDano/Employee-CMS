const mysql = require("mysql2");
const { user, pw } = require("../project.config");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: pw,
      database: "corporate",
    },
    console.log("Connected to the corporate database.")
  );

module.exports = db;