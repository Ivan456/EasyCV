exports.registration = function (req, res, con, body) {
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
};
            