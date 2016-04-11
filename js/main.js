//(function () {

	var xmlhttp = new XMLHttpRequest();
	var url = "data/vodich.json";
	var myObj = {};

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        console.log("xmlhttp.responseText = " + xmlhttp.responseText);
	        var stringObj =  xmlhttp.responseText;
	        console.log("stringObj = " + stringObj);
	        //myObj = JSON.parse(stringObj);
	        //console.log("myObj.name = " + myObj.name);
	    };
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	var newTableCV = new TableCV("CV");
	newTableCV.initialization();

	var newMenuCV = new MenuCV("menu", newTableCV);
	newMenuCV.initialization();
	
//})();