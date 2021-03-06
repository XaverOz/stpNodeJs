const http = require("http");
var fs = require('fs');
var mustache = require('mustache');

 
http.createServer(function(request, response){
	if(request.url == '/MobaResult2.html') {
		response.setHeader("Content-Type","text/html");
		data = fs.readFileSync(__dirname + '\\1.txt', 'utf8');
		var view = {
			name: data
		}
		var data = fs.readFileSync(__dirname + '\\MobaResult.html', 'utf8');
		response.writeHead(200);
		response.end(mustache.render(data, view));
	} else if(request.url == '/MobaAddScript') {
		response.setHeader("Content-Type","text/html");
		let data = '';
		request.on('data', chunk => {
			data += chunk;
		})
		request.on('end', () => {
			fs.writeFileSync(__dirname + '\\1.txt', data);
			fs.readFile(__dirname + '\\MobaResult.html', function (err,data) {
				if (err) {
					response.writeHead(404);
					response.end(JSON.stringify(err));
					return;
				}
				response.writeHead(200);
				response.end(data);
			});
		})
	} else if(request.url == '/Score') {
		var scoreObject = {
			'Lions': 1,
			'Team Empire': 2
		};
		response.writeHead(200);
		response.end(JSON.stringify(scoreObject));
	} else {
		console.log(request.url);
		fs.readFile(__dirname + request.url, function (err,data) {
			if (err) {
				response.writeHead(404);
				response.end(JSON.stringify(err));
				return;
			}
			response.writeHead(200);
			response.end(data);
		});
	}
}).listen(3000);
