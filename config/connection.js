// // Dependencies
// var mysql = require("mysql");

// var connection;

// // Connect with JawsDB database on our Heroku app
// // 	If not found, then run locally
// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	connection = mysql.createConnection({
// 	  host: "192.168.99.100",
// 	  user: "root",
// 	  password: "docker",
// 	  database: "burgers_db"
// 	});
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export our MySQL connection
// module.exports = connection;



// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "192.168.99.100",
  user: "root",
  password: "docker",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;