var addInformationBlock = function (firstBlock, secondBlock) {
	var newBlock = document.createElement("tr");
	newBlock.className = "table__information-block";
	newBlock.innerHTML += "<th>" + firstBlock + "</th>";
	newBlock.innerHTML += "<th>" + secondBlock + "</th>";
	var place = document.getElementById("CV");
	place.appendChild(newBlock);
};

var addTitleLine = function (firstName, secondName) {
	var newBlock = document.createElement("tr");
	newBlock.id = firstName;
	newBlock.className = "table__title-line";
	newBlock.innerHTML += "<th>" + firstName + "</th>"
	newBlock.innerHTML += "<th>" + secondName + "</th>";
	var place = document.getElementById("CV");
	place.appendChild(newBlock);
};

var savePDF = function(){
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

var changeColor = function(){
	var r, g, b;
	r = Math.round(255 - 255*0.3*Math.random());
	g = Math.round(255 - 255*0.3*Math.random());
	b = Math.round(255 - 255*0.3*Math.random());
	document.getElementById("CV").style.background = "rgb("+r+","+g+","+b+")";
};
	
var editContent = function(){
	var thMassive = document.getElementsByTagName("th");
	for (var i = 0; i < thMassive.length; i++) {
		thMassive[i].contentEditable = true;
		thMassive[i].style.border = "2px solid #0000FF";
	};
	var editButton = document.getElementById("edit");
	editButton.value = "apply";
	editButton.onclick = applyContent;
};

var applyContent = function(){
	var thMassive = document.getElementsByTagName("th");
	for (var i = 0; i < thMassive.length; i++) {
		thMassive[i].contentEditable = false;
		thMassive[i].style.border = "0px none #0000FF";
	};
	var editButton = document.getElementById("edit");
	editButton.value = "edit";
	editButton.onclick = editContent;
};

var addField = function(){
	addTitleLine(); 
	addInformationBlock();
};

var deleteField = function(){
	var tdMassive = document.getElementsByTagName("tr");
	var massiveLength = tdMassive.length;
	document.getElementById("CV").removeChild(tdMassive[massiveLength - 1]);
	document.getElementById("CV").removeChild(tdMassive[massiveLength - 2]);
};

var addButton = function(text, funcOnClick){
	var button = document.createElement("input");
	var place = document.getElementById("menu");
	button.value = text;
	button.id = text;
	button.type = "button";
	button.onclick = funcOnClick;
	place.appendChild(button);
};


var showMenu = function(){
	document.getElementById("menu").style.marginTop = "0px";
	document.getElementById("CV").style.marginTop = "70px";
	document.getElementById("CV").onclick = null;
};

var hideMenu = function(){
	document.getElementById("menu").style.marginTop = "-200px";
	document.getElementById("CV").style.marginTop = "10px";
	document.getElementById("CV").onclick = showMenu;
};