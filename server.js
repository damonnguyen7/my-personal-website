var http = require('http');

var requestHandler = function(req, res) {
  res.end("Hello World!");
};

const server = http.createServer(requestHandler);

server.listen(8080, function() {
  console.log('Listening on port 8080');
});
