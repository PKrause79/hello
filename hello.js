var express = require('express');
var os = require('os');
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

var networkInterfaces = os.networkInterfaces( );

app.get('/', function (req, res) {
  res.send('Hallo Signal Iduna!</br></br>Das hier ist mein erstes OpenShift-Projekt (skaliert auf 2 PODs - es wird die jeweilige IP angezeigt - bitte den Browser dazu refreshen): ' + 
           '</br></br>' +
           networkInterfaces +
           '</br></br>' +
           'Bis Montag, </br>      Patrick Krause :)');
});

app.listen(port, function () {
  console.log('Hello app listening on port!' + port);
});
