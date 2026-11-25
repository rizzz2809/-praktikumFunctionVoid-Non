console.log('Soal 1')
 function kartuNama(nama, kelas, hobi){
     console.log('-------------------------');
     console.log('Nama : ' + nama );
     console.log('Kelas : ' + kelas);
     console.log('Hobi : ' + hobi)
 }

 kartuNama('Elang Febrian Yuswantoro', 'X RPL 2', 'Nonton Horeggg');
 kartuNama('Nino Lucky Ferdiansyah', 'X RPL 2', 'Nyupir Bis');
 kartuNama('Fergie Ardiansyah', 'X RPL 2', 'Ongkekan')

console.log('==================')
console.log('==================')
console.log('Soal 2')
 function luasPersegiPanjang(panjang, lebar){
     return panjang * lebar;
 } 
 function kelilingPersegiPanjang(panjang, lebar){
     return panjang + lebar;
 }


 let hasilLuas = luasPersegiPanjang(12, 6);
 let hasilKeliling = kelilingPersegiPanjang(14, 8);

 console.log('Luas Persegi Panjang Adalah: ' + hasilLuas);
 console.log('Keliling Persegi Panjang Adalah: ' + hasilKeliling);

console.log('==================')
console.log('==================')
console.log('Soal 3')
function hitungRataRata(n1, n2, n3){
    return (n1 + n2 + n3) /3
}

function tentukanPredikat(rata){
    if (rata >= 85){
        return 'A';
    } else if (rata >= 75){
        return 'B';
    } else if (rata >= 60){
        return 'C';
    } else {
        return 'D'
    }
}

function cetakRapor(nama, n1, n2, n3){
    let rata = hitungRataRata(n1,n2,n3);
    let predikat = tentukanPredikat(rata);

    console.log('Nama: ' +nama);
    console.log('Rata-rata: '+rata.toFixed(2));
    console.log('Predikat: '+predikat);
    console.log('-------------------------')
}

cetakRapor('Elang', 75, 80, 83);
cetakRapor('Nino', 90, 88, 90);
cetakRapor('Fergie', 70, 78, 80);