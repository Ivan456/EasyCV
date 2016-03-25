function CV() {
	this.name = "name and proffesion";
	this.photo = "photo";
	this.generalInformation = "generalInformation: age, home, telephone, email";
	this.education = "education: colegue, university";
	this.wantedProfession = "  wanted profession";
	this.expirience = " your last expirience";
	this.mainSkills = "basic skills";
	this.additionalSkills = "other skills";
	this.aboutMyself = "Tell about yourself, that you think important";
};

CV.prototype.addFreeBlock = function (firstName, secondName) {
	var newBlock = document.createElement("tr");
	newBlock.id = firstName;
	newBlock.className = "table__information-block"
	newBlock.innerHTML += "<th>" + this[firstName] + "</th>"
	newBlock.innerHTML += "<th>" + this[secondName] + "</th>";
	var place = document.getElementById("CV");
	place.appendChild(newBlock);
};

CV.prototype.addTitleLine = function (firstName, secondName) {
	var newBlock = document.createElement("tr");
	newBlock.id = firstName;
	newBlock.className = "table__title-line";
	newBlock.innerHTML += "<th>" + firstName + "</th>"
	newBlock.innerHTML += "<th>" + secondName + "</th>";
	var place = document.getElementById("CV");
	place.appendChild(newBlock);
};

CV.prototype.addStructuredBlock = function () {
	var newBlock = document.createElement("tr");

	newBlock.innerHTML += "<th>" + "<p>Ivan Vodich</p>" + "</th>"
	newBlock.innerHTML += "<th>" + "<p>PHOTO</p>" + "</th>";
	var place = document.getElementById("article");
	place.appendChild();
};

CV.prototype.savePDF = function(){
	var objForHtml2canvas = {
		onrendered: function (canvas) {
			var img = canvas.toDataURL("image/png");
			var doc = new jsPDF();
			doc.addImage(img, 'JPEG', 0, 0);
			doc.save('test.pdf'); 
		}
	};
	html2canvas(document.getElementById("CV"), objForHtml2canvas);
};