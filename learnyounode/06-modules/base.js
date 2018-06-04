
var filter_list_module = require('./filter_list_module.js');

var dir = process.argv[2];
var ext = process.argv[3];

filter_list_module(dir, ext, function(err, data) {
	
	if (err) {
		
		console.log(err);
	} else {

		// data.forEach(function (file) {
	 //        console.log(file)
	 //    });


		for (key in data) {
			console.log(data[key]);
		}
	}	
});

