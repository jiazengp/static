const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response);
});

server.listen(3000, () => {
  console.log('https service listening on port 3000');
});