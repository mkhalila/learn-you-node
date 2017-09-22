var net = require ("net");

var server = net.createServer (function (socket) {
  var date = new Date();
  var dateFormatted = date.toISOString().substr (0, 10) + " " +
                      date.toLocaleTimeString().substr (0, 5) + "\n";
  socket.end (dateFormatted);
});

server.listen (process.argv[2]);
