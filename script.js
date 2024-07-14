pesanAkhir1 = inip[iden];
pesanAkhir3 = "<br>terima kasih, dan aku cinta kamuuu";

dokumen.getElementById("cintai").onclick = fungsi() {
    jika(fungsiAwal == 0){
        loveIn.style = "transisi:semua .8s mudah;transformasi:skala(15);opacity:0";
        ftAwal.style = "opacity:0";
        wallpaper.style = "transformasi: skala(1);";
        ket.style = "tampilan:tidak ada";
        fungsiAwal = 1; setTimeout(waktuawal, 300);
        setTimeout(bqmuncul, 400)
    }
}

aktifkan = 0; aktifkan = 1;
dokumen.getElementById("bq").onclick = fungsi() {
    jika(diaktifkan == 1){
        setTimeout(waktu akhir, 400);waktu akhir();
    }
}

  fungsi hsementara(){
    ketlanjut.style = "posisi:relatif;";
    thisgeser += 1; aktigeser = 0;
}
  
  fungsi munculkembali(){
    jika(thisgeser < totalPesan){
        ketlanjut.style = "posisi:relatif;opasitas:.8";
        aktif = 1;
        identik += 1;
        pesanAkhir1 = inip[iden];
    }
    jika(thisgeser == totalPesan){ setTimeout(mulaiketikA, 500); }
}
  
  fungsi aksiakhir(){
    setTimeout(bqmuncul, 400);
}
  
  fungsi initengahan(){
    loveIn.style = "tampilan:tidak ada"; ket.style = "tampilan:tidak ada";
    Konten.gaya = "opacity:1;margin-atas:7vh";
}
  
  fungsi bqmuncul(){
    bq.style = "margin-top:0;posisi:relatif;opacity:1;visibilitas:terlihat;transformasi:skala(1);";
    audio.play(); waktumuncul();
}
  
  fungsi tombol(){ Tombol.style = "opacity:1;transform: skala(1);"; fungsi = 1; }
document.getElementById("Oleh").onclick = fungsi() {
    jika(fungsi == 1){ Tombol.style = ""; menu(); fungsi = 0; }
}

var i = 1;fungsi defwp(){ wallpaper.style = "transformasi: skala(1)"; }
  fungsi kalimatakhir(){
    jika(iden >= 1){
        jika(iden % 2 == 0) { wallpaper.style = "transformasi: skala(1)"; } yang lain { wallpaper.style = "transformasi: skala(1.5)"; }
        wallpaper.src = iniwp[iden];
    }
    kalimat.innerHTML = "";
    new TypeIt("#kalimat", {
        string: ["" + pesanAkhir1], startDelay: 10, kecepatan: 40, kursor: benar,
        setelah Lengkap: fungsi(){
            kalimat.innerHTML = pesanAkhir1;
            identik += 1;
            pesanAkhir1 = inip[iden];
            jika(pesanAkhir1== inip[totalPesan + 1]){ ftoAwal.src = ftoAkhir.src; ftAwal.style = "margin-top:80px;transform: skala(.8);transisi: semua .8s mudah"; setTimeout(jjfoto, 400); setTimeout(tombol, 1500) }
    //munculkembali();
},}).pergi();
  }
  
  fungsi jjfoto(){ ftoAwal.style.animation = "jj 1s alternatif tak terhingga"; }

  fungsi mulaiketikA(){
    setInterval(jatuh, 300);
    bodyblur.style.opacity = ".15";
    pesanAkhir.style = "posisi:relatif;opasitas:1;visibilitas:terlihat;transformasi:skala(1)";
    new TypeIt("#pesanAkhir", {
        string: ["" + pesanAkhir3], startDelay: 100, speed: 50, kursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
        setelah Lengkap: fungsi(){
        pesanAkhir.style.animation = "rto .8s alternatif tak terbatas";
        //setTimeout(tombol,700);
    },}).pergi();
  }
  
  fungsi async menuju(){
    var { nilai: jawaban } = menunggu swals.fire({
        title: 'Isi Pesan Untukku ', input: 'text', allowOutsideClick: false, showCancelButton: false,
  { \displaystyle { {nama file } } });
    jika(jawaban && jawaban.length < 19){
        window.jawaban = jawaban;
        pesanwhatsapp = jawaban;
        await swals.fire('Ben Lebih Romantis, Balesi neng wa ya cintaku. :)', 'success');
    lokasi jendela = "https://api.whatsapp.com/send?phone=08976319252&text=" + pesanwhatsapp;
        tombol();
    } kalau tidak {
        await swals.fire('Ups!', 'Jawaban e rak oleh kosong sayangku aura!'); jawab();
    }
}