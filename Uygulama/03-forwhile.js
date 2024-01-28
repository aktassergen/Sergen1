// // -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// // kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let baslangic = parseInt(prompt("baslangic sayisini girin:"));
// let bitis = parseInt(prompt("Bitiş sayisini girin:"));
// let toplam = 0;

// if (isNaN(baslangic) || isNaN(bitis) || baslangic >= bitis || baslangic < 0 || bitis < 0) {
//     alert("Geçersiz giriş! baslangic sayisi, bitiş  sayisindan küçük, her ikisi de pozitif tam sayi olmalidir.");
//     console.log("Geçersiz giriş! baslangic sayisi, bitiş  sayisindan küçük, her ikisi de pozitif tam sayi olmalidir.");
// } else {
//     for (let i = baslangic; i <= bitis; i++) {
//         toplam += i;
//     }
//     console.log(`baslangic ve bitiş arasindaki sayilarin toplami: `+toplam);
//     alert(`baslangic ve bitiş arasindaki sayilarin toplami: `+toplam);
// }


// // -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// // Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// const ogrenciSayisi = 5;
// let toplamNot = 0;
// let gecenOgrenciSayisi = 0;

// for (let i = 1; i <= ogrenciSayisi; i++) {
//     let not = parseInt(prompt(`Öğrenci ${i} notunu girin:`));

//     if (isNaN(not) || not < 0 || not>=100) {
//         console.log("Geçersiz not girişi! Lütfen pozitif bir tam sayi girin veya 100 den kucuk bir sayi");
//         i--; 
//     } else {
//         toplamNot += not;

//         if (not >= 60) {
//             gecenOgrenciSayisi++;
//         }
//     }
// }

// let sinifOrtalamasi = toplamNot / ogrenciSayisi;

// console.log("sinif ortalamasi: "+sinifOrtalamasi);
// alert("sinif ortalamasi: "+sinifOrtalamasi);
// console.log("Geçen Öğrenci Sayisi: "+gecenOgrenciSayisi);
// alert("Geçen Öğrenci Sayisi: "+gecenOgrenciSayisi);


// // -------------------While - Sayı Tahmin uygulaması-----------------------
// // Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.


// let randomSayi = Math.floor(Math.random() * 10) + 1; 
// let hak = 3;

// while (hak > 0) {
//     let tahmin = parseInt(prompt("1-10 arasinda bir sayi tahmin edin:"));

//     if (isNaN(tahmin) || tahmin < 1 || tahmin > 10) {
//         console.log("Geçersiz giriş! Lütfen 1-10 arasinda bir tam sayi girin.");
//         alert("Geçersiz giriş! Lütfen 1-10 arasinda bir tam sayi girin.");
//         continue;
//     }

//     if (tahmin === randomSayi) {
//         console.log("Tebrikler! Doğru Tahmin.");
//         alert("Tebrikler! Doğru Tahmin.");
//         break;
//     } else {
//         //console.log(`yanlis tahmin. Kalan hak: `+(--hak));
//         alert(`yanlis tahmin. Kalan hak: `+(--hak));

//         if (tahmin < randomSayi) {
//             console.log("Daha büyük bir sayi girin.");
//             alert("Daha büyük bir sayi girin.");
//         } else {
//             console.log("Daha küçük bir sayi girin.");
//             alert("Daha küçük bir sayi girin.");
//         }
//     }
// }

// console.log(`Doğru sayi: `+randomSayi);

// // -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// // Kurallar:
// // While döngüsü kullanılacak.
// // Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// // Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// // Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.


// let toplamFiyat = 0;

// while (true) {
//     let urunAdi = prompt("Ürün ismini girin veya 'onayla' yazarak alişverişi tamamlayin:");

//     if (urunAdi.toLowerCase() === "onayla") {
//         console.log("Sepet Toplam Tutar: "+toplamFiyat);
//         break;
//     } else {
//         let urunFiyati = parseInt(prompt(urunAdi+ "ürününün fiyatini girin:"));

//         if (!isNaN(urunFiyati)) {
//             toplamFiyat += urunFiyati;
//         } else {
//             console.log("Geçersiz fiyat girişi, lütfen tekrar deneyin.");
//         }
//     }
// }


// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.
// function myFunc (){}
// const myFunc2 = function(){}
// const myFunc3 = () => {}
// Buradan itibaren yalnızca arrow function kullanıyoruz.




// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const carpim = (a, b) => a * b;
//console.log("(Çarpım):", carpim(5, 3));

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
const toplamCumle = sentence => sentence.split(' ').length;
// const Cumle = "Merhaba, dünya! Bu bir örnek cümledir.";
// const toplam = toplamCumle(Cumle);
// console.log(`Cümledeki kelime sayisi: `+toplam);

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

function factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}
// const num = 5;
// const result = factorial(num);
// console.log(`${num} faktöriyel: ${result}`);

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
const asalMi = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0)
        {
            return false;
        } 
    }
    return true;
};
//console.log("(Asal Mı?):", asalMi(13));

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
function findMax(arr) {
    return Math.max(...arr);
}

//const TestArr = [10, 5, 8, 2, 7];
//console.log(" (En Büyük Sayı):", findMax(TestArr));


// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

function sumArray(arr) 
{
    return arr.reduce(function(total, num) 
    {
        return total + num;
    },0);
}
//console.log(" (Dizi Toplamı):", sumArray(TestArr));

// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

function findMaxArrow(arr) {
    return Math.max.apply(null, arr);
}

function sumArrayArrow(arr) {
    return arr.reduce(function(total, num) {
        return total + num;
    }, 0);
}
//console.log(" (En Büyük Sayı - Arrow):", findMaxArrow(sampleArray));
//console.log(" (Dizi Toplamı - Arrow):", sumArrayArrow(sampleArray));

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

function reverseString(str) {
    return str.split('').reverse().join('');
}

//const reversedStr = reverseString("Merhaba");
//console.log("8.  (String Ters Çevirme):", reversedStr);

// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.

function shuffleArray(arr) {
    const arrCopy = arr.slice();
    return arrCopy.sort(function() {
        return Math.random() - 0.5;
    });
}


// const sampleArray = [1, 2, 3, 4, 5];
// const shuffledArray = shuffleArray(sampleArray);
// console.log("(Dizi Karıştırma):", shuffledArray);

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

const findPositiveDivisors = num => {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisors.push(i);
    }
    return divisors;
};

//const divisors = findPositiveDivisors(12);
//console.log("10.  (Pozitif Bölenler):", divisors);

// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

//const countOccurrences = (str, char) => (str.match(new RegExp(char, 'g')) || []).length;

//const occurrenceCount = countOccurrences("merhaba", "a");
//console.log("11.  (Karakter Sayısı):", occurrenceCount);

// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

function sumNumbers() {
    const numbers = [];

    for (let i = 0; i < arguments.length; i++) {
        numbers.push(arguments[i]);
    }

    return numbers.reduce(function(total, num) {
        return total + num;
    }, 0);
}
//const sumOfNumbers = sumNumbers(2, 5, 8, 3);
//console.log("12.  (Sayıların Toplamı):", sumOfNumbers);



function calculateIterations(number) {
    let iterations = 0;

    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = (number * 3) + 1;
        }
        iterations++;
    }

    return iterations;
}

console.log(calculateIterations(5));  
console.log(calculateIterations(6)); 



const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];


// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach(eleman => console.log(eleman));

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach(eleman => eleman % 2 === 0 && console.log(eleman));

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
let carpilanDizi = [];
dizi.forEach(eleman => carpilanDizi.push(eleman * 2));
console.log(carpilanDizi);

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let toplam = 0;
dizi2.forEach(eleman => toplam += eleman);
console.log("Toplam:", toplam);

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((eleman, index, arr) => {
  console.log(eleman);
  if (index === arr.length - 1) {
    console.log(eleman+": Bu dizinin son elemanidir.");
  }
});

// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
let buyukHarfDizi = dizi1.map(eleman => eleman.toUpperCase());
console.log(buyukHarfDizi);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
let toplamaDizi = dizi.map(eleman => eleman + Math.floor(Math.random() * 11));
console.log(toplamaDizi);

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const tersCevrilmisDizi = dizi1.map(kelime => kelime.split("").reverse().join(""));
console.log(tersCevrilmisDizi);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
let stringDizi = dizi2.map(eleman => eleman.toString());
console.log(stringDizi);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
let tersCevirDiziKendiAlgoritma = dizi1.map(eleman => {
  let tersCevrilmis = "";
  for (let i = eleman.length - 1; i >= 0; i--) {
    tersCevrilmis += eleman[i];
  }
  return tersCevrilmis;
});
console.log(tersCevirDiziKendiAlgoritma);

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
let ciftSayilar = dizi.filter(eleman => eleman % 2 === 0);
console.log("cift sayilar: "+ciftSayilar);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
let belirliUzunluktakiStringler = dizi2.filter(eleman => eleman.length === 4);
console.log("4 uzunluğundakiler:", belirliUzunluktakiStringler);

// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
let toplam2 = dizi.reduce((acc, eleman) => acc + eleman + 2, 0);
console.log("Toplam: ", toplam2);

// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
let ilkCiftSayi = dizi.find(eleman => eleman % 2 === 0);
console.log("İlk Çift Sayi:", ilkCiftSayi);

// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
let sonCiftSayi = dizi.reverse().find(eleman => eleman % 2 === 0);
console.log("Son Çift Sayi:", sonCiftSayi);

// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
let negatifVarMi = dizi2.some(eleman => eleman < 0);
console.log("Negatif Sayi Var Mi?", negatifVarMi);

// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
let hepsiPozitifMi = dizi.every(eleman => eleman > 0);
console.log("Hepsi Pozitif Mi?", hepsiPozitifMi);

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek

let siraliDizi = dizi.sort((a, b) => a - b);
siraliDizi.map(eleman => console.log( eleman));
