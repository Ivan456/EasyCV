(function () {
	var newPerson = new CV();
	newPerson.addFreeBlock("name","photo");
	newPerson.addTitleLine("general information","education");
	newPerson.addFreeBlock("generalInformation","education");
	newPerson.addTitleLine("wanted profession","expirience");
	newPerson.addFreeBlock("wantedProfession","expirience");
	newPerson.addTitleLine("main skills","additional skills");
	newPerson.addFreeBlock("mainSkills","additionalSkills");
	newPerson.addTitleLine(" ","about myself");
	newPerson.addFreeBlock(" ","aboutMyself");
})();