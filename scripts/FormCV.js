function FormCV(){
};

FormCV.prototype.initialization = function(){
	this.createForm("registration");
	this.createForm("login");
};

FormCV.prototype.createForm = function(label){
	var newForm = document.createElement("form");
	newForm.id = label + 'Form';
	newForm.className = 'body__' + label + '-form_hide';
	newForm.innerHTML = '<p class = "' + label + '-form__title">' + 
						label + ':</p>'+
                        
                        '<p>Name: '+
                        '<input type="text" id="' + label + 
                        'Name" placeholder="Enter your full name" /></p>'+
                   		
                   		'<p>Email:' +
                   		'<input type="email" id="' + label + 
                   		'Email" placeholder="Enter your email address" /></p>' +
                    	
                    	'<p>Password:'+
                    	'<input type="password" id="' + label + 
                    	'Password"/></p><br>'+
                    	
                    	'<input type="submit"  id="' + label + 
                    	'Submit" value="Send message"/>';
    document.body.appendChild(newForm);
};
