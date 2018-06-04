var net = require('net');

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket) {

	var date = new Date();
	
	date_string  = date.getFullYear() + '-' + 
				   zeroFill((date.getMonth() + 1)) +'-'+ 
				   zeroFill(date.getDate()) + ' ' +
				   zeroFill(date.getHours()) + ':' + 
				   zeroFill(date.getMinutes());
	
	socket.end(date_string + '\n' );
});

server.listen(process.argv[2]);