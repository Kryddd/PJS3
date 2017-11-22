var diapoIndex = 0;
afficherDiapo();

function afficherDiapo(){
	var i;
	var diapos = document.getElementsByClassName("diapo");
	var points = document.getElementsByClassName("point");
	for (i = 0; i < diapos.length; i++) {
		diapos[i].style.display = "none";
	}
	diapoIndex++;
	if (diapoIndex > diapos.length){
		diapoIndex = 1;
	}
	for (i = 0; i < points.length; i++) {
		points[i].className = points[i].className.replace(" actif", "");
	}
	diapos[diapoIndex-1].style.display = "block";
	points[diapoIndex-1].className += " actif";
	setTimeout(afficherDiapo, 2000);
}
