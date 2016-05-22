function loadData(){
	var httpRequest = new XMLHttpRequest(),
		resObject,
		reqObject = {
			email: document.getElementById('loginEmail').value
		};

	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4 && httpRequest.status === 200) {
	   		resObject = JSON.parse(httpRequest.responseText);
	   		delete resObject.password;
	   		delete resObject.email;
	   		console.log(httpRequest.responseText + resObject.name);
	   		for (var prop in resObject) {
	   			document.getElementById(prop).innerHTML = resObject[prop];
			};
		}; 
	};
		
	httpRequest.open('POST', '/loadData', true);

	httpRequest.send(JSON.stringify(reqObject));
};