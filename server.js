// A very basic web server in node.js
// Stolen from: Node.js for Front-End Developers by Garann Means (p. 9-10) 

var port = 8000;
var serverUrl = "127.0.0.1";

var http = require("http");
console.log("Starting web server at " + serverUrl + ":" + port);

http.createServer(function(req, res) {
    var fileName = req.url;
    if (req.url === "/") {
        console.log('.....change req.url to "/public/index.html"');
        fileName = "/public/index.html";
    };

        
    switch(req.url) {
        case "/registration":
            require("./app/registration.js").registration(req, res);
            break;

        case "/login":
            require("./app/login.js").login(req, res);
            break;

        case "/saveData":
            require("./app/saveData.js").saveData(req, res);
            break;

        case "/loadData":
            require("./app/loadData.js").loadData(req, res);
            break;
            
        default:
            require("./app/getFile.js").getFile(req, res, fileName);
        
    };
}).listen(port, serverUrl);


