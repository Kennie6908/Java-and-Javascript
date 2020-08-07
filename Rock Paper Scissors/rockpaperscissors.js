//Hide all images on load
window.onload = function() {
  document.getElementById("computerrockchoice").style.display = "none";
  document.getElementById("computerpaperchoice").style.display = "none";
  document.getElementById("computerscissorschoice").style.display = "none";
  document.getElementById("restart").style.display = "none";
}

var score = 0;

// creates computer choice function based on randomnumber
function computer() {
  var computerChoice = Math.random();

  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// function if human picks scissors
function humanscissors() {
  var humanmove = "scissors";
  var computermove = computer();
  document.getElementById("computerchoice").innerHTML = computermove + ".";
  if (humanmove == computermove) {
    document.getElementById("result").innerHTML = "It's a tie!";
    document.getElementById("computerrockchoice").style.display = "none";
    document.getElementById("computerpaperchoice").style.display = "none";
    document.getElementById("computerscissorschoice").style.display = "block";
  } else if (computermove == "paper") {
    document.getElementById("result").innerHTML = "You win!";
    document.getElementById("computerrockchoice").style.display = "none";
    document.getElementById("computerpaperchoice").style.display = "block";
    document.getElementById("computerscissorschoice").style.display = "none";
    increasescore();
  } else {
    document.getElementById("result").innerHTML = "You lose!";
    document.getElementById("computerrockchoice").style.display = "block";
    document.getElementById("computerpaperchoice").style.display = "none";
    document.getElementById("computerscissorschoice").style.display = "none";
    decreasescore();
  }
}

function humanpaper() {
  var humanmove = "paper";
  var computermove = computer();
  document.getElementById("computerchoice").innerHTML = computermove + ".";
  if (humanmove == computermove) {
    document.getElementById("result").innerHTML = "It's a tie!";
    document.getElementById("computerrockchoice").style.display = "none";
    document.getElementById("computerpaperchoice").style.display = "block";
    document.getElementById("computerscissorschoice").style.display = "none";
  } else if (computermove == "scissors") {
    document.getElementById("result").innerHTML = "You lose!";
    document.getElementById("computerrockchoice").style.display = "none";
    document.getElementById("computerpaperchoice").style.display = "none";
    document.getElementById("computerscissorschoice").style.display = "block";
    decreasescore();
  } else {
    document.getElementById("result").innerHTML = "You win!";
    document.getElementById("computerrockchoice").style.display = "block";
    document.getElementById("computerpaperchoice").style.display = "none";
    document.getElementById("computerscissorschoice").style.display = "none";
    increasescore();
  }
}

function humanrock() {
  var humanmove = "rock";
  var computermove = computer();
  document.getElementById("computerchoice").innerHTML = computermove + ".";
  if (humanmove == computermove) {
    document.getElementById("result").innerHTML = "It's a tie!";
    document.getElementById("computerrockchoice").style.display = "block";
    document.getElementById("computerpaperchoice").style.display = "none";
    document.getElementById("computerscissorschoice").style.display = "none";
    previous = computermove;
  } else if (computermove == "scissors") {
    document.getElementById("result").innerHTML = "You win!";
    document.getElementById("computerrockchoice").style.display = "none";
    document.getElementById("computerpaperchoice").style.display = "none";
    document.getElementById("computerscissorschoice").style.display = "block";
    increasescore();
  } else {
    document.getElementById("result").innerHTML = "You lose!";
    document.getElementById("computerrockchoice").style.display = "none";
    document.getElementById("computerpaperchoice").style.display = "block";
    document.getElementById("computerscissorschoice").style.display = "none";
    decreasescore();
  }
}

// function to increment score and display winning/losing messages.
function increasescore() {
  score = score + 1;
  document.getElementById("score").innerHTML = score;
  if (score == 10) {
    document.getElementById("finalresult").innerHTML = "Congrats, you have won this match!"
    document.getElementById("restart").style.display = "block";
  } else if (score == -10) {
    document.getElementById("finalresult").innerHTML = "Sorry, the computer has won this match!"
    document.getElementById("restart").style.display = "block";
  }
}

function decreasescore() {
  score = score - 1;
  document.getElementById("score").innerHTML = score;
  if (score == 10) {
    document.getElementById("finalresult").innerHTML = "Congrats, you have won this match!"
    document.getElementById("restart").style.display = "block";

  } else if (score == -10) {
    document.getElementById("finalresult").innerHTML = "Sorry, the computer has won this match!"
    document.getElementById("restart").style.display = "block";
  }
}

//restart function, used to clear everything and hide all images
function restart() {
  score = 0;
  document.getElementById("finalresult").innerHTML = "";
  document.getElementById("score").innerHTML = score;
  document.getElementById("restart").style.display = "none";
  document.getElementById("computerchoice").innerHTML = "";
  document.getElementById("computerrockchoice").style.display = "none";
  document.getElementById("computerpaperchoice").style.display = "none";
  document.getElementById("computerscissorschoice").style.display = "none";
  document.getElementById("result").innerHTML = "";
}
