(function () {

	var xmlhttp = new XMLHttpRequest(),
		url = "data/vodich.json",
		objExampleCV = {};
	
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        objExampleCV = JSON.parse(xmlhttp.responseText);
	    };
	};
	xmlhttp.open("GET", url, false);
	xmlhttp.send();


	var newTableCV = new TableCV("CV", objExampleCV);
	newTableCV.initialization();

	var newFormCV = new FormCV();
	newFormCV.initialization();

	var newMenuCV = new MenuCV("menu", newTableCV.id);
	newMenuCV.initialization();

	var newLoadImage = new LoadImage('photo');
	newLoadImage.initialization();

	newMenuCV.on('addRow', function () {
		newTableCV.callMethod();
	});

})();
