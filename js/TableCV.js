function TableCV(id) {
	this.id = id;
	this.name = "Водич Иван Юрьевич <br> Front End Developer";
	this.photo = "photo";
	this.generalInformation = "др:	05.05.94 <br>  место проживания:	г. Минск, ул. Октябрьская 10 <br> тел.:	8 029 800 63 28 <br> email:	Ivan.Vodich.l@gmail.com";
	this.education = "БГУ ФПМИ 4 курс";
	this.wantedProfession = "Front End Developer <br> JS Developer";
	this.expirience = "1.5 года дизайнер БГУ";
	this.mainSkills = "JS(Ecma Script 5.0), HTML 5, CSS 3, <br> JQuery, Angular, Adobe Photoshop, Adope Illustrator";
	this.additionalSkills = "Java SE, SQL, C++";
	this.languages = "English Intermediate"; 
	this.aboutMyself = "желание постоянно развиваться в своей сфере деятельности, принимать участие в сложных проектах, работа в большой команде";
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
	this.addInformationBlock(this.name, this.photo);
	this.addTitleLine("general information","education");
	this.addInformationBlock(this.generalInformation, this.education);
	this.addTitleLine("wanted profession","expirience");
	this.addInformationBlock(this.wantedProfession, this.expirience);
	this.addTitleLine("main skills","additional skills");
	this.addInformationBlock(this.mainSkills, this.additionalSkills);
	this.addTitleLine("languages","about myself");
	this.addInformationBlock(this.languages, this.aboutMyself);  
};	