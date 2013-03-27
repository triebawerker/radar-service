var express = require('express');
    technologies = require('./data/technologies');

var app = express();
 
app.get('/technologies', technologies.findAll);
app.get('/technologies/:id', technologies.findById);
 
app.listen(3000);
console.log('Listening on port 3000...');
