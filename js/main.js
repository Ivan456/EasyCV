(function () {

	var xmlhttp = new XMLHttpRequest();
	var url = "data/vodich.json";
	var objExampleCV = {};
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        objExampleCV = JSON.parse(xmlhttp.responseText);
	        console.log("myObj.name = " + objExampleCV.name);
	    };
	};
	xmlhttp.open("GET", url, false);
	xmlhttp.send();


	var newTableCV = new TableCV("CV", objExampleCV);
	newTableCV.initialization();

	var newMenuCV = new MenuCV("menu", newTableCV);
	newMenuCV.initialization();

	var newForm = document.createElement("form");
	newForm.id = "registrationForm";
	newForm.className = "body__registration-form_hide";
	newForm.innerHTML = '<p class = "registration-form__title">Registration:</p>'+
                        '<p>Name: '+
                        '<input type="text" id="name" placeholder="Enter your full name" /></p>'+
                   		'<p>Email:'+
                   		'<input type="email" id="email" placeholder="Enter your email address" /></p>'+
                    	'<p>Password:'+
                    	'<input type="password" id="password"/></p><br>'+
                    	'<input type="submit"  id="submit" value="Send message"/>';
    document.body.appendChild(newForm);
})();
