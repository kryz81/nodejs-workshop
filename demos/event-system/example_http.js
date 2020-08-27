const { createServer } = require('http');

// callback version
const server = createServer((req, res) => {
  res.write('I am alive');
  res.end();
});

// server.listen(3000, () => console.log('Listening...'));

const server2 = createServer();

server2.listen(3000);

server2.on('connection', () => {
  console.log('[connection event]');
});

server2.on('request', (req, res) => {
  res.write('[request event] I am alive');
  res.end();
});
