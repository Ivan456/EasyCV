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
};


FormCV.prototype.loginRequest = function () {
	FormCV.prototype.request('login');	
};

FormCV.prototype.request = function (label) {
		var httpRequest = new XMLHttpRequest(),
			reqObject = {
				email: document.getElementById(label + "Email").value,
				password: document.getElementById(label + "Password").value
			};

    	httpRequest.onreadystatechange = function() {
    		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    	   		alert(httpRequest.responseText);
    		} 
   		};
   		
   		httpRequest.open('POST', 'http://127.0.0.1:8000/' + label, true);

		httpRequest.send('{"email":"' + reqObject.email +
					 '","password":"' + reqObject.password + 
						'"}');

		var registrationForm = document.getElementById(label + "Form");
		registrationForm.className = "body__" + label + "-form_hide";
};
