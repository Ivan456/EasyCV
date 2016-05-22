exports.saveData = function (req, res) {
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
			console.log('Connection established' +  body.photo);
		});

		body.photo = body.photo.replace(/\"/g,"");				
		con.query('UPDATE vodichCV SET ' +
				'name = "' + body.name +
				'", photo = "' + body.photo +
				'", generalInformation = "' + body.generalInformation +
				'", education = "' + body.education +
				'", wantedProfession = "' + body.desiredPosition +
				'", expirience = "' + body.expirience +
				'", mainSkills = "' + body.mainSkills +
				'", additionalSkills = "' + body.additionalSkills +
				'", languages = "' + body.languages +
				'", aboutMyself = "' + body.aboutMyself +
					'" WHERE email = "' + body.email + '"',

			function selectCb(err, results, fields) {
		    	if (err) console.log('Error insert' + err);
		    	res.statusCode = 200;
				res.end("success save data");
			}
		);
	});
};
