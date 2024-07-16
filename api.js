const express = require('express');
const dbconnect = require('./mysql'); // Assuming you have a mysql.js file for database connection

const app = express();


app.get('/', (req, resp) => {
    resp.send({ name: 'rajan' });
});

app.listen(5000);
