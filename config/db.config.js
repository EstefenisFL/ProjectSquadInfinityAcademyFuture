'use strict';
const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host: 'www.mysql.academiasaudemais.com.br',
  port: 3008,
  user: 'saudemais',
  password: 'saudemais',
  database: 'saudemais'
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;