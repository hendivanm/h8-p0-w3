function angkaPalindrome (num) {
    for (var i = 0; i < num; i++) {
        num++;

        var angka = String (num);
        var hasilPalindrome = "";

        for (var j = (angka.length - 1); j >= 0; j--) {
          hasilPalindrome = hasilPalindrome + angka[j];
        }
        
        if (angka === hasilPalindrome) {
          return num;
        }
      }
  }
  
console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(112));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));