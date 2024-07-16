const mysql = require('mysql2');

// Create a connection to MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rajan@123'
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL server as id ' + connection.threadId);

    // Create the database
    const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS code';

    connection.query(createDatabaseQuery, (err, results) => {
        if (err) {
            console.error('Error creating database: ' + err.stack);
            return;
        }
        console.log('Database "code" created successfully');
    });

    // Close the connection
    connection.end((err) => {
        if (err) {
            console.error('Error closing connection: ' + err.stack);
            return;
        }
        console.log('Connection closed');
    });
});

