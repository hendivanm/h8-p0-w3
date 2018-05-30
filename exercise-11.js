function tentukanDeretAritmatika (arr) {
    var hasil = arr.slice(-1).pop() - arr.slice(-2, -1).pop();
    var aritmatika = true;
    
    for (var i = arr.length - 1; i > 0; i--) {
      if (hasil !== (arr[i] - arr[i-1])) {
        aritmatika = false;
      }
    }
    
    return aritmatika;
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false