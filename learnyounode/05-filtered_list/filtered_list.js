var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	
	if (err) {
		console.log('error');

	} else {

		for (var file in list) {
		
			if (path.extname(list[file]) == '.' + process.argv[3])
				console.log(list[file]);
		}

		
	}

});