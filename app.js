const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html', (err, data) => {
      if (err) throw err;
      res.write(data)
      res.end();
    });
}

const server = http.createServer(handler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
