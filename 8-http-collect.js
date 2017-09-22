var http = require ("http");

http.get (process.argv[2], function (response) {
  response.setEncoding ("utf8");
   var data = [];

   response.on ("error", console.error);

   response.on ("data", function (chunk) {
     data += chunk;
   });

   response.on ("end", function () {
     console.log(data.length);
     console.log(data);
   });
});
