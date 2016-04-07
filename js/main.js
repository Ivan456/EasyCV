(function () {
	
	document.getElementById("menu").style.marginTop = "0px";
	window.onscroll = function() {myFunction()};
	function myFunction() {
	    if (parseInt(document.getElementById("menu").style.marginTop) >= -50 ) {
	    	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	        	document.getElementById("menu").style.marginTop = "-43px";
	    	} else {
	        	document.getElementById("menu").style.marginTop = "0px";
	    	};
	    };
	};

	var xmlhttp = new XMLHttpRequest();
	var url = "myTutorials.txt";

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();


	var newPerson = new CV();
	newPerson.addButton("save as .PDF", newPerson.savePDF);
	newPerson.addButton("change color", newPerson.changeColor);
	newPerson.addButton("hide menu", newPerson.hideMenu);
	newPerson.addButton("edit CV", newPerson.editContent);
	newPerson.addButton("apply CV", newPerson.applyContent);
	newPerson.addButton("add field", newPerson.addField);
	newPerson.addButton("delete field", newPerson.deleteField);
	newPerson.addInformationBlock("name","photo");
	newPerson.addTitleLine("general information","education");
	newPerson.addInformationBlock("generalInformation","education");
	newPerson.addTitleLine("wanted profession","expirience");
	newPerson.addInformationBlock("wantedProfession","expirience");
	newPerson.addTitleLine("main skills","additional skills");
	newPerson.addInformationBlock("mainSkills","additionalSkills");
	newPerson.addTitleLine("languages","about myself");
	newPerson.addInformationBlock("languages","aboutMyself");
	newPerson.toPDF();
})();