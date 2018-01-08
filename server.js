var express = require('express');
var app = express();

// homepage
app.get('/', function(req, res) {
    res.send('Hello Seattle\n');
});

// test route
app.get('/testroute/:testvar', function(req, res) {

    console.log(req.params.testvar)

    res.send('{"id": 1,"testval":' + req.params.testvar + '}');

});

// generate addresses
// test route
app.get('/generateAddresses/:testvar', function(req, res) {

    var generateAddresses = require('./createAddresses.js');

    console.log(generateAddresses.getGeneratedAddresses());

    res.send(generateAddresses.getGeneratedAddresses());

});

app.listen(3001);
console.log('Listening on port 3001...');