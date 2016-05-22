exports.login = function (req, res, con, body) {			
	con.query('SELECT password FROM vodichCV WHERE email = "' +
		body.email + '"', 
		function(err, rows){
			if(err){
				console.log('Error connecting to Db' + err);
				return;
			};

			if(rows.length > 0) {
				if(confirmPassword(body.password, rows[0].password)) {
					res.statusCode = 200;
					res.end("success login");
				} else {
					res.statusCode = 200;
					res.end("password do not confirm");
				};
			} else {
				res.statusCode = 200;
				res.end("login there is not such email");
			};
		con.end(function(err) {});
		}
	);
};

function confirmPassword(formPassword, dbPassword) {
	if(formPassword === dbPassword) {
		return true;
	} else {
		return false;
	};
};