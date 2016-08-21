const express = require('express');
const app = express();
const http = require('http');
const io = require('socket.io');
const config = {
  uri: 'www.cert.coder.fi',
  port: 4000,
  path: '/',
  title: 'Express Status',
  spans: [{
    interval: 1,
    retention: 60
  }, {
    interval: 5,
    retention: 60
  }, {
    interval: 15,
    retention: 60
  }]
}

var server = http.createServer(app);
app.use(require('../index')(config, server));

server.listen(config.port, config.uri, () => {
  console.log('🌏  http://'+config.uri+':'+config.port);
});
