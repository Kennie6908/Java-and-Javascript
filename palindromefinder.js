function palindrome(str) {
// use regex to find first non-alphanumeric character, then use replace to get rid of all of them.
    let newstring = str.replace(/[\W_]/g, "").toLowerCase();
    let newstring2 = str.replace(/[\W_]/g, "")
                        .toLowerCase()
                        .split("")
                        .reverse()
                        .join("")
// flips the word

    if (newstring === newstring2){
      return true;
    }
    else {
      return false;
    }
}
