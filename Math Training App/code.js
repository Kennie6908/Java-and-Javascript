var operator = 0;
var score = 0; 
var correctanswer;
var lives = 3;     
setText("Score", score + "/10 ");
setText("Lives", "Lives remaining: " + lives);

// Set screen to choose operator
onEvent("StartButton", "click", function(event) {
  clearScore();
  setScreen("Operators");
  
});

// assign operator based on user input, set screen to math
onEvent("AddBtn", "click", function(event) {
  operator = 1;
  setScreen("MathScreen");
  math();

});

onEvent("SubtractBtn", "click", function(event) {
  operator = 2;
  setScreen("MathScreen");
  math();
});

onEvent("MultiplyBtn", "click", function(event) {
  operator = 3;
  setScreen("MathScreen");
  math();
});

onEvent("DivideBtn", "click", function(event) {
  console.log("DivideBtn clicked!");
  operator = 4;
  setScreen("MathScreen");
  math();
});

onEvent("All4Btn", "click", function(event) {
  console.log("All4Btn clicked!");
  operator = 5;
  setScreen("MathScreen");
  math();
});

onEvent("Submit", "click", function(event) {
  console.log("Submit clicked!");
  check();
});

onEvent("Next", "click", function(event) {
  scoreCheck();
  reset();
  math();
});

onEvent("Quit", "click", function(event) {
  completereset();
});

onEvent("Exit", "click", function(event) {
 setScreen("Start");
 clearScore();
});

onEvent("Rechoose", "click", function(event) {
  completereset();
});

onEvent("TryAgain", "click", function(event) {
  completereset();
});

onEvent("CompleteRestart", "click", function(event) {
  setScreen("Start");
  clearScore();
  reset();
});

onEvent("CompleteReset2", "click", function(event) {
  setScreen("Start");
  clearScore();
  reset();
});

// main function, calls operator function based on input, contains all operator functions
function math (){
 
  hideNext();
  
  if (operator == 1){ 
  addition();
  }

    else if (operator == 2){
    subtraction();
  }
  
    else if (operator == 3){
    multiplication();
  }
  
    else if (operator == 4){
    division();
    }
    
    else {
      var all4decider = randomNumber(1,4);
      console.log(all4decider);
      if (all4decider == 1){
        addition();
      }
      else if (all4decider == 2){
        subtraction();
      }
      else if (all4decider == 3){
        multiplication();
      }
      else {
        division();
      }
      
    }
  
  function addition(){
    var a = randomNumber(0,99);
    var b = randomNumber(0,99);
     correctanswer = a + b;
    setText("Problem", a + " + "  + b);    
  }
  
  function subtraction(){
    var a = randomNumber(0,99);
    var b = randomNumber(0,99);
     correctanswer = a - b;
    setText("Problem", a + " - "  + b);    
  }
  
  function multiplication(){
    var a = randomNumber(0,12);
    var b = randomNumber(0,12);
     correctanswer = a * b;
    setText("Problem", a + " * "  + b);    
  }
  
  function division(){
    var a = randomNumber(0,5);
    var b = randomNumber(1,5);
    a *= 2;
    b *= 2;
    if(b == 6){
      b = 4;
    }
    correctanswer = a / b;
    setText("Problem", a + " / "  + b);    
  }
  
}

  function check(){
    var input = getText("Input");
    if (correctanswer != input){
      setText("Result", "Incorrect, try again!");
      lives--; 
      checkLives();
      updateLivesText();
    }
    else {
    setText("Result", "Correct!");
    hideQuit();
    updateScore();
    }

}

function hideNext(){
  showElement("Quit");
  hideElement("Next");
}

function hideQuit(){
  hideElement("Quit");
  showElement("Next");
}

function updateScore(){
  score++;
  setText("Score", score + "/10 ");
}

function reset(){
  setText("Input", "");
  setText("Result", "");
}

function scoreCheck(){
  if (score >= 10){
  setScreen("GameOver");
  }
}

function clearScore(){
  score = 0;
  setText("Score", score + "/10");
}

function completereset(){
  scoreCheck();
  setScreen("Operators");
  clearScore();
  reset();
  resetLives();
  updateLivesText();
}

function checkLives(){
  if (lives == 1){
    setProperty("Lives", "text-color", "red");
  }
  
  if (lives == 0){
    setScreen("LosingScreen");
    clearScore();
    resetLives();
  }
}

function resetLives(){
  lives = 3;
  setProperty("Lives", "text-color", "#153d73");
}

function updateLivesText(){
  setText("Lives", "Lives remaining: " + lives);
}

