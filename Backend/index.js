// Imports or dependencies
const express = require('express');
var http = require('http');
var fs = require('fs');
var gateway = require('gateway');
var braintree = require("braintree");

// Define variables
const app = express();

// enable CORS on /list route only
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'bythwshzprm4kjnb',
  publicKey: '8cqmxvrkm4gqfv5k',
  privateKey: 'abae0a9f02c96f3069a83e390d63dbfb'
});

// Generate a client token
/*gateway.clientToken.generate({
  //customerId: aCustomerId
}, function (err, response) {
  var clientToken = response.clientToken
});*/

// Sending token to client
app.get("/client_token", function (req, res) {
  //console.log('gateway: ', gateway);
  //console.log('clientToken: ', gateway.clientToken);
 return gateway.clientToken.generate({}, function (err, response) {
   res.send(response.clientToken);
 });
});

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
