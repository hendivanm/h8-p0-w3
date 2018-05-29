function palindrome (kata) {
    var kataPalindrome = "";
    for (var i = (kata.length - 1); i >= 0; i--) {
        kataPalindrome = kataPalindrome + kata[i];
    }
    if (kataPalindrome.toLowerCase() === kata.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
  
console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("civic"));
console.log(palindrome("kasur rusak"));
console.log(palindrome("mister"));