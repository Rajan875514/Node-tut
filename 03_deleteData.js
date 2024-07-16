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

    // Delete data from the example_table
    const deleteQuery = 'DELETE FROM example_table WHERE id = ?';
    const idToDelete = 1; // Specify the ID of the row you want to delete

    connection.query(deleteQuery, [idToDelete], (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return;
        }
        console.log('Data deleted successfully');

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
