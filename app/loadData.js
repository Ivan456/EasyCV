exports.loadData = function (req, res) {
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
			console.log('Connection established' + body.email);
		});
		

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
	});
};
