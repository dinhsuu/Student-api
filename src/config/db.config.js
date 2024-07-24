'use strict';
import mysql from 'mysql';

//local mysql db connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'studentdb'
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Database Connected!');
});

export default con;
