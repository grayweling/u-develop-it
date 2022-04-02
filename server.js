const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        //mysql username
        user: 'root',
        //mysql password
        password: '5x31^uTXZ%z1',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});