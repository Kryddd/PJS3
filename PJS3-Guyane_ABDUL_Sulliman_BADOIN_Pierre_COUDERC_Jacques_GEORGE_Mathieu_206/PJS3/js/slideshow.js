var diapoIndex = 0;
var diapos = document.getElementsByClassName("diapo");
var points = document.getElementsByClassName("point");
var nbBlocs = document.getElementsByClassName("blocDiapo");
afficherDiapo();

function afficherDiapo() {
	changerDiapo();
	setTimeout(afficherDiapo, 3000);
}

function changerDiapo() {
	var i;
	
	for (i = 0; i < diapos.length; i++) {
		diapos[i].style.display = "none";
	}
	diapoIndex++;
	if (diapoIndex > 3) {
		diapoIndex = 1;
	}
	
	for (i = 0; i < points.length; i++) {
		points[i].className = points[i].className.replace(" actif", "");
	}
	
	diapos[diapoIndex - 1].style.display = "block";
	points[diapoIndex - 1].className += " actif";
	
	diapos[diapoIndex + 2].style.display = "block";
	points[diapoIndex + 2].className += " actif";
	
	diapos[diapoIndex + 5].style.display = "block";
	points[diapoIndex + 5].className += " actif";
	
	//afficherDiapo(5000);
}

function diapoSuivante() {
	changerDiapo();
}

function diapoPrecedente() {
	var i;
	
	for (i = 0; i < diapos.length; i++) {
		diapos[i].style.display = "none";
	}
	diapoIndex--;
	if (diapoIndex < 1) {
		diapoIndex = 3;
	}
	
	for (i = 0; i < points.length; i++) {
		points[i].className = points[i].className.replace(" actif", "");
	}
	diapos[diapoIndex - 1].style.display = "block";
	points[diapoIndex - 1].className += " actif";
	
	diapos[diapoIndex + 2].style.display = "block";
	points[diapoIndex + 2].className += " actif";
	
	diapos[diapoIndex + 5].style.display = "block";
	points[diapoIndex + 5].className += " actif";
}
