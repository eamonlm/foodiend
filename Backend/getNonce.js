/*var express = require('express');
var router = express.Router();
var braintree = require('braintree');
var venmo = require('venmo')

braintree.client.create({
  authorizatoin: CLIENT_AUTHORIZATION
}, function (clientErr, clientInstance) {


  if (clientErr) {
    console.error('Error creating client:', clientErr);
    return;
  }

  braintree.venmo.create({
    client: clientInstance
  }, function (venmoErr, venmoInstance) {


    if (venmoErr) {
      console.error('Error creating Venmo:', venmoErr);
      return;
    }

  });
});*/
