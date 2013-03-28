var express = require('express');
    technologies = require('./data/technologies');
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/wines', technologies.findAll);
app.get('/wines/:id', technologies.findById);
app.post('/wines', technologies.addWine);
app.put('/wines/:id', technologies.updateWine);
app.delete('/wines/:id', technologies.deleteWine);
 
app.listen(3000);
console.log('Listening on port 3000...');
