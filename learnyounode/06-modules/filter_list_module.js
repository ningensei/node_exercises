
var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, list) {
	
		if (err)
			return callback(err);

		// list = list.filter(function (file) {
	 //      return path.extname(file) === '.' + ext
	 //    })

	 	filtered_array = [];

	    for (var file in list) {
			
			if (path.extname(list[file]) === '.' + ext)
				filtered_array.push(list[file]);
		}

		return callback(null, filtered_array);

	});
};

