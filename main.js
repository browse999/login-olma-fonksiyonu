function register (){

let kullaniciAdi = prompt('Kullanıcı Adınızı giriniz')
let  sifre = prompt('Sifrenizi belirleyiniz')

if (kullaniciAdi.length>0 && sifre.length>0 ){

    alert('Başarı ile Kayıt oldunuz Şifrenizi kimseyle paylaşmayın !')
}

else{

    alert('Lütfen tekrar deneyiniz.')
}
}



