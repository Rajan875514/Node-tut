const mysql = require('mysql2');

// Create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rajan@123',
    database: 'test'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);

    // Insert data into the example_table
    const insertQuery = `
        INSERT INTO example_table (name, age) VALUES 
        ('John Doe', 30),
        ('Jane Smith', 25),
        ('Alice Johnson', 28),
        ('Bob Brown', 35)
    `;

    connection.query(insertQuery, (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return;
        }
        console.log('Data inserted successfully: ', results);

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
