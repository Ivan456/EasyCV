function TableCV(id, objExampleCV) {
	this.id = id;
	this.objExampleCV = objExampleCV;
};

TableCV.prototype.addInformationBlock = function (firstBlock, secondBlock, firstId, secondId) {
	var newBlock = document.createElement("tr");
	newBlock.className = "table__information-block";
	newBlock.innerHTML += "<th id = " + firstId + ">" + firstBlock + "</th>";
	newBlock.innerHTML += "<th id = " + secondId + ">" + secondBlock + "</th>";
	var place = document.getElementById(this.id);
	place.appendChild(newBlock);
};

TableCV.prototype.addTitleLine = function (firstName, secondName) {
	var newBlock = document.createElement("tr");
	newBlock.className = "table__title-line";
	newBlock.innerHTML += "<th>" + firstName + "</th>"
	newBlock.innerHTML += "<th>" + secondName + "</th>";
	var place = document.getElementById(this.id);
	place.appendChild(newBlock);
};

TableCV.prototype.initialization = function(){
	document.getElementById(this.id).className = "body__CV-table_active-menu";
	this.addInformationBlock(this.objExampleCV.name, this.objExampleCV.photo, "name", "photo");
	this.addTitleLine("general information","education");
	this.addInformationBlock(this.objExampleCV.generalInformation, this.objExampleCV.education, "generalInformation", "education");
	this.addTitleLine("desired position","expirience");
	this.addInformationBlock(this.objExampleCV.desiredPosition, this.objExampleCV.expirience, "desiredPosition", "expirience");
	this.addTitleLine("main skills","additional skills");
	this.addInformationBlock(this.objExampleCV.mainSkills, this.objExampleCV.additionalSkills, "mainSkills", "additionalSkills");
	this.addTitleLine("languages","about myself");
	this.addInformationBlock(this.objExampleCV.languages, this.objExampleCV.aboutMyself, "languages", "aboutMyself");  
};	
