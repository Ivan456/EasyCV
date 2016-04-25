function MenuCV (id, newTableCV) {
	 this.id = id;
	 this.newTableCV = newTableCV;
};

MenuCV.prototype.initialization = function(){
	this.addButton("save", this.savePDF);
	this.addButton("color", this.changeColor);
	this.addButton("hide", this.hideMenu);
	this.addButton("edit", this.editContent);
	this.addButton("add", this.addField);
	this.addButton("delete", this.deleteField);  
	this.addButton("logIn", this.logIn);  
	this.addButton("registration", this.registration);
	this.createForm("registration");
};


MenuCV.prototype.addButton = function(text, funcOnClick){
	var button = document.createElement("input");
	var place = document.getElementById(this.id);

	button.value = text;
	button.id = text;
	button.type = "button";
	button.onclick = funcOnClick;
	place.appendChild(button);
};

MenuCV.prototype.savePDF = function(){
	var pdf = new jsPDF('p', 'mm', [297, 210]);
    
    pdf.addHTML(document.getElementById("CV"),  function() {
    	pdf.save('CV.pdf');
    });



};

MenuCV.prototype.changeColor = function(){
	var r, g, b;
	r = Math.round(255 - 255*0.3*Math.random());
	g = Math.round(255 - 255*0.3*Math.random());
	b = Math.round(255 - 255*0.3*Math.random());
	document.getElementById("CV").style.background = "rgb("+r+","+g+","+b+")";
};
	
MenuCV.prototype.editContent = function(){
	var thMassive = document.getElementsByTagName("th");
	for (var i = 0; i < thMassive.length; i++) {
		thMassive[i].contentEditable = true;
		thMassive[i].style.border = "2px solid #0000FF";
	};
	var editButton = document.getElementById("edit");
	editButton.value = "apply";
	editButton.onclick = MenuCV.prototype.applyContent;
};

MenuCV.prototype.applyContent = function(){
	var thMassive = document.getElementsByTagName("th");
	for (var i = 0; i < thMassive.length; i++) {
		thMassive[i].contentEditable = false;
		thMassive[i].style.border = "0px none #0000FF";
	};
	var editButton = document.getElementById("edit");
	editButton.value = "edit";
	editButton.onclick = MenuCV.prototype.editContent;
};

MenuCV.prototype.addField = function(){
    this.newTableCV.addTitleLine("general information","education");
	this.newTableCV.addTitleLine("input text", "input text"); 
	this.newTableCV.addInformationBlock("input text", "input text");
};

MenuCV.prototype.deleteField = function(){
	var tdMassive = document.getElementsByTagName("tr");
	var massiveLength = tdMassive.length;
	document.getElementById("CV").removeChild(tdMassive[massiveLength - 1]);
	document.getElementById("CV").removeChild(tdMassive[massiveLength - 2]);
};

MenuCV.prototype.showMenu = function(){
	document.getElementById("menu").style.marginTop = "0px";
	document.getElementById("CV").style.marginTop = "70px";
	document.getElementById("CV").onclick = null;
};

MenuCV.prototype.hideMenu = function(){
	document.getElementById("menu").style.marginTop = "-200px";
	document.getElementById("CV").style.marginTop = "10px";
	document.getElementById("CV").onclick = MenuCV.prototype.showMenu;
};

MenuCV.prototype.registration = function(){
	var registrationForm = document.getElementById("registrationForm");
	registrationForm.className = "body__registration-form_active"
};

MenuCV.prototype.logIn = function(){
	var logInButton = document.getElementById("logIn");
	logInButton.value = "logOut";
	logInButton.onclick = MenuCV.prototype.logOut;
};

MenuCV.prototype.logOut = function(){
	var logInButton = document.getElementById("logIn");
	logInButton.value = "logIn";
	logInButton.onclick = MenuCV.prototype.logIn;
};

MenuCV.prototype.createForm = function(label){
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
