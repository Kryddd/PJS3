function unroll() {
	var nav = document.getElementById("menu");
	if(nav.className === "containerMenu") {
		nav.className += " smallNav"
	}
	else {
		nav.className = "containerMenu";
	}
}