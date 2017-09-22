var sum = Number (process.argv[2]);

for (var i = 3; i < process.argv.length; i++) {
  sum += Number (process.argv[i]);
}

console.log(sum);
