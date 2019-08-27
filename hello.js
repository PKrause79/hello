var express = require('express');
var os = require('os');
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

var networkInterfaces = os.networkInterfaces( );

// function getLocalIp() {
//     const os = require('os');

//     for(let addresses of Object.values(os.networkInterfaces())) {
//         let s = '';
//         for(let add of addresses) {
//           s = s + add + </br>;
// //             if(add.address.startsWith('192.168.')) {
// //                 return add.address;
//             }
//         }
//       return s;
//     }
// }

app.get('/', function (req, res) {
  res.send('Hallo Signal Iduna!</br></br>Das hier ist mein erstes OpenShift-Projekt (skaliert auf 2 PODs - es wird die jeweilige IP angezeigt - bitte den Browser dazu refreshen): ' + 
           '</br></br>' +
           String(networkInterfaces) +
           '</br></br>' +
           'Bis Montag, </br>      Patrick Krause :)');
});

app.listen(port, function () {
  console.log('Hello app listening on port!' + port);
});
