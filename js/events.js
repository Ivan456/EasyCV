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

	document.getElementById("submit").onclick = function () {
		document.getElementById("submit").style.background = "yellow";
		var httpRequest = new XMLHttpRequest();
    	httpRequest.onreadystatechange = function() {
    		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    	   		alert(httpRequest.responseText);
    		} else {
    	    	alert('There was a problem with the request.');
    		};
   		};
   		httpRequest.open('POST', 'http://127.0.0.1:8080/myaction', true);
		httpRequest.send('{name:"vodich",email:"vodich@mail.ru",password:"vodi"}');
	};

})();