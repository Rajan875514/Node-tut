const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, this post man");
});

app.get('/about', (req, res) => {
    res.send("Hello, this is the about page");
});

app.listen(6000, () => {
    console.log('Server is running on port 6000');
});



// api get by postmanw