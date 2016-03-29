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

	function hideMenu() {
		document.getElementById("menu").style.display = "none";
		document.getElementById("CV").style.marginTop = "20px";
	};

	function editContent() {
		var thMassive = document.getElementsByTagName("th");
		for (var i = 0; i < thMassive.length; i++) {
			thMassive[i].contentEditable = true;
			thMassive[i].style.border = "2px solid #0000FF";
		};
	};

	function applyContent() {
		var thMassive = document.getElementsByTagName("th");
		for (var i = 0; i < thMassive.length; i++) {
			thMassive[i].contentEditable = false;
			thMassive[i].style.border = "0px none #0000FF";
		};
	};

	function addField() {
		CV.prototype.addTitleLine(); 
		CV.prototype.addFreeBlock();
	};
	
	var newPerson = new CV();
	addButton("menu","save as .PDF", newPerson.savePDF);
	addButton("menu","change color", changeColor);
	addButton("menu","hide menu", hideMenu);
	addButton("menu","edit CV", editContent);
	addButton("menu","apply CV", applyContent);
	addButton("menu","add field", addField);
	newPerson.addFreeBlock("name","photo");
	newPerson.addTitleLine("general information","education");
	newPerson.addFreeBlock("generalInformation","education");
	newPerson.addTitleLine("wanted profession","expirience");
	newPerson.addFreeBlock("wantedProfession","expirience");
	newPerson.addTitleLine("main skills","additional skills");
	newPerson.addFreeBlock("mainSkills","additionalSkills");
	newPerson.addTitleLine("languages","about myself");
	newPerson.addFreeBlock("languages","aboutMyself");
	newPerson.toPDF();
})();