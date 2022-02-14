const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connets to DATABASE
const db = mysql.createConnection(
  {
    host: 'localhost',
    //Your MySQl username
    user: 'root',
    //Your MySQl password
    password: 'goat',
    database: 'election'
  },
  console.log('Connected to the election database')
);


//default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});