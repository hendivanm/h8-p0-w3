function tentukanDeretGeometri (arr) {
    var hasil = [];
    var geometri = 0;
    if (arr[0] < arr[1]) {
      for (var i = 0; i < (arr.length-1); i++) {
        hasil += arr[i+1] / arr[i];
        if (hasil.length > 1 && hasil[i] === hasil[i-1]) {
          geometri += 1;
        }
      }
      return geometri === (hasil.length-1);
    }
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false