function dataHandling2 (input) {
  input.splice (1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  
  console.log (input);

  var tanggal = input[3].split ("/");
  var date = tanggal.join ("-");
  var hari = Number (tanggal[0]);
  var bulan = Number (tanggal[1]);
  var tahun = Number (tanggal[2]);

  switch (bulan) {
    case 1: 
      hasil = "Januari";
      break;
    case 2:
      hasil = "Februari";
      break;
    case 3:
      hasil = "Maret";
      break;
    case 4:
      hasil = "April";
      break;
    case 5:
      hasil = "Mei";
      break;
    case 6:
      hasil = "Juni";
      break;
    case 7:
      hasil = "Juli";
      break;
    case 8:
      hasil = "Agustus";
      break;
    case 9:
      hasil = "September";
      break;
    case 10:
      hasil = "Oktober";
      break;
    case 11:
      hasil = "November";
      break;
    case 12:
      hasil = "Desember";
      break;
    default:
      hasil = "Bulan Invalid!";
      break;
  }
  console.log (hasil);
 
  tanggal.sort (function(a, b) { 
      return b - a

  });
  console.log (tanggal);

  console.log (date);

  var name = input[1];
  var irisan = name.slice (0, 14);
  
  console.log (irisan);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2 (input);