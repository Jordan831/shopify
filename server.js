var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:process.env.RDS_HOSTNAME,
  user:process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port:process.env.RDS_PORT

});
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

app.get("/",function(req,res){

connection.query('show tables', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  res.send(results);
});
});
app.listen(port);