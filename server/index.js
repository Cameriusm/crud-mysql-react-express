const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crudatabase',
});

app.get('/', (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');";
  db.query(sqlInsert, (err, result) => {
    res.send('Hello World');
  });
});

app.listen(3001, () => {
  console.log('Running on port 3001');
});
