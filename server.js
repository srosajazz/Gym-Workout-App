const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

// styles
server.use(express.static('public'));

server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', function (require, response) {
  const about = {
    avatar_url: '/img/sergio.jpg',
    name: 'Sergio Rosa',
    role: 'Software Engineer',
    description:
      'Full-stack, focus on Node.js, ReactJS, React Native, JavaScript, CSS, HTML',
    links: [
      { name: 'Github', url: 'https://github.com/srosajazz' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sergiorosa1/' },
    ],
  };
  return response.render('about', { about });
});

server.get('/portfolio', function (require, response) {
  return response.render('portfolio', { items: videos });
});

server.listen(5000, function () {
  console.log('server running...');
});
