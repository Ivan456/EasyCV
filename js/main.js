(function () {
	function addButton (id, text, funcOnClick) {
		var button = document.createElement("input");
		var place = document.getElementById("menu");
		button.value = text;
		button.type = "button";
		button.onclick = funcOnClick;
		place.appendChild(button);
	};

	function changeColor() {
		var r, g, b;
		r = Math.round(255*Math.random());
		g = Math.round(255*Math.random());
		b = Math.round(255*Math.random());
		document.getElementById("CV").style.background = "rgb("+r+","+g+","+b+")";
	};
	
	var newPerson = new CV();
	addButton("menu","save as .PDF", newPerson.savePDF);
	addButton("menu","change color", changeColor);
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