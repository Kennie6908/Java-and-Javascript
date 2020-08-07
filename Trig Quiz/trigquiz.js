// Array of questions

var questions = [{
    question: 'What is sin (90 degrees)?',
    choices: ['0', '1', '1/2', 'undefined'],
    correctAnswer: 1
  },
  {
    question: 'What is sin (0 degrees)?',
    choices: ['0', '1', 'undefined', '1/2'],
    correctAnswer: 0
  },
  {
    question: 'What is tan (0 degrees)?',
    choices: ['0', '1', 'undefined', '1/2'],
    correctAnswer: 2
  },
  {
    question: 'What is tan (45 degrees)?',
    choices: ['2', 'undefined', '1', '0'],
    correctAnswer: 2
  },
  {
    question: 'What is cos (90 degrees)?',
    choices: ['1', '0', 'undefined', '1/2'],
    correctAnswer: 1
  }
];

var currentQuestion = 0;
var score = 0;
var isQuizOver = false;

// Create function to show question
function showCurrentQuestion() {
  // create all variables
  var question = questions[currentQuestion].question;
  var questionText = document.getElementById('question');
  var listOfChoices = document.getElementById('choiceList');
  var numberOfChoices = questions[currentQuestion].choices.length;
  var answer;

  // set question text and clear listofchoices from previous question
  questionText.innerHTML = question + " (" + (currentQuestion + 1) + "/" + questions.length + ")";
  listOfChoices.innerHTML = '';


  // loop to add all of the answer choices as list
  for (var i = 0; i < numberOfChoices; i++) {
    answer = questions[currentQuestion].choices[i];
    var listitem = document.createElement('li');
    listitem.innerHTML = '<input type="radio" value= "' + i + '" name="dynradio" />' + answer;
    listOfChoices.appendChild(listitem);
  }
}

window.addEventListener('DOMContentLoaded', function() {
  showCurrentQuestion();

  var messageBox = document.getElementById('messageBox');

  messageBox.style.display = 'none';

  document.getElementById('nextButton').addEventListener('click', function() {

    if (isQuizOver == false) {
      var checkedButton = document.querySelector('input[type=radio]:checked');

      if (checkedButton === null) {
        messageBox.innerHTML = 'Choose an answer. No blanks please!';
        messageBox.style.display = 'block';
      } else {
        messageBox.style.display = 'none';

        if ((parseInt(checkedButton.value)) === questions[currentQuestion].correctAnswer) {
          score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
          showCurrentQuestion();

        } else {
          displayScore();
          document.getElementById('nextButton').innerHTML = '<u>Play Again?</u>';
          isQuizOver = true;
        }
      }
    } else {
      isQuizOver = false;
      document.getElementById('nextButton').innerHTML = '<u>Next Question</u>';
      resetQuiz();
      showCurrentQuestion();
      hideScore();
    }

  });
});

function hideScore() {
  document.getElementById('result').style.display = 'none';
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  hideScore();
}

function displayScore() {
  document.getElementById('result').innerHTML = '<b>You scored: ' + score + ' out of ' + questions.length + '</b>';
  document.getElementById('result').style.display = 'block';
}
