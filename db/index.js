const mysql = require("mysql2");
const { user, pw } = require("../project.config");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: pw,
    },
    console.log("Connected to the corporate database.")
  );

  module.exports = db;