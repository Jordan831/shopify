var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var mysql = require('mysql')
var connection = mysql.createConnection({
  host:process.env.RDS_HOSTNAME,
  user:process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port:process.env.RDS_PORT

})

connection.connect()

connection.query('CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255))', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})
app.get("/",function(req,res){

res.send("This is homepage sql");
});
app.listen(port);