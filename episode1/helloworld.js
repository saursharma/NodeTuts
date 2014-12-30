/**
 *
 *Basic Hello world server
 *

var http = require('http');

var server = http.createServer();

function handleRequest(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('Hello world');
  res.end();
}

server.on('request', handleRequest);

server.listen(8080);
*/

/* Optimized code
 * removed http var, server var and clubbed server function
 *  handleRequest func can be inline
 */


require('http').createServer(function handleRequest(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hello world');
})
.listen(8080);
