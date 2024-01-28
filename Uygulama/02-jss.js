// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler

let myArray = ["Sergen", "Aktas", 29, true, "elma", "muz","cilek","patates", "patlican", "mercimek"];

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.

myArray[0]="selcuk";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.

console.log("Dizinin Uzunluğu:", myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

myArray.push("kopek");
let yeniUzunluk=0;
for(let index in myArray){
    yeniUzunluk++;
}
console.log("Dizinin yeni Uzunluğu:", yeniUzunluk);

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

myArray.unshift("kedi");
let yeniUzunluk2=0;
for(let index in myArray){
    yeniUzunluk2++;
}
console.log("Dizinin yeni Uzunluğu:", yeniUzunluk2);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let silinenSonEleman = myArray.pop();
console.log("Silinen Son Eleman:", silinenSonEleman);

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let silinenIlkEleman = myArray.shift();
console.log("Silinen İlk Eleman:", silinenIlkEleman);

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)

let newArray = [silinenIlkEleman, silinenSonEleman, yeniUzunluk, yeniUzunluk2];

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.

let combinedArray1 = myArray.concat(newArray);
let combinedArray2 = [...myArray, ...newArray];

// 10- myArray içerisinde eleman olarak "Veli" var mı ?

let veliVarMi = myArray.includes("Veli");
console.log("Veli Var Mi?", veliVarMi);

// 11- myArray içersinide 4.elemandan itibaren patates var mı?

let patatesVarMi = myArray.slice(3).flat().includes("patates");
console.log("Patates Var Mi?", patatesVarMi);

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?

let meyveIndex = myArray.indexOf("elma");
console.log("Meyve Index:", meyveIndex);

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.

let ilkUcEleman = newArray.slice(0, 3);
console.log("İlk Üç Eleman:", ilkUcEleman);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.

ilkUcEleman.splice(1, 1, "YeniEleman1", "YeniEleman2");

// 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']
console.log(ilkUcEleman);
ilkUcEleman.splice(0, 1);
ilkUcEleman.splice(1, 1, "DegisenEleman");
ilkUcEleman.push("YeniEleman3");
console.log(ilkUcEleman);

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

let stringDizi = ilkUcEleman.join(" + ");
console.log("String Dizi:", stringDizi);