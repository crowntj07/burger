let mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	  host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
	  user: "root",
	  password: "el5zpt5ml0d38qem",
	  database: "burgers_db"
	});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//
module.exports = connection;