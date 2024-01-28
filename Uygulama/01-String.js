// Kullanılan metotlar
/*
.indexOf
.substring
.trimEnd()
.includes
.replace
.trimStart()
.lastIndexOF
.toUpperCase
.replaceAll
.slice
.trim()
.length
.toLowerCase
*/

//UYGULAMA SORULARI
// -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
// 2- Hikayenin toplam index sayısı kaçtır.
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
// 5- 15. karakterden sonrasını yazdırın. 15 dahil. ( 2 farklı yöntem kullanarak)
// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
// 8- Son 5 karakter haric hikayenizi yazdırın.
// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
// 12- Bütün metni büyük harfe çevirin.
// 13- Bütün metni küçük harfe çevirin.
// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun. 
//   a- Başındaki boşlukları kaldırın.
//   b- Sonundaki boşlukları kaldırın.
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
// 16- Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun. "Ara vakti. İyi dinlenmeler"
let myStory ="Merhaba Dünya nasilsin? Bugün hava guzel mi? guzel bir hava oldugunu dusunuyorum"
console.log(myStory);
console.log("Hikayenin Uzunluğu: " + myStory.length);
console.log("Hikayenin index Uzunluğu: " + myStory.length-1);
let arananKelime="guzel";
let ilkIndex = myStory.indexOf(arananKelime);
let sonIndex = myStory.lastIndexOf(arananKelime);
console.log("İlk Tekrar Edilen Kelimenin Index'i: " + ilkIndex);
console.log("Son Tekrar Edilen Kelimenin Index'i: " + sonIndex);
let yontem1ilkAranan15=myStory.substring(0,15);
console.log("1.yontem",yontem1ilkAranan15);
let yontem2ilkAranan15=myStory.slice(0,15);
console.log("2.yontem",yontem2ilkAranan15);
let son15Karakter1 =myStory.substring(myStory.length-15);
console.log("Yöntem 1:", son15Karakter1);
let son15Karakter2 = myStory.slice(-15);
console.log("Yöntem 2:", son15Karakter2);
let karakterler11_10=myStory.substring(11,21);
console.log("11_10:", karakterler11_10);
let myStorynotLast5=myStory.slice(0, -5);
console.log("Son5Haric", myStorynotLast5);
let IceriyorMu = myStory.includes("Merhaba");
console.log("Merhaba Kelimesi Var Mi? "+IceriyorMu)
let newMyStory=myStory.replace(/i/g, 'ı');
console.log("Yeni Hikaye:", newMyStory);
let a_Change_e=myStory.replace(/a/,'e');
console.log("a lar e oldu: ",a_Change_e);
let buyukHarfli=myStory.toUpperCase();
console.log(buyukHarfli);
let kucukHarfli=myStory.toLowerCase();
console.log(kucukHarfli);
//let kullaniciIsmi = prompt("Lütfen adinizi girin:");
// console.log("Hoşgeldin, " + kullaniciIsmi);
// console.log(`Hoşgeldin, ${kullaniciIsmi}`);
// let basindakiBoslukKalkmis=kullaniciIsmi.trimStart();
// let sonundakiBosluklarKalkmis=kullaniciIsmi.trimEnd();
// let bosluksuzHali=kullaniciIsmi.trim();
// console.log("Başindaki Boşluklari Kaldirilmiş: '" + basindakiBoslukKalkmis + "'");
// console.log("Sonundaki Boşluklari Kaldirilmiş: '" + sonundakiBosluklarKalkmis + "'");
// console.log("Baştaki ve Sondaki Boşluklari Kaldirilmiş: '" + bosluksuzHali + "'");

//  let isim = "sERGENiçŞ";
//  let duzenlenmisIsim = isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase();
//  let cikti = `Benim Adim: ${duzenlenmisIsim}`;
//  console.log(cikti);
//  let mesaj = "Ara vakti. İyi dinlenmeler";
//  alert(mesaj);
//  let buyukIsim = isim.toLocaleUpperCase('tr-TR');
//  let kucukIsis=isim.toLowerCase('tr-TR');
//  let cikti2 = `Benim Adim: ${buyukIsim}`;
//  let cikti3 = `Benim Adim: ${kucukIsis}`;
//  console.log(cikti2);
//  console.log(cikti3);

// let randomSayi = Math.random();

// let carpilmisSayi = randomSayi * 11;

// let sonuc = Math.floor(carpilmisSayi);
// let sonucc=sonuc+5;
// console.log("Random Deger:", sonucc);


// - Math.sqrt 
// - .toFixed 
// - Math.min 
// - Math.max 
// - Math.abs 
// - Math.pow 
// - .toPrecision
// - Math.floor 
// - Math.trunc 
// - Math.ceil 

// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
// 7-) bir sayının karekökünü bulun.
// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)

let negatifSayi=-15;
let mutlakDeger=Math.abs(negatifSayi);
console.log(mutlakDeger);

let ondalikSayiYukari=5.67;
let yukariYuvarla=Math.ceil(ondalikSayiYukari);
console.log(yukariYuvarla);

let ondalikAsagi=5.67;
let yuvarlaAsagi=Math.floor(ondalikAsagi);
console.log(yuvarlaAsagi);

let sayilar = [6, 15, -7, 0, 80, -35];
let enBuyukSayi = Math.max(...sayilar);
console.log(enBuyukSayi);

let enKucukSayi = Math.min(...sayilar);
console.log(enKucukSayi);

let ondalikSayi = 12.56789;
let yuvarlaUcHane = ondalikSayi.toFixed(3);
console.log(yuvarlaUcHane);

let sayiKok = Math.sqrt(25);
console.log(sayiKok);

let taban = 2;
let us = 3;
let usSonuc = Math.pow(taban, us);
console.log(usSonuc);

let sayiAltHane = 123.456789;
let altHaneSayi = sayiAltHane.toPrecision(6);
console.log(altHaneSayi);

let tamSayiHal = Math.trunc(123.456789);
console.log(tamSayiHal);

let rastgeleSayi = Math.floor(Math.random() * 101);
console.log(rastgeleSayi);
// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

// 4- Kullanıcıdan temsili bir oy verme ve aday olma durum sorgusu yapmak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.
// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.
// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir. 



let sayi = 7;

if (sayi > 0) {
    console.log("Sayi pozitif.");
} else if (sayi < 0) {
    console.log("Sayi negatif.");
} else {
    console.log("Sayi sifir.");
}

let sayi1 = 15;
let sayi2 = 10;

if (sayi1 > sayi2) {
    console.log("İlk sayi, ikinci sayidan büyük.");
} else if (sayi1 < sayi2) {
    console.log("İlk sayi, ikinci sayidan küçük.");
} else {
    console.log("İki sayi eşit.");
}

let kelime = "kayak";
let tersKelime = kelime.split("").reverse().join("");

if (kelime === tersKelime) {
    console.log("Kelime palindromdur.");
} else {
    console.log("Kelime palindrom değildir.");
}

let yas = 30;
let turkVatandasi = true;

if (turkVatandasi) {
    if (yas >= 30) {
        console.log("Oy kullanabilir ve Aday olabilir.");
    } else if (yas >= 18) {
        console.log("Oy kullanabilir. Aday olamaz");
    } else {
        console.log("18 yaşindan küçük, aday olamaz ve oy kullanamaz.");
    }
} else {
    if (yas >= 18) {
        console.log("Yabanci uyruklu, oy kullanabilir.");
    } else {
        console.log("18 yaşindan küçük, yabanci uyruklu aday olamaz ve oy kullanamaz.");
    }
}




// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)



let ayIsmi = "kasim";

switch (ayIsmi.toLowerCase()) {
    case "ocak":
    case "mart":
    case "mayis":
    case "temmuz":
    case "agustos":
    case "ekim":
    case "aralik":
        console.log(`${ayIsmi} 31 gün içerir.`);
        break;
    case "nisan":
    case "haziran":
    case "eylül":
    case "kasim":
        console.log(`${ayIsmi} 30 gün içerir.`);
        break;
    case "subat":
        console.log(`${ayIsmi} 28 veya 29 gün içerir.`);
        break;
    default:
        console.log("Geçersiz ay ismi.");
        break;
}

let aracMarkasi = "bmw";
let aracRengi = "sari";
let stokDurumu;

switch (aracMarkasi.toLowerCase()) {
    case "bmw":
        switch (aracRengi.toLowerCase()) {
            case "siyah":
                stokDurumu = "Var";
                break;
            case "beyaz":
                stokDurumu = "Var";
                break;
            case "mavi":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    case "mercedes":
        switch (aracRengi.toLowerCase()) {
            case "siyah":
                stokDurumu = "Var";
                break;
            case "beyaz":
                stokDurumu = "Var";
                break;
            case "gri":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    case "audi":
        switch (aracRengi.toLowerCase()) {
            case "siyah":
                stokDurumu = "Var";
                break;
            case "beyaz":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    default:
        stokDurumu = "Marka bilgisi geçersiz.";
        break;
}

console.log(`Stok Durumu: ${stokDurumu}`);

function tersCevir(cumle) {
    let kelimeler = cumle.split(' ');
    let tersCevrilmisKelimeler = kelimeler.map(function(kelime) {
        return kelime.split('').reverse().join('');
    });
    let yeniCumle = tersCevrilmisKelimeler.join(' ');
    return yeniCumle;
}

let orijinalCumle = "bugun hava cok guzel";
let tersCevrilmisCumle = tersCevir(orijinalCumle);

console.log(tersCevrilmisCumle);

