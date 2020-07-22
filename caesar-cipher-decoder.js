//Decodes caesar cipher, which is just 13 letters over. 
// Definitely a better way to do it than switch statements. 
// I understand this is very inefficient and memory-consuming for long strings. Will improve in the future. 

function rot13(str) {
  var array = str.split("");
  var returnedstring = "";
  for (var i = 0; i < array.length; i++){
    switch(array[i]){
      case 'N':
        returnedstring += "A";
        break;
      case 'O':
        returnedstring += "B";
        break;
      case 'P':
        returnedstring += "C";
        break;
      case 'Q':
        returnedstring += "D";
        break;
      case 'R':
        returnedstring += "E";
        break;  
      case 'S':
        returnedstring += "F";
        break;   
      case 'T':
        returnedstring += "G";
        break;   
      case 'U':
        returnedstring += "H";
        break;   
      case 'V':
        returnedstring += "I";
        break;   
      case 'W':
        returnedstring += "J";
        break;   
      case 'X':
        returnedstring += "K";
        break;     
      case 'Y':
        returnedstring += "L";
        break;   
      case 'Z':
        returnedstring += "M";
        break;   
      case 'A':
        returnedstring += "N";
        break;   
      case 'B':
        returnedstring += "O";
        break;   
      case 'C':
        returnedstring += "P";
        break;   
      case 'D':
        returnedstring += "Q";
        break;   
      case 'E':
        returnedstring += "R";
        break;   
      case 'F':
        returnedstring += "S";
        break;   
      case 'G':
        returnedstring += "T";
        break;   
      case 'H':
        returnedstring += "U";
        break;   
      case 'I':
        returnedstring += "V";
        break;   
      case 'J':
        returnedstring += "W";
        break;   
      case 'K':
        returnedstring += "X";
        break;   
      case 'L':
        returnedstring += "Y";
        break;   
      case 'M':
        returnedstring += "Z";
        break;   
      default: 
        returnedstring += array[i];
        break;            
    }
  }
  return returnedstring;
}