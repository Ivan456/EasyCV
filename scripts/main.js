(function () {
	requirejs(["scripts/libs/jspdf.min.js"]);
	requirejs(["scripts/libs/html2canvas.min.js"]);
	requirejs(["scripts/libs/md5_obj.js"]);
	requirejs(["scripts/TableCV.js"]);
	requirejs(["scripts/loadData.js"]);
	requirejs(["scripts/saveData.js"]);
	requirejs(["scripts/MenuCV.js"]);
	requirejs(["scripts/FormCV.js"]);
	requirejs(["scripts/LoadImage.js"]);
	requirejs(["scripts/events.js"]);

	var xmlhttp = new XMLHttpRequest(),
		url = "data/example.json",
		objExampleCV = {};
	
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        objExampleCV = JSON.parse(xmlhttp.responseText);

		var newTableCV = new TableCV("CV", objExampleCV);
		newTableCV.initialization();

		var newFormCV = new FormCV();
		newFormCV.initialization();

		var newMenuCV = new MenuCV("menu", newTableCV.id);
		newMenuCV.initialization();

		var newLoadImage = new LoadImage('photo');
		newLoadImage.initialization();

		document.addEventListener('addRow', function () {
			newTableCV.addTitleLine('new title 1', 'new title 2');
			newTableCV.addInformationBlock('new information block 1', 'new information block 2');
		});
	    
	    };
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	window.onload =  function() {
	   alert('Good day! Here you can create a resume in pdf format.' +
	   ' Start with a ready example of editing.' +
	   ' Sign up if you want to save the result to the server.');
	};

})();
