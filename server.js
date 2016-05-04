#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');
var http = require("http");
var path = require("path")
var mysql = require("mysql");

/**
 *  Define the sample application.
 */
var SampleApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );
        };
    };


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();
        self.app = express.createServer();

        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
     http.createServer(function(req, res) {
	var filename = req.url;
	if (req.url == "/") {
		console.log('.....change req.url to "/index.html"');
		filename = "/index.html";
	};

	
	switch(req.url) {
		case "/registration":
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
			break;

		case "/login":
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
			});
			break;

		case "/saveData":
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
						'", wantedProfession = "' + body.wantedProfession +
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
			break;

		case "/loadData":
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
			break;
			
		default:
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
}).listen(self.port, self.ipaddress);

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
    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();

