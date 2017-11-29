var diapoIndex = 0;
var diapos = document.getElementsByClassName("diapo");
var points = document.getElementsByClassName("point");
afficherDiapo();

function afficherDiapo(){
	changerDiapo();
	setTimeout(afficherDiapo, 3000,diapoIndex);
}

function changerDiapo(){
	var i;
	
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
}

function diapoSuivante(){
	changerDiapo();
}

function diapoPrecedente(){
	var i;
	
	for (i = 0; i < diapos.length; i++) {
		diapos[i].style.display = "none";
	}
	diapoIndex--;
	if (diapoIndex < 1){
		diapoIndex = 3;
	}
	
	for (i = 0; i < points.length; i++) {
		points[i].className = points[i].className.replace(" actif", "");
	}
	diapos[diapoIndex-1].style.display = "block";
	points[diapoIndex-1].className += " actif";
}
