const mysql = require('mysql2');

// Create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rajan@123',
    database: 'my_database'// data base namenode
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ');
        return;
    }
    console.log('Connected as id ' );

    // Query the database
    const query = 'SELECT * FROM users'; // tebal name

    connection.query(query, (err, results, fields) => {
        if (err) {
            console.error('Error executing query: ');
            return;
        }
        
        // Print the results
        console.log('Results: ', results);

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
