const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./src/routes');

const routes = express.Router;

const server = express();

// styles
server.use(express.static('public'));

server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(5000, function () {
  console.log('server running...');
});
