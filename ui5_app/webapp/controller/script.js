(function() {
	
	var prelaod = document.getElementById("preload");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame(){
		
		if(loading== 100)
			{clearInterval(id);
			windwos.open ("Welcome.html", "_self")}
		else{loading = loading++;
		if (loading == 90){
			preload.style.animation = "fadeout 1s ease";
		}}
	}
	
})();