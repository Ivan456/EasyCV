function CV() {
	this.name = "Водич Иван Юрьевич <br> Front End Developer";
	this.photo = "photo";
	this.generalInformation = "др:	05.05.94 <br>  место проживания:	г. Минск, ул. Октябрьская 10 <br> тел.:	8 029 800 63 28 <br> email:	Ivan.Vodich.l@gmail.com";
	this.education = "БГУ ФПМИ 4 курс";
	this.wantedProfession = "Front End Developer <br> JS Developer";
	this.expirience = " 1.5 года дизайнер БГУ";
	this.mainSkills = "JS(Ecma Script 5.0), HTML 5, CSS 3, <br> JQuery, Angular, Adobe Photoshop, Adope Illustrator";
	this.additionalSkills = "Java SE, SQL, C++";
	this.languages = "English Intermediate"; 
	this.aboutMyself = "желание постоянно развиваться в своей сфере деятельности, принимать участие в сложных проектах, работа в большой команде";
};

CV.prototype.addFreeBlock = function (firstName, secondName) {
	var newBlock = document.createElement("tr");
	newBlock.id = firstName;
	newBlock.className = "table__information-block"
	newBlock.innerHTML += "<th contentEditable=true>" + this[firstName] + "</th>"
	newBlock.innerHTML += "<th contentEditable=true>" + this[secondName] + "</th>";
	var place = document.getElementById("CV");
	place.appendChild(newBlock);
};

CV.prototype.addTitleLine = function (firstName, secondName) {
	var newBlock = document.createElement("tr");
	newBlock.id = firstName;
	newBlock.className = "table__title-line";
	newBlock.innerHTML += "<th contentEditable=true>" + firstName + "</th>"
	newBlock.innerHTML += "<th contentEditable=true>" + secondName + "</th>";
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