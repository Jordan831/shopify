var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'aay55dgt76z9oa.c0ybtf9rhhqe.ap-south-1.rds.amazonaws.com',
  user: 'root',
  password: 'password',
  database: 'shopify'
})

connection.connect()

connection.query('CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255))', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})
app.get("/",function(req,res){

res.send("This is homepage");
});
app.listen(port);