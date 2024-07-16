const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rajan@123',
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting');
        return;
    }
    console.log('Connected as id ');
});
