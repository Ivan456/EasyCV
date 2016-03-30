function CV() {
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

CV.prototype.addInformationBlock = function (firstName, secondName) {
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

CV.prototype.changeColor = function(){
	var r, g, b;
	r = Math.round(255*Math.random());
	g = Math.round(255*Math.random());
	b = Math.round(255*Math.random());
	document.getElementById("CV").style.background = "rgb("+r+","+g+","+b+")";
};
	
CV.prototype.editContent = function(){
	var thMassive = document.getElementsByTagName("th");
	for (var i = 0; i < thMassive.length; i++) {
		thMassive[i].contentEditable = true;
		thMassive[i].style.border = "2px solid #0000FF";
	};
};

CV.prototype.applyContent = function(){
	var thMassive = document.getElementsByTagName("th");
	for (var i = 0; i < thMassive.length; i++) {
		thMassive[i].contentEditable = false;
		thMassive[i].style.border = "0px none #0000FF";
	};
};

CV.prototype.addField = function(){
	CV.prototype.addTitleLine(); 
	CV.prototype.addFreeBlock();
};

CV.prototype.deleteField = function(){
	var tdMassive = document.getElementsByTagName("tr");
	var massiveLength = tdMassive.length;
	document.getElementById("CV").removeChild(tdMassive[massiveLength - 1]);
	document.getElementById("CV").removeChild(tdMassive[massiveLength - 2]);
};

CV.prototype.addButton = function(text, funcOnClick){
	var button = document.createElement("input");
	var place = document.getElementById("menu");
	button.value = text;
	button.type = "button";
	button.onclick = funcOnClick;
	place.appendChild(button);
};


CV.prototype.showMenu = function(){
	document.getElementById("menu").style.display = "block";
	document.getElementById("CV").style.marginTop = "70px";
	document.getElementById("menu").onclick = null;
};

CV.prototype.hideMenu = function(){
	document.getElementById("menu").style.display = "none";
	document.getElementById("CV").style.marginTop = "20px";
	document.getElementById("CV").onclick = CV.prototype.showMenu;
};

