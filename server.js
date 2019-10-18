var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

// Constants
const PORT = 3000;
const HOST = '192.168.0.19';

app.use('/', express.static(__dirname + '/wwwroot'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);