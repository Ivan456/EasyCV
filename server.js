// A very basic web server in node.js
// Stolen from: Node.js for Front-End Developers by Garann Means (p. 9-10) 

var port = 8000;
var serverUrl = "127.0.0.1";

var http = require("http");
var path = require("path"); 
var fs = require("fs"); 		
var mysql = require("mysql");


console.log("Starting web server at " + serverUrl + ":" + port);

http.createServer(function(req, res) {
	var filename = req.url;
	if (req.url == "/") {
		console.log('.....change req.url to "/index.html"');
		filename = "/index.html";
	};

	
	if (req.url == "/registration") {
		var body = '';
		
		req.on('data', function(chunk) {
    		body += chunk.toString('utf8');
		});
		req.on('end', function() {
  			body = JSON.parse(body);	

			res.writeHead(200, {'Content-Type': 'text/plain'});
			
			var con = mysql.createConnection({
				host: "localhost",
				port: "3306",
				user: "root",
				password: "1010011010",
				database: "vodichdb"
			});

			con.connect(function(err){
				if(err){
					console.log('Error connecting to Db');
					return;
				};
				console.log('Connection established');
			});
			

			con.query('SELECT password FROM vodichCV WHERE email = "' +
				body.email + '"', 
				function(err, rows){
					if(err){
						console.log('Error connecting to Db');
						return;
					};

					if(rows.length > 0) {
						if(confirmPassword(body.password, rows[0].password)) {
							res.statusCode = 200;
							res.end("success login");
						}
					} else {
						con.query('INSERT INTO vodichCV (email, password) VALUES ("' + 
							body.email + '",' + '"' +
							body.password + '")', 
							
							function selectCb(err, results, fields) {
						    	if (err) console.log('Error insert' + err);
						    	res.statusCode = 200;
								res.end("success registration");
							}
						);
					};
				con.end(function(err) {});
				}
			);
		});
	
	} else {
		var ext = path.extname(filename),
			localPath = __dirname,
			validExtensions = {
				".html": "text/html",			
				".css": "text/css",
				".json": "application/json",
				".js": "application/javascript", 
				".ttf": "font/ttf",
				".txt": "text/plain",
				".jpg": "image/jpeg",
				".gif": "image/gif",
				".png": "image/png",
				".ico": "image/ico"
			},
			isValidExt = validExtensions[ext];

		if (isValidExt) {
			localPath += filename;
			fs.exists(localPath, function(exists) {
				if(exists) {
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
	};
}).listen(port, serverUrl);

function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			res.setHeader("Content-Type", mimeType);
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		};
	});
};

function confirmPassword(formPassword, dbPassword) {
	if(formPassword == dbPassword) {
		return true;
	} else {
		return false;
	};
};
