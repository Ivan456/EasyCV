document.getElementById("menu").style.marginTop = "0px";
	window.onscroll = function() {myFunction()};
	function myFunction() {
	    if (parseInt(document.getElementById("menu").style.marginTop) >= -100 ) {
	    	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	        	document.getElementById("menu").style.marginTop = "-93px";
	    	} else {
	        	document.getElementById("menu").style.marginTop = "0px";
	    	};
	    };
	};