var showresult = function(userinput) {
  var firstNum = parseFloat(document.getElementById('num1').value);
  var secondNum = parseFloat(document.getElementById('num2').value);
  var answer;
  var operator = userinput;

  switch (c) {
    case '1':
      answer = firstNum + secondNum;
      break;
    case '2':
      answer = firstNum - secondNum;
      break;
    case '3':
      answer = firstNum * secondNum;
      break;
    case '4':
      answer = firstNum / secondNum;
      break;
    case '5':
      answer = firstNum % secondNum;
      break;
    default:
      break;
  }

  document.getElementById('result').value = answer;

}
