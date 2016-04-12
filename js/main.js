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
	
})();