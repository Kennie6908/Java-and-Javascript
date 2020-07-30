var showresult = function(choice){
    var firstNum = parseFloat(document.getElementById('num1').value);
    var secondNum = parseFloat(document.getElementById('num2').value);
    var r;
    var c = choice;

    switch(c)
        {
        case '1':
            r = firstNum + secondNum;
            break;
        case '2':
            r = firstNum - secondNum;
            break;
        case '3':
            r = firstNum * secondNum;
            break;
        case '4': 
            r = firstNum / secondNum;
            break;
        case '5':
            r = firstNum % secondNum;
            break;
        default:
            break;  
        }
        
document.getElementById('result').value = r;

}