// 1- myObject isimli boş bir nesne oluşturun.
// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.
// 5- nesnenizin anahtarlarını konsola yazdırın.
// 6- nesnenizin değerlerini konsola yazdırın.
// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin
// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.


// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
/*(örn çıktı: 
05.01.2020 balata değişimi - 1700 TL
05.01.2020 yağ değişimi - 700 TL
05.01.2020 boya koruma - 700 TL
...
...
...
28.08.2022 seramik kaplama - 4500 TL
)
*/

const aracBilgileri = {
    id: "audiA6_123",
    model: "audiA6",
    yil: 2019,
    renk: "kırmızı",
    servisKayitlari: [
      {
        id: "audiA6_123_1",
        tarih: "05.01.2020",
        km: 2500,
        ucret: 3000,
        detay: [
          {
            id: "audiA6_123_1_1",
            aciklama: "balata değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_1_2",
            aciklama: "yağ değişimi",
            ucret: 700,
          },
          {
            id: "audiA6_123_1_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_2",
        tarih: "25.06.2021",
        km: 10500,
        ucret: 5000,
        detay: [
          {
            id: "audiA6_123_2_1",
            aciklama: "balata değişimi",
            ucret: 2700,
          },
          {
            id: "audiA6_123_2_2",
            aciklama: "yağ değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_2_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_3",
        tarih: "28.08.2022",
        km: 25400,
        ucret: 10000,
        detay: [
          {
            id: "audiA6_123_3_1",
            aciklama: "balata değişimi",
            ucret: 3500,
          },
          {
            id: "audiA6_123_3_2",
            aciklama: "yağ değişimi",
            ucret: 2000,
          },
          {
            id: "audiA6_123_3_3",
            aciklama: "seramik kaplama",
            ucret: 4500,
          },
        ],
      },
    ],
  };

  
// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.

// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

// 1- myObject isimli boş bir nesne oluşturun.
let myObject = {};

// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
myObject.isim = "Sergen";
myObject.yas = 29;
myObject.cinsiyet = "Erkek";
myObject.meslek = "Developer";

// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
delete myObject.cinsiyet;

// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.
let myObjectKopya = Object.assign({}, myObject);
console.log("kopya"+ myObjectKopya);

// 5- nesnenizin anahtarlarını konsola yazdırın.
console.log("Anahtarlar:", Object.keys(myObject));

// 6- nesnenizin değerlerini konsola yazdırın.
console.log("Değerler:", Object.values(myObject));

// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
for (let key in myObject) {
    console.log(`Anahtar: ${key}, Değer: ${myObject[key]}`);
  }

// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin
console.log("Isim özelliği var mi?", myObject.hasOwnProperty("isim"));

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
Object.freeze(myObject);

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.
Object.seal(myObject);

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
aracBilgileri.servisKayitlari.forEach(servisKaydi => {
  console.log(`${servisKaydi.tarih} - ${servisKaydi.detay.map(detay => `${detay.aciklama} - ${detay.ucret} TL`).join(', ')}`);
});

// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.
let student = {
  name: "Sergen",
  grade:[90, 50, 68],
  school: "A School"
};

function printObjectProperties(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

printObjectProperties(student);

// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun.
let students = [
  { name: "berk", grades: [80, 90, 75] },
  { name: "cansin", grades: [70, 85, 92] },
  { name: "ozan", grades: [95, 88, 78] }
];

// her nesnenin kendisine ait isim ve not özellikleri bulunsun.
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let averageGrade = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length;
    let status = averageGrade >= 60 ? "Geçti" : "Kaldı";
  
    let resultObject = {
      name: student.name,
      averageGrade: averageGrade.toFixed(2),
      status: status
    };
  
    console.log(resultObject);
  }

  function karsilastir(a, b) {
    return (
      (a > b && "a b den büyüktür") ||
      (a < b && "a b den küçüktür") ||
      (a === b && "a b'ye eşittir")
    );
  }
 
  console.log(karsilastir(5, 3));  
  console.log(karsilastir(2, 8)); 
  console.log(karsilastir(5, 5)); 


  const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com/";

  const deleteRequest=(url,cb)=>{
    const xhr=new XMLHttpRequest();
    xhr.open("DELETE",url,true);

    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
          if(xhr.status < 300 && xhr.status >= 200){
              const response = JSON.parse(xhr.responseText);
              cb(null, response);
          } else {
              cb("Hata: " + xhr.status, null);
          }
      }
  };
  xhr.send;
};

deleteRequest(`${jsonPlaceholderURL}posts/1`, (error, response) => {
  if (error) {
      console.log(error);
  } else {
      console.log(response);
  }
});

const updateRequest = (url, data, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
          if(xhr.status < 300 && xhr.status >= 200){
              const response = JSON.parse(xhr.responseText);
              cb(null, response);
          } else {
              cb("Hata: " + xhr.status, null);
          }
      }
  };

  xhr.send(JSON.stringify(data));
};

const updatedData = { name: "NewName", age: 31 };
updateRequest(`${jsonPlaceholderURL}posts/1`, updatedData, (error, response) => {
  if (error) {
      console.log(error);
  } else {
      console.log(response);
  }
});

const patchRequest = (url, data, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
          if(xhr.status < 300 && xhr.status >= 200){
              const response = JSON.parse(xhr.responseText);
              cb(null, response);
          } else {
              cb("Hata: " + xhr.status, null);
          }
      }
  };

  xhr.send(JSON.stringify(data));
};

const patchedData = { name: "Patched Name" };
patchRequest(`${jsonPlaceholderURL}posts/1`, patchedData, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});


const getRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
          if (xhr.status < 300 && xhr.status >= 200) {
              const response = JSON.parse(xhr.responseText);
              cb(null, response);
          } else {
              cb("Hata: " + xhr.status, null);
          }
      }
  };

  xhr.send();
};

getRequest(`${jsonPlaceholderURL}posts/1`, (error, response) => {
  if (error) {
      console.log(error);
  } else {
      console.log(response);
  }
});

const postRequest=(url,data,cd)=>{
  const xhr=new XMLHttpRequest();
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if (xhr.status < 300 && xhr.status >= 200) {
            const response = JSON.parse(xhr.responseText);
            cb(null, response);
        } else {
            cb("Hata: " + xhr.status, null);
        }
    }
};

xhr.send(JSON.stringify(data));
};

const postData = { name: "Sergen", age: 29 };
postRequest(`${jsonPlaceholderURL}posts`, postData, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});




