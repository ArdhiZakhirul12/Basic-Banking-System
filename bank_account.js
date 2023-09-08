let saldo = 100000;

document.getElementById('saldo').textContent = saldo;

const updateSaldo = (saldo) =>{
  document.getElementById('saldo').textContent = saldo;
}
const tambahSaldo = () => {
  let tambah = window.prompt("masukkan jumlah saldo yang ingin ditambahkan!");
  saldo = saldo + +tambah;  
  updateSaldo(saldo);
}

const kurangSaldo = () =>{
  let kurang = window.prompt("masukkan jumlah saldo yang ingin dikurangi!");
  if (saldo < kurang){
    alert('saldo anda kurang')
  } else{
    saldo = saldo - +kurang;  
    updateSaldo();
  }
}

