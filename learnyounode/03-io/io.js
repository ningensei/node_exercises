var fs = require('fs');

var fileContent =  fs.readFileSync(process.argv[2]).toString();

var endOfLines = fileContent.split('\n').length - 1;

console.log(endOfLines);
