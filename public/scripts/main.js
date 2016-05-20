(function () {
	requirejs(["public/scripts/libs/jspdf.min.js"]);
	requirejs(["public/scripts/libs/html2canvas.min.js"]);
	requirejs(["public/scripts/libs/md5_obj.js"]);
	requirejs(["public/scripts/TableCV.js"]);
	requirejs(["public/scripts/loadData.js"]);
	requirejs(["public/scripts/saveData.js"]);
	requirejs(["public/scripts/MenuCV.js"]);
	requirejs(["public/scripts/FormCV.js"]);
	requirejs(["public/scripts/LoadImage.js"]);
	requirejs(["public/scripts/events.js"]);

	var xmlhttp = new XMLHttpRequest(),
		url = "public/data/example.json",
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

	alert('Good day! Here you can create a resume in pdf format.' +
	' Start with a ready example of editing.' +
	' Sign up if you want to save the result to the server.');

})();
