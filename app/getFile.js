var path = require("path"); 
var fs = require("fs"); 
exports.getFile = function (req, res, fileName) {
	var ext = path.extname(fileName),
		localPath,
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
		localPath = "." + fileName;
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
