(function () {

	var xmlhttp = new XMLHttpRequest();
	var url = "";
	var text = "sfsdf";

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send(text);


	var newPerson = new CV();
	addButton("save", savePDF);
	addButton("color", changeColor);
	addButton("hide", hideMenu);
	addButton("edit", editContent);
	addButton("add", addField);
	addButton("delete", deleteField);
	addInformationBlock(newPerson.name, newPerson.photo);
	addTitleLine("general information","education");
	addInformationBlock(newPerson.generalInformation, newPerson.education);
	addTitleLine("wanted profession","expirience");
	addInformationBlock(newPerson.wantedProfession, newPerson.expirience);
	addTitleLine("main skills","additional skills");
	addInformationBlock(newPerson.mainSkills, newPerson.additionalSkills);
	addTitleLine("languages","about myself");
	addInformationBlock(newPerson.languages, newPerson.aboutMyself);
})();