var lsFilter = require ("./ls-filter");

// lsFilter (process.argv[2], process.argv[3], function (err, data) {
//   if (err) console.log(err);
//   console.log(data);
// });

lsFilter (process.argv[2], process.argv[3], function (err, data) {
  if (err) console.error ("There was an error: ", err);

  data.forEach (function (file) {
    console.log(file);
  });
});
