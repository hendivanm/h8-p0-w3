/*
Directions: 
Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

Hints:
Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang dari array-nya.
Ingat, indeks sebuah array pada JavaScript dimulai dari 0.
Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!

Example:
input "hello world!"
output "!dlrow olleh"
*/

function balikString (kata) {
    var hasil = "";
      for (var i = kata.length -1; i >= 0; i--) {
          hasil += kata[i];
      }
      return hasil;
  }
  
console.log (balikString("hello world!"));

/*
function balikString (kata) {
    var hasil = "";
      for (var i = kata.length = 11; i > -1; i--) {
          hasil += kata[i];
      }
      return hasil;
  }
*/
