function pasanganTerbesar (num) {
    var number = num.toString().split ("");
    var hasil = [];
    for (var i = 0; i < number.length - 1; i++) {
      hasil[i] = Number (number[i] + number[i + 1]);
    }
    var terbesar = hasil[0];
    for (var j = 1; j < hasil.length; j++) {
      if (hasil[j] > terbesar) {
        terbesar = hasil[j];
      }
    }
    return terbesar;
}

console.log (pasanganTerbesar(641573));
console.log (pasanganTerbesar(12783456));
console.log (pasanganTerbesar(910233));
console.log (pasanganTerbesar(71856421));
console.log (pasanganTerbesar(79918293));