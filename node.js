const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('.wc', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('Error: Archivo no encontrado');
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    }
  });
}).listen(8080);
