window.onload = function () {
  
  var seconds = 0; 
  var milliseconds = 0; 
  var minutes = 0;
  var appendmilliseconds = document.getElementById("milliseconds");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');
  var interval;

  buttonStart.onclick = function() {
    
     clearInterval(interval);
     interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(interval);
  }
  

  buttonReset.onclick = function() {
    clearInterval(interval);
    milliseconds = "00";
	seconds = "00";
	minutes = "00";
    appendmilliseconds.innerHTML = milliseconds;
	appendSeconds.innerHTML = seconds;
	appendMinutes.innerHTML = minutes;
  }
  
   
  
  function startTimer () {
    milliseconds++; 
    
    if(milliseconds < 9){
      appendmilliseconds.innerHTML = "0" + milliseconds;
    }
    
    if (milliseconds > 9){
      appendmilliseconds.innerHTML = milliseconds;     
    } 
    
    if (milliseconds == 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendmilliseconds.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
	
	if (seconds == 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
	
	if (minutes > 9){
		appendMinutes.innerHTML = minutes;
	}
	
  }
  

}