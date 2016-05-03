function LoadImage(id) {
	this.id = id;
};

LoadImage.prototype.initialization = function () {
	this.createFileInput();	 
	document.getElementById(this.id).addEventListener('click', this.callLoadImage);
}

LoadImage.prototype.createFileInput = function () {
	var newFileInput = document.createElement('input');
	newFileInput.setAttribute('type', 'file');
	newFileInput.setAttribute('id', 'fileInput');
	newFileInput.setAttribute('style', 'visibility:hidden');
	document.body.appendChild(newFileInput);
};

LoadImage.prototype.callLoadImage = function(){
	document.getElementById('fileInput').click();
};