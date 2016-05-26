var port = 8000,
    serverUrl = "127.0.0.1",
    http = require("http"),
    mysql = require("mysql");

console.log("Starting web server at " + serverUrl + ":" + port);

http.createServer(function(req, res) {
    var fileName = req.url;
    if (req.url === "/") {
        console.log('.....change req.url to "/public/index.html"');
        fileName = "/public/index.html";
    };

    if (doNotGetFile(req.url)) {
        var body = '';
            
        req.on('data', function(chunk) {
            body += chunk.toString('utf8');
        });
        req.on('end', function() {
            body = JSON.parse(body);    

            res.writeHead(200, {'Content-Type': 'text/plain'});
            
            var con = mysql.createConnection({
                host: "127.0.0.1",
                port: "3306",
                user: "root",
                password: "1010011010",
                database: "vodichdb"
            });

            con.connect(function(err){
                if(err){
                    console.log('Error connecting to Db' + err);
                    return;
                };
                console.log('Connection established');
            });

            switch(req.url) {
                case "/registration":
                    require("./app/registration.js").registration(req, res, con, body);
                    break;

                case "/login":
                    require("./app/login.js").login(req, res, con, body);
                    break;

                case "/saveData":
                    require("./app/saveData.js").saveData(req, res, con, body);
                    break;

                case "/loadData":
                    require("./app/loadData.js").loadData(req, res, con, body);
                    break;
            };
               
        });
    } else {
        require("./app/getFile.js").getFile(req, res, fileName);     
    }    
        
}).listen(port, serverUrl);

function doNotGetFile(reqUrl) {
    var doNotGetFile = false;
    if (reqUrl === "/registration" ) doNotGetFile = true;
    if (reqUrl === "/login" ) doNotGetFile = true;
    if (reqUrl === "/saveData" ) doNotGetFile = true;
    if (reqUrl === "/loadData" ) doNotGetFile = true;
    return doNotGetFile;    
};
