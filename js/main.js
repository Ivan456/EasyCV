(function () {
	function addButton (id, text, funcOnClick) {
		var button = document.createElement("input");
		var place = document.getElementById("menu");
		button.value = text;
		button.type = "button";
		button.onclick = funcOnClick;
		place.appendChild(button);
	};

	function savePDF () {
		console.log('123');		
	};

	
	var newPerson = new CV();
	addButton("menu","save as .PDF", newPerson.savePDF);
	newPerson.addFreeBlock("name","photo");
	newPerson.addTitleLine("general information","education");
	newPerson.addFreeBlock("generalInformation","education");
	newPerson.addTitleLine("wanted profession","expirience");
	newPerson.addFreeBlock("wantedProfession","expirience");
	newPerson.addTitleLine("main skills","additional skills");
	newPerson.addFreeBlock("mainSkills","additionalSkills");
	newPerson.addTitleLine(" ","about myself");
	newPerson.addFreeBlock(" ","aboutMyself");
	newPerson.toPDF();
})();