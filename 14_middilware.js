const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

app.get('/user/:id', (req, res, next) => {
  res.send('USER');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
