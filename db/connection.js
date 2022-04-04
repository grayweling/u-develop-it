const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: '5x31^uTXZ%z1',
  database: 'election'
});

module.exports = db;
