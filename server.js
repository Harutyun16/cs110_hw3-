const http = require('http');
	const server = http.createServer(function(req, res){
    if(req.url === '/home') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('HEllO world my name is Harutyun');
    }
     else if(req.url === '/info'){
        res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('I am studying in AUA\nI am 16 years old');
	}
	 else if(req.url === '/info/family'){
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('I have one brother and two sisters');
	}
	 else if(req.url === '/info/hobby'){
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end(' I like boxing\n I like football');
    }
     else if(req.url === '/info/major'){
    	res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('I am studying in computer science faculty ');
	}
		else {
			res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("ERROR:404 NOT FOUND");
		}
	});
server.listen(3001);
