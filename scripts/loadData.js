function loadData(){
	var httpRequest = new XMLHttpRequest(),
		resObject,
		reqObject = {email: document.getElementById('loginEmail').value};

	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
	   		reqObject = JSON.parse(httpRequest.responseText);
	   		console.log(httpRequest.responseText + reqObject);
		}; 
	};
		
	httpRequest.open('POST', 'http://127.0.0.1:8000/loadData', true);

	httpRequest.send(JSON.stringify(reqObject));
};