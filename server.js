var express = require('express');
    technologies = require('./data/technologies');
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/technologies', technologies.findAll);
app.get('/technologies/:id', technologies.findById);
app.post('/technologies', technologies.add);
app.put('/technologies/:id', technologies.update);
app.delete('/technologies/:id', technologies.deleteTechnologie);
app.options('/technologies', technologies.options);
app.options('/technologies/:id', technologies.options);
 
app.listen(3000);
console.log('Listening on port 3000...');
