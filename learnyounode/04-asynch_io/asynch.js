var fs = require('fs');

var callback = function(err, data) {

	if (err)
		return 'error';
	else
		return console.log(data.split('\n').length - 1);
}

var endOfLines = fs.readFile(process.argv[2], 'utf8', callback);

