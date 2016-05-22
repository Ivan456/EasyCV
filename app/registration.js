exports.registration = function (req, res) {
    var mysql = require("mysql");
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
        

        con.query('SELECT password FROM vodichCV WHERE email = "' +
            body.email + '"', 
            function(err, rows){
                if(err){
                    console.log('Error connecting to Db' + err);
                    return;
                };

                if(rows.length > 0) {
                    res.statusCode = 200;
                    res.end("the email regestered");
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
};
            