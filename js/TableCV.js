function TableCV(id, objExampleCV) {
	this.id = id;
	this.objExampleCV = objExampleCV;
};

TableCV.prototype.addInformationBlock = function (firstBlock, secondBlock) {
	var newBlock = document.createElement("tr");
	newBlock.className = "table__information-block";
	newBlock.innerHTML += "<th>" + firstBlock + "</th>";
	newBlock.innerHTML += "<th>" + secondBlock + "</th>";
	var place = document.getElementById(this.id);
	place.appendChild(newBlock);
};

TableCV.prototype.addTitleLine = function (firstName, secondName) {
	var newBlock = document.createElement("tr");
	newBlock.id = firstName;
	newBlock.className = "table__title-line";
	newBlock.innerHTML += "<th>" + firstName + "</th>"
	newBlock.innerHTML += "<th>" + secondName + "</th>";
	var place = document.getElementById(this.id);
	place.appendChild(newBlock);
};

TableCV.prototype.initialization = function(){
	this.addInformationBlock(this.objExampleCV.name, this.objExampleCV.photo);
	this.addTitleLine("general information","education");
	this.addInformationBlock(this.objExampleCV.generalInformation, this.objExampleCV.education);
	this.addTitleLine("wanted profession","expirience");
	this.addInformationBlock(this.objExampleCV.wantedProfession, this.objExampleCV.expirience);
	this.addTitleLine("main skills","additional skills");
	this.addInformationBlock(this.objExampleCV.mainSkills, this.objExampleCV.additionalSkills);
	this.addTitleLine("languages","about myself");
	this.addInformationBlock(this.objExampleCV.languages, this.objExampleCV.aboutMyself);  
};	
