(function () {
	var newPerson = new CV();
	var nameBlock = document.createElement("section");
	nameBlock.innerText = newPerson.name;
	nameBlock.innerHTML = nameBlock.innerHTML + "<p>Ivan Vodich</p>";
	var place = document.getElementById("article");
	place.appendChild(nameBlock);
})();