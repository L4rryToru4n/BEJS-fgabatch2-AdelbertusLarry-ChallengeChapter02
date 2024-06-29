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
  else {
    return false;
  }
}

function isLessThanMinimumNumber(value) {
  /**
    * Test if the minimum number inputted
    * is not more than the datatype can hold.
  */
  if (value < Number.MIN_VALUE) {
    return true;
  }
  else {
    return false;
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
  else {
    return false;
  }
}

/*
* Classes
*/
class BankAccount {

  constructor(nama, noRekening, saldo) {
    this.nama = nama;
    this.noRekening = noRekening;
    this.saldo = saldo;
  }

  deposit(amount) {
    let jumlah = parseFloat(amount);

    if (isNumerical(jumlah)) {
      if (jumlah > 0) {
        if (isMoreThanMaximumNumber(jumlah)) {
          jumlah = Number.MAX_VALUE;
          return "Angka maksimum: 1.7976931348623157e308";
        }
        this.saldo += jumlah;
        return "Penambahan saldo berhasil.";
      }
      else {
        throw new AmountError("Gagal menambah saldo", "Angka penjumlahan dibawah 0 atau negatif", "AE-D01");
      }
    }
    else {
      throw new AmountError("Gagal menambah saldo", "Harap memasukkan angka", "AE-G00");
    }
  }

  withdraw(amount) {
    let jumlah = parseFloat(amount);

    if (isNumerical(jumlah)) {
      /* 
        Balance subtraction mustn't more than
        the value of the current balance
      */
      if (jumlah < this.saldo) {
        if (isLessThanMinimumNumber(jumlah)) {
          jumlah = Number.MIN_VALUE;
          return "Angka minimum: 0";
        }
        this.saldo -= jumlah;
        return "Pengurangan saldo berhasil.";
      }
      else {
        throw new AmountError("Gagal mengurangi saldo", "Angka pengurangan lebih besar daripada jumlah saldo", "AE-W01");
      }
    }
    else {
      throw new AmountError("Gagal mengurangi saldo", "Harap memasukkan angka", "AE-G00");
    }
  }
}

class DepositType extends BankAccount {

  constructor(nama, noRekening, saldo, tanggalPembukaan, tipe, bunga, tenor) {
    super(nama, noRekening, saldo)
    this.tanggalPembukaan = tanggalPembukaan;
    this.tipe = tipe;
    this.bunga = bunga;
    this.tenor = tenor;
  }

  informasiTabungan() {
    let jumlahTenor = this.saldo * this.bunga / this.tenor;
    return `Tanggal Pembukaan: ${this.tanggalPembukaan}, `+
    `Tipe Deposito: ${this.tipe}, `+
    `Jumlah Tenor: ${jumlahTenor.toFixed(3)} credits per ${this.tenor} bulan`;
  }
}

class AmountError extends Error {
  constructor(message, errorType, errorID) {
    super(message);
    this.errorType = errorType;
    this.errorID = errorID;
  }
}

let newAccount = new DepositType("Larry", "00147", 200.0, "01-06-2024", "Berjangka", 0.20, 6);

// View functions
function tampilSaldo() {
  document.getElementById("viewSaldo").innerHTML = "Saldo Anda : " + newAccount.saldo;
}

function tambahSaldo() {

  let jumlah = prompt("Masukkan jumlah uang yang akan ditambahkan", 0.0);

  alert("Memproses deposit..");
  setTimeout(() => {

    try {
      alert(newAccount.deposit(jumlah));
    }
    catch (error) {
      if (error instanceof AmountError) {
        alert(`Error ! [${error.errorID}] : ${error.errorType}, ${error.message}`);
        console.log(`AmountError [${error.errorID}]: ${error.errorType}, ${error.message}`);
      }
      else {
        alert(`Error ! : ${error.message}`);
        console.error(`Error : ${error.message}`);
      }
    }
    tampilSaldo();
  }, 100);
}

function kurangiSaldo() {

  let jumlah = prompt("Masukkan jumlah uang yang akan dikurangkan", 0.0);

  alert("Memproses withdraw..");
  setTimeout(() => {
    try {
      alert(newAccount.withdraw(jumlah));
    }
    catch (error) {
      if (error instanceof AmountError) {
        alert(`Error ! [${error.errorID}] : ${error.errorType}, ${error.message}`);
        console.log(`AmountError [${error.errorID}]: ${error.errorType}, ${error.message}`);
      }
      else {
        alert(`Error ! : ${error.message}`);
        console.error(`Error : ${error.message}`);
      }
    }
    tampilSaldo();
  }, 150);
}

function tampilInformasiTabungan() {

  alert("Menampilkan informasi tabungan..");
  setTimeout(() => {
    alert(newAccount.informasiTabungan());
    tampilSaldo();
  }, 100);
}

tampilSaldo();