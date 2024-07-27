const http = require('http');

http.createServer((req, res) => { // Set the response HTTP header with HTTP status and Content type
                                                  
res.write("hello my name is rajan prasad");// Write the response body
 res.end('end'); // End the response
}).listen(4200);

console.log('Server running at http://localhost:4200/');
