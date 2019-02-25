var StaticServer = require('static-server');
var server = new StaticServer({
	rootPath: './dist/',
	port: '3000'
});

server.start(function(){
	console.log('Server is up via port ' + server.port);
})