import http from 'http';
import assert from 'assert';
const express = require("express");

const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "data1"
});

connection.connect();

connection.query("SELECT * from hotel_data", function(err, rows, fields) {
  if (!err) console.log("The solution is: ", rows);
  else console.log("Error while performing Query.");
});

connection.end();

app.get('/', function (req, res) {
    res.send('Server works')
  })

app.listen(8000, () => {
  console.log("Server created at http://localhost:8000");
});
