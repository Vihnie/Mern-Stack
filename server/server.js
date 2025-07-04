const express = require('express');
const { mongo } = require('mongoose');

// Create an Express application
const app = express();

//routes
app.get('/', (req, res) => {
  res.json({mssg:'Hello World!'});

//listen for requests
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});