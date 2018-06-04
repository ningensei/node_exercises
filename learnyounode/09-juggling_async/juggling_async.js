var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var requests = [];

urls.forEach(function (_url, index) {
	http.get(_url, function(response) {
		var string = '';

		response.setEncoding('utf8').on('data', function(data) {
			string += data;
		});

		response.on('end', function() {
			
			requests[index] = string;

			if (requests.length == 3) {
				requests.forEach(function (req) {
					console.log(req);
				});
			
			}

		});
	});    
});
