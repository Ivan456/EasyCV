exports.loadData = function (req, res, con, body) {
    con.query('SELECT * FROM vodichCV WHERE email = "' + 
            body.email + '"',

        function(err, rows){
            if(err){
                console.log('Error connecting to Db' + err);
                return;
            };

            if(rows.length > 0) {
                res.statusCode = 200;
                res.end(JSON.stringify(rows[0]));
            } else {
                res.statusCode = 200;
                res.end("load data: there is not such email");
            };
            con.end(function(err) {});
        }
    );
 
};
