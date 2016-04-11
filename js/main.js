//(function () {

	/*var xmlhttp = new XMLHttpRequest();
	var url = "";
	var text = "sfsdf";

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send(text);*/


	var newTableCV = new TableCV("CV");
	newTableCV.initialization();

	var newMenuCV = new MenuCV("menu", newTableCV);
	newMenuCV.initialization();
	
//})();