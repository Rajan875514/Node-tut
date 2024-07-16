const mysql = require('mysql2');

// Create a connection to MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rajan@123',
    database: 'test'
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL server as id ' + connection.threadId);

    // Update data in the example_table
    const updateQuery = 'UPDATE example_table SET age = ? WHERE name = ?';
    const newAge = 32; // Specify the new age
    const nameToUpdate = 'John Doe'; // Specify the name of the row you want to update

    connection.query(updateQuery, [newAge, nameToUpdate], (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return;
        }
        console.log('Data updated successfully');

        // Close the connection
        connection.end((err) => {
            if (err) {
                console.error('Error closing connection: ' + err.stack);
                return;
            }
            console.log('Connection closed');
        });
    });
});
