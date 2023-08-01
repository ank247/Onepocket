const fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err, data){
  var arr = data.aplit(' ');
  console.log(arr.length());
});
