function FormCV(){
};

FormCV.prototype.initialization = function(){
	this.createForm("registration");
	this.createForm("login");
	
	document.getElementById("registrationForm").addEventListener('submit', function (event) {
    	event.preventDefault();
	});
	document.getElementById("registrationSubmit").addEventListener('click', this.registrationRequest);

	document.getElementById("loginForm").addEventListener('submit', function (event) {
    	event.preventDefault();
	});
	document.getElementById("loginSubmit").addEventListener('click', this.loginRequest);
};

FormCV.prototype.createForm = function(label){
	var newForm = document.createElement("form");
	newForm.id = label + 'Form';
	newForm.className = 'body__' + label + '-form_hide';
	newForm.innerHTML = '<p class = "' + label + '-form__title">' + 
						label + ':</p>'+                        
                                    		
                   		'<p>Email:  ' +
                   		'<input type="email" id="' + label + 
                   		'Email" placeholder="Enter your email address" /></p>' +
                    	
                    	'<p>Password:  '+
                    	'<input type="password" id="' + label + 
                    	'Password"/></p>'+
                    	
                    	'<input type="submit"  id="' + label + 
                    	'Submit" value="Send message"/>';
    document.body.appendChild(newForm);
};

FormCV.prototype.registrationRequest = function () {
	FormCV.prototype.request('registration');
	document.getElementById('loginEmail').value = document.getElementById('registrationEmail').value;	
};


FormCV.prototype.loginRequest = function () {
	FormCV.prototype.request('login');	
	loadData();
};

FormCV.prototype.request = function (label) {
	var object = new MD5(),
		httpRequest = new XMLHttpRequest(),
		reqObject = {
			email: document.getElementById(label + "Email").value,
			password: object.digest(document.getElementById(label + "Password").value)
		};

	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
	   		alert(httpRequest.responseText);
		}; 
	};
		
	httpRequest.open('POST', '/' + label, true);

	httpRequest.send(JSON.stringify(reqObject));

	var registrationForm = document.getElementById(label + "Form");
	registrationForm.className = "body__" + label + "-form_hide";
};
