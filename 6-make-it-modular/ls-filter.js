var fs = require ("fs");
var path = require ("path");

// module.exports = function (dir, ext, callback) {
//   ext = "." + ext;
//   fs.readdir (dir, function (err, data) {
//     if (err) return callback (err, null);
//     data.forEach (function (file) {
//       if (path.extname (file) === ext) return callback(null, file);
//     });
//   });
// };

module.exports = function (dir, ext, callback) {
  fs.readdir (dir, function (err, data) {
    if (err) return callback (err);

    var list = data.filter (function (file) {
      return path.extname (file) === "." + ext;
    });

    return callback (null, list);
  });
};
