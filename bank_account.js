/*
  * Global Functions 
*/
function isNumerical(value) {
  /*
    Test whether the value is numerical
  */
  if (typeof value === 'number' &&
    !Number.isNaN(value)) {
    return true;
  }
}

function isMoreThanMinimumNumber(value) {
  /**
    * Test if the minimum number inputted
    * is not more than the datatype can hold.
  */
  if (value < Number.MIN_VALUE) {
    return true;
  }
}

function isMoreThanMaximumNumber(value) {
  /**
  * Test if the maximum number inputted
  * is not more than the datatype can hold.
  */
  if (value > Number.MAX_VALUE) {
    return true;
  }
}


class Account {
  // Add static property
  static bankName = "BINAR BANK";
  
  // Add constructor method
  constructor(nama, noRekening, saldo) {
    this.nama = nama;
    this.noRekening = noRekening;
    this.saldo = saldo;
  }

  // Add instance method view balance
  getSaldo() { 
    return this.saldo.toFixed(1);
  }

  // Add instance method add balance
  addSaldo(temp) {
    let jumlah = parseFloat(temp);

    if (isNumerical(jumlah)) {
      if (jumlah > 0) {
        if (isMoreThanMaximumNumber(jumlah)) {
          jumlah = Number.MAX_VALUE;
          return "Angka maximum mencapai batasan, Menggunakan angka 1.7976931348623157e308";
        }
        this.saldo += jumlah;
        return "Penambahan saldo berhasil.";
      }
      else {
        return "Gagal menambah saldo. Angka penjumlahan dibawah 0 atau negatif";
      }
    }
    else {
      return "Gagal menambahkan saldo. Harap memasukkan angka";
    }
  }

  // Add instance method subtract balanece
  substractSaldo(temp) {
    let jumlah = parseFloat(temp);

    if (isNumerical(jumlah)) {
      /* 
        Balance subtraction mustn't more than
        the value of the current balance
      */
      if (jumlah < this.saldo) {
        if (isMoreThanMinimumNumber(jumlah)) {
          jumlah = Number.MIN_VALUE;
          return "Angka minimum kecil mencapai batasan, menggunakan angka 0";
        }
        this.saldo -= jumlah;
        return "Pengurangan saldo berhasil.";
      }
      else {
        return "Gagal mengurangi saldo. Angka pengurangan lebih besar daripada jumlah saldo";
      }
    }
    else {
      return "Gagal menambahkan saldo. Harap memasukkan angka";
    }
  }

  // Add static method
  static objProperties() {
    return `Account properties : nama(string), noRekening(string), saldo(Float)`;
  }
}

// Instantiate a new Account
let account1 = new Account("Larry", "99768", 100.0);


// Class tests
// console.log(account1);
// console.log(account1.getSaldo());
// console.log(account1.addSaldo(-10.0));
// console.log(account1.getSaldo());
// console.log(account1.substractSaldo(101.0));
// console.log(account1.getSaldo());
// console.log(Account.bankName);
// console.log(Account.objProperties());


// View functions
function tampilSaldo() {
  document.getElementById("viewSaldo").innerHTML = "Saldo Anda : " + account1.getSaldo();
}

function tambahSaldo() {
  let jumlah = prompt("Masukkan jumlah uang yang akan ditambahkan", 0.0);
  alert(account1.addSaldo(jumlah));
  tampilSaldo();
}

function kurangiSaldo() {
  let jumlah = prompt("Masukkan jumlah uang yang akan dikurangkan", 0.0);
  alert(account1.substractSaldo(jumlah));
  tampilSaldo();
}

tampilSaldo();