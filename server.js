// A very basic web server in node.js
// Stolen from: Node.js for Front-End Developers by Garann Means (p. 9-10) 

var port = 8000;
var serverUrl = "127.0.0.1";

var http = require("http");
var path = require("path"); 
var fs = require("fs"); 		

console.log("Starting web server at " + serverUrl + ":" + port);

http.createServer(function(req, res) {
	var now = new Date();
	var filename = req.url;
	if (req.url == "/") {
		console.log('.....change req.url to "/index.html"');
		filename = "/index.html";
	};
	console.log("......file name:  " + req.url);
	var ext = path.extname(filename);
	console.log("......extname = " + ext);
	var localPath = __dirname;
	console.log("......localPath = dirname = " + __dirname);

	var validExtensions = {
		".html" : "text/html",			
		".css": "text/css",
		".js": "application/javascript", 
		".ttf": "font/ttf",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png",
		".ico" : "image/ico",
		".json": "text/json"
	};
	var isValidExt = validExtensions[ext];
	console.log("......isValidExt = validExtensions[ext] = " + validExtensions[ext]);
	if (isValidExt) {
		localPath += filename;
		fs.exists(localPath, function(exists) {
			if(exists) {
				console.log("Serving file: " + localPath);
				getFile(localPath, res, validExtensions[ext]);
			} else {
				console.log("File not found: " + localPath);
				res.writeHead(404);
				res.end();
			};
		});
	} else {
		console.log("Invalid file extension detected: " + ext);
	};
}).listen(port, serverUrl);

function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			console.log("Content-Length = " + contents.length);	
			res.setHeader("Content-Type", mimeType);
			console.log("Content-Type = " + mimeType);	
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		};
	});
};