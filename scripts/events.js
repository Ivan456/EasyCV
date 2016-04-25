(function (){
	document.getElementById("menu").style.marginTop = "0px";
	window.onscroll = function() {myFunction()};
	function myFunction() {
	    if (parseInt(document.getElementById("menu").style.marginTop) >= -100 ) {
	    	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	        	document.getElementById("menu").style.marginTop = "-93px";
	    	} else {
	        	document.getElementById("menu").style.marginTop = "0px";
	    	};
	    };
	};

	document.getElementById("registrationForm").addEventListener('submit', function (event) {
    	event.preventDefault();
	});

	document.getElementById("registrationSubmit").onclick = function () {
		var httpRequest = new XMLHttpRequest(),
			reqObject = {
				name: document.getElementById("registrationName").value,
				email: document.getElementById("registrationEmail").value,
				password: document.getElementById("registrationPassword").value
			};

    	httpRequest.onreadystatechange = function() {
    		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    	   		alert(httpRequest.responseText);
    		} 
   		};
   		
   		httpRequest.open('POST', 'http://127.0.0.1:8000/myaction', true);

		httpRequest.send('{"name":"' + reqObject.name + 
						'","email":"' + reqObject.email +
						'","password":"' + reqObject.password + 
						'"}');

		var registrationForm = document.getElementById("registrationForm");
		registrationForm.className = "body__registration-form_hide";
	};

})();
