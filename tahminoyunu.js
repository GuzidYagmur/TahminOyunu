const word = "Mercedes".toLowerCase();
const DenemeSayisi = 3;
alert("Merhaba kelime tahmini oyunuma hoşgeldiniz! Bir kelime tuttum tahmin etmeye çalışın.");
for(let tahminler=0; tahminler<DenemeSayisi; tahminler++){
    let KullaniciTahmini = prompt("İlk tahmininiz nedir? Kalan deneme: " + (DenemeSayisi - tahminler) + " ").toLowerCase();


       

       if(KullaniciTahmini===word){
        alert("Tebrikler kelimeyi doğru bildiniz!");
        break;
       }
       else{
        let KalanDeneme= DenemeSayisi - tahminler-1;
        if(KalanDeneme>0){
            alert("Yanlış bildiniz. Kalan deneme hakkınız:"+ KalanDeneme);
        }
        else{
            alert("Tahmin hakkınız bitti. Oyunu kaybettiniz");
        }
       }

    

}
