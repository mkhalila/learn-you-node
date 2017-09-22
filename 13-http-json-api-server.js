var http = require ('http');
var url = require ('url');

var server = http.createServer (function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  var parsedURL = url.parse (req.url, true);
  var date = new Date (parsedURL.query.iso);
  var result;
    
  if (parsedURL.pathname === '/api/parsetime') {
    result = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
    res.end (JSON.stringify (result) + '\n');
  }
  
  else if (parsedURL.pathname === '/api/unixtime') {
    result = { "unixtime": date.getTime() }
    res.end (JSON.stringify (result) + '\n');
  }
  
  if (result) res.writeHead(200, { 'Content-Type': 'application/json' });
  else {
    res.writeHead(404);
    res.end();
  }
});

server.listen (process.argv[2]);