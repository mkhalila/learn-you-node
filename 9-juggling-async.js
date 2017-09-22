var http = require ("http");

function get (url, data, callback) {
  http.get (url, function (response) {
    response.setEncoding ("utf8");

    response.on ("data", function (chunk) {
      data += chunk;
    });

    response.on ("end", function () {
      console.log (data);
      data = [];
      callback();
    });
  });
}

function get2() {
  get (process.argv[3], [], get3);
}

function get3() {
  get (process.argv[4], [], function () {});
}

get (process.argv[2], [], get2);
