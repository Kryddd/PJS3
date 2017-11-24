var diapoIndex = 0;
var diapos = document.getElementsByClassName("diapo");
var points = document.getElementsByClassName("point");
afficherDiapo(diapoIndex);

function afficherDiapo(diapoIndex){
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
	setTimeout(afficherDiapo, 3000,diapoIndex);
}

function diapoSuivante(){
	diapos[diapoIndex].style.display = "none";
	points[diapoIndex].className = points[diapoIndex].className.replace(" actif", "");
	diapos[diapoIndex+1].style.display = "block";
	points[diapoIndex+1].className += " actif";
}

function diapoPrecedente(){
	diapos[diapoIndex].style.display = "none";
	points[diapoIndex].className = points[diapoIndex].className.replace(" actif", "");
	diapos[diapoIndex-1].style.display = "block";
	points[diapoIndex-1].className += " actif";
}
