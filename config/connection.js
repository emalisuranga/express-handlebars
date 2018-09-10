var mysql = require("mysql");

function connectionDatabase() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "virtusawork"
  });

  connection.connect(function(err) {
    if (!err) {
      console.log("Database Connceted");
    } else {
      console.log("Error Database Connection");
    }
  });
  return connection;
}

module.exports = connectionDatabase();
