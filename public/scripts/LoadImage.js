var LoadImage = (function() {
	function LoadImage(id) {
		this.id = id;
	};

	LoadImage.prototype.initialization = function () {
		this.createFileInput();	 
	  	document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
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

	function getImage() {
		var picture;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
		  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
		    picture = xmlhttp.response;
		    var img = document.createElement("img");
		    document.body.appendChild = img;
		  }
		};
		xmlhttp.open("GET", "public/data/example.jpeg", true);
		xmlhttp.send();
	};

	function handleFileSelect(evt) {
	    var files = evt.target.files; // FileList object

	    // Loop through the FileList and render image files as thumbnails.
	    for (var i = 0, f; f = files[i]; i++) {

	      // Only process image files.
	      if (!f.type.match('image.*')) {
	        continue;
	      }

	      var reader = new FileReader();

	      // Closure to capture the file information.
	      reader.onload = (function(theFile) {
	        return function(e) {
	          // Render thumbnail.
	          var img = document.getElementById('photo').getElementsByTagName('img')[0];
	          img.src = e.target.result;
	        };
	      })(f);

	      // Read in the image file as a data URL.
	      reader.readAsDataURL(f);
	    };
	};

	return LoadImage;
})();
