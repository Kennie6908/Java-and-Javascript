window.onload = function() {
  (document.getElementById("good-night")).style.display = "none";
  (document.getElementById("good-morning")).style.display = "none";
  (document.getElementById("good-afternoon")).style.display = "none";
}

function myTimer() {
	var d = new Date();
	document.getElementById("clock").innerHTML = d.toLocaleTimeString();
	
	if (d.getHours() >= 0 && d.getHours() < 12){
		document.getElementById("greeting").innerHTML = "Good morning!";
		(document.getElementById("good-morning")).style.display = "block";
		(document.getElementById("good-night")).style.display = "none";
		(document.getElementById("good-afternoon")).style.display = "none";
		document.body.style.backgroundColor = "#ffffcc";

	}
	
	else if (d.getHours() >= 12 && d.getHours() < 18){
		document.getElementById("greeting").innerHTML = "Good afternoon!";
		(document.getElementById("good-afternoon")).style.display = "block";
		(document.getElementById("good-night")).style.display = "none";
		(document.getElementById("good-morning")).style.display = "none";
		document.body.style.backgroundColor = "#cceeff";
	}
	
	else {
		document.getElementById("greeting").innerHTML = "Good night!";
		(document.getElementById("good-night")).style.display = "block";
		(document.getElementById("good-morning")).style.display = "none";
		(document.getElementById("good-afternoon")).style.display = "none";
		document.body.style.backgroundColor = "#001a33";
		document.getElementById("greeting").style.color =  "white";
		document.getElementById("header").style.color =  "white";
		document.getElementById("clock").style.color =  "white";
	}
}

setInterval(function() {
  myTimer();
}, 1000);

