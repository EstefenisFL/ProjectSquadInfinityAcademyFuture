'use strict';
const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  // host: '166.48.214.158',
  // port: '3306',
  // user: 'saudemais',
  // password: 'saudemais',
  // database: 'saudemais'
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  //database: 'saudemais'
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;