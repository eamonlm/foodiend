// Imports or dependencies
const express = require('express');
var http = require('http');
var fs = require('fs');
// Define variables
const app = express();

// enable CORS on /list route only
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Body
app.get('/food', function(req, res) {
  fs.readFile('restaurants.json', function(err, data) {
    res.write(data);
    res.end();
  });
//  res.status(200).send(data);
})

const port = process.env.PORT || 3000;

const httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('Backend running on port ' + port + '.');
})
